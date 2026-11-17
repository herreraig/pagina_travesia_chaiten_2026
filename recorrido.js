// PORTADA. El HTML contiene una sola lista de imágenes y un solo menú.
const portada = document.querySelector(".portada");
const menu = document.getElementById("menu-principal");
const diapositivas = Array.from(document.querySelectorAll(".diapositivas img"));
const fondoMenu = menu.querySelector(".fondo-menu");
const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");

// Reutiliza las mismas imágenes detrás del menú cuando queda fijo arriba.
for (const imagen of diapositivas) {
  const copia = imagen.cloneNode(true);
  copia.removeAttribute("fetchpriority");
  fondoMenu.append(copia);
}
const miniaturas = Array.from(fondoMenu.children);
const intervaloImagenes = 3800; // Milisegundos entre cambios; el fundido dura 1,2 s en CSS.
let imagenActual = 0;
let relojImagenes;

function cambiarImagen() {
  const siguiente = (imagenActual + 1) % diapositivas.length;
  if (!diapositivas[siguiente].complete || !diapositivas[siguiente].naturalWidth) return;
  diapositivas[imagenActual].classList.remove("activa");
  miniaturas[imagenActual].classList.remove("activa");
  diapositivas[siguiente].classList.add("activa");
  miniaturas[siguiente].classList.add("activa");
  imagenActual = siguiente;
}

function ajustarDiapositivas() {
  clearInterval(relojImagenes);
  if (!movimientoReducido.matches && !document.hidden && diapositivas.length > 1) {
    relojImagenes = setInterval(cambiarImagen, intervaloImagenes);
  }
}
document.addEventListener("visibilitychange", ajustarDiapositivas);
movimientoReducido.addEventListener("change", ajustarDiapositivas);
ajustarDiapositivas();

// ÍNDICE DE FAENAS. Cada enlace apunta a un artículo que permanece en la página.
const indice = document.querySelector(".indice-vertical");
const controlIndice = indice.querySelector(".indice-control");
const listaFaenas = indice.querySelector(".lista-faenas");
const enlacesFaena = Array.from(listaFaenas.querySelectorAll("a"));
const faenas = enlacesFaena.map(enlace => document.getElementById(enlace.hash.slice(1)));

function abrirIndice(abierto) {
  indice.classList.toggle("abierto", abierto);
  controlIndice.setAttribute("aria-expanded", String(abierto));
  controlIndice.setAttribute("aria-label", abierto ? "Ocultar títulos de las faenas" : "Mostrar títulos de las faenas");
  controlIndice.querySelector("span").textContent = abierto ? "−" : "+";
}
controlIndice.hidden = false;
controlIndice.addEventListener("click", () => abrirIndice(!indice.classList.contains("abierto")));
indice.addEventListener("pointerenter", event => {
  if (event.pointerType === "mouse") abrirIndice(true);
});
indice.addEventListener("pointerleave", () => {
  if (!indice.contains(document.activeElement)) abrirIndice(false);
});
indice.addEventListener("focusin", event => {
  if (event.target !== controlIndice) abrirIndice(true);
});
indice.addEventListener("focusout", event => {
  if (!indice.contains(event.relatedTarget)) abrirIndice(false);
});
indice.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    controlIndice.focus({ preventScroll: true });
    abrirIndice(false);
  }
});
listaFaenas.addEventListener("click", event => {
  if (event.target.closest("a")) abrirIndice(false);
});
document.addEventListener("pointerdown", event => {
  if (!indice.contains(event.target)) abrirIndice(false);
});

// Un único controlador de desplazamiento actualiza el menú y el punto vertical.
// La faena activa es la última cuyo título pasó por el primer cuarto de pantalla.
const enlacesMenu = Array.from(menu.querySelectorAll(".menu-enlaces a"));
const seccionesMenu = enlacesMenu.map(enlace => document.getElementById(enlace.hash.slice(1)));

function marcarEnlace(enlaces, activo) {
  enlaces.forEach((enlace, n) => {
    if (n === activo) enlace.setAttribute("aria-current", "location");
    else enlace.removeAttribute("aria-current");
  });
}

function posicionActual(secciones, referencia) {
  let actual = 0;
  secciones.forEach((seccion, n) => {
    if (seccion.getBoundingClientRect().top <= referencia) actual = n;
  });
  return actual;
}

function actualizarRecorrido() {
  menu.classList.toggle("fija", window.scrollY >= portada.offsetHeight * .8);
  const referencia = menu.offsetHeight + window.innerHeight * .22;
  marcarEnlace(enlacesMenu, posicionActual(seccionesMenu, referencia));

  const actual = posicionActual(faenas, referencia);
  marcarEnlace(enlacesFaena, actual);
  const enlace = enlacesFaena[actual];
  listaFaenas.style.setProperty("--marcador", (enlace.offsetTop + enlace.offsetHeight / 2) + "px");
}

let fotogramaPendiente = false;
function solicitarActualizacion() {
  if (fotogramaPendiente) return;
  fotogramaPendiente = true;
  requestAnimationFrame(() => {
    actualizarRecorrido();
    fotogramaPendiente = false;
  });
}
window.addEventListener("scroll", solicitarActualizacion, { passive: true });
window.addEventListener("resize", solicitarActualizacion);
window.addEventListener("hashchange", solicitarActualizacion);
window.addEventListener("load", solicitarActualizacion);

// La altura real del menú evita que un enlace deje un título tapado.
const medidaMenu = new ResizeObserver(() => {
  document.documentElement.style.setProperty("--alto-menu", menu.offsetHeight + "px");
  solicitarActualizacion();
});
medidaMenu.observe(menu);
actualizarRecorrido();

// CARRUSEL DE EL LUGAR. Tocar la tira o usar Enter / Espacio pausa y reanuda.
const galeria = document.querySelector("[data-galeria-historica]");
if (galeria && !movimientoReducido.matches) {
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
