const etapas = Array.from(document.querySelectorAll("[data-etapa]"));
const enlacesEtapa = document.querySelectorAll("[data-enlace-etapa]");
const recorrido = document.getElementById("travesia");

function mostrarEtapa() {
  const destino = document.getElementById(location.hash.slice(1));
  const etapa = destino?.closest("[data-etapa]") ?? etapas[0];
  const enlaceActual = Array.from(enlacesEtapa).find(enlace => enlace.hash === "#" + etapa.id);
  const foco = document.activeElement;

  for (const panel of etapas) {
    panel.hidden = panel !== etapa;
  }
  for (const enlace of enlacesEtapa) {
    if (enlace === enlaceActual) {
      enlace.setAttribute("aria-current", "location");
    } else {
      enlace.removeAttribute("aria-current");
    }
  }

  if (foco?.closest("[data-etapa]")?.hidden) {
    enlaceActual.focus({ preventScroll: true });
  }
  if (destino && destino === etapa) {
    recorrido.scrollIntoView();
  } else if (destino?.closest("[data-etapa]")) {
    destino.scrollIntoView();
  }
}

window.addEventListener("hashchange", mostrarEtapa);
mostrarEtapa();

const galeriaHistorica = document.querySelector("[data-galeria-historica]");

if (galeriaHistorica) {
  const grupo = galeriaHistorica.querySelector(".galeria-grupo");
  const pista = galeriaHistorica.querySelector(".galeria-pista");
  const control = galeriaHistorica.querySelector(".galeria-control");
  const copia = grupo.cloneNode(true);

  copia.setAttribute("aria-hidden", "true");
  pista.append(copia);
  galeriaHistorica.setAttribute("data-animada", "");
  control.hidden = false;

  control.addEventListener("click", () => {
    const pausada = galeriaHistorica.toggleAttribute("data-pausada");
    control.textContent = pausada ? "Reanudar galería" : "Pausar galería";
  });
}
