
function mostrarRespuesta() {
  document.getElementById("respuesta").classList.remove("oculto");
  lanzarCorazones();
}

function lanzarCorazones() {
  const container = document.getElementById("corazonesContainer");

  for (let i = 0; i < 20; i++) {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = 3 + Math.random() * 2 + "s";
    container.appendChild(corazon);

    setTimeout(() => {
      container.removeChild(corazon);
    }, 5000);
  }
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
