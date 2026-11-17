const obra = document.querySelector(".obra");
const faenas = Array.from(obra.querySelectorAll("[data-faena]"));
const enlaces = Array.from(obra.querySelectorAll("[data-enlace-faena]"));
const indice = obra.querySelector(".indice-faenas");
const linea = indice.querySelector(".timeline");
const control = obra.querySelector(".indice-control");

linea.style.setProperty("--total-faenas", enlaces.length);
obra.setAttribute("data-interactiva", "");
control.hidden = false;

function abrirIndice(abierto) {
  if (!abierto && indice.contains(document.activeElement)) {
    control.focus({ preventScroll: true });
  }
  indice.hidden = !abierto;
  control.setAttribute("aria-expanded", String(abierto));
  control.setAttribute("aria-label", abierto ? "Contraer índice de faenas" : "Desplegar índice de faenas");
}

control.addEventListener("click", () => abrirIndice(indice.hidden));

let sobrepasado;
function ajustarIndiceAlDesplazamiento() {
  const sigueBajando = obra.getBoundingClientRect().top < -105;
  if (sigueBajando !== sobrepasado) {
    sobrepasado = sigueBajando;
    abrirIndice(!sobrepasado);
  }
}
window.addEventListener("scroll", ajustarIndiceAlDesplazamiento, { passive: true });

function elegirFaena(origen) {
  const i = enlaces.findIndex(enlace => enlace.hash === location.hash);
  const seleccion = Math.max(0, i);
  const focoSalida = document.activeElement?.closest("[data-faena]");

  faenas.forEach((faena, n) => { faena.hidden = n !== seleccion; });
  enlaces.forEach((enlace, n) => {
    if (n === seleccion) enlace.setAttribute("aria-current", "location");
    else enlace.removeAttribute("aria-current");
  });
  linea.style.setProperty("--marcador", ((seleccion + .5) / enlaces.length * 100) + "%");

  if (focoSalida?.hidden || origen === "contenido") {
    faenas[seleccion].focus({ preventScroll: true });
  }
  if (i !== -1 && (origen !== "indice" || sobrepasado)) {
    obra.scrollIntoView();
  }
  ajustarIndiceAlDesplazamiento();
}

obra.addEventListener("click", event => {
  const enlace = event.target.closest('a[href^="#faena-"]');
  if (!enlace || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  event.preventDefault();
  if (location.hash !== enlace.hash) history.pushState(null, "", enlace.hash);
  elegirFaena(indice.contains(enlace) ? "indice" : "contenido");
});
window.addEventListener("hashchange", () => elegirFaena("historial"));
elegirFaena("carga");
requestAnimationFrame(() => obra.setAttribute("data-marcador-listo", ""));

const galeria = document.querySelector("[data-galeria-historica]");
if (galeria && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const ventana = galeria.querySelector(".galeria-ventana");
  const pista = galeria.querySelector(".galeria-pista");
  const copia = pista.querySelector(".galeria-grupo").cloneNode(true);
  copia.setAttribute("aria-hidden", "true");
  pista.append(copia);
  galeria.setAttribute("data-animada", "");
  ventana.setAttribute("role", "button");
  ventana.setAttribute("aria-label", "Pausar o reanudar la galería de El lugar");
  ventana.setAttribute("aria-pressed", "false");

  function alternarGaleria() {
    ventana.setAttribute("aria-pressed", String(galeria.toggleAttribute("data-pausada")));
  }
  ventana.addEventListener("click", alternarGaleria);
  ventana.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    alternarGaleria();
  });
}
