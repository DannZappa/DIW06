// Canvas de animación Work in Progress

var micanvas = document.querySelector("canvas");
var micanvas, ctx;
var tiempo = 0;
var stop;
var fondo = new Image();
fondo.src = "img/work.png";

window.addEventListener("load", init);

function init() {
  micanvas = document.getElementById("canvas");

  micanvas.width = 600;
  micanvas.height = 400;

  ctx = micanvas.getContext("2d");
  comenzar();
}

function comenzar() {
  clearTimeout(stop);
  stop = setInterval(comenzar, 1);
  dibujar(ctx);
}

function detener() {
  clearTimeout(stop);
}

function dibujar(ctx) {
  ctx.clearRect(0, 0, micanvas.width, micanvas.height);
  ctx.drawImage(fondo, tiempo, 0);
  ctx.drawImage(fondo, tiempo - 800, 0);

  tiempo--;
  if (tiempo < 0) {
    tiempo = tiempo + 800;
  }
}

// Botón de subir

var toTopButton = document.getElementById("botonSubir");

// El botón de subir se muestra al bajar 100px desde el margen superior de la página
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
};

// Al pusarlo, sube arriba con un movimiento suave o smooth
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Acordeon

window.addEventListener("load", init);

function init() {
  var array = Array.from(document.querySelectorAll(".accordion .titulo"));
  array.map((a) => a.addEventListener("click", cambiarVisibilidadAccordion));
}

function cambiarVisibilidadAccordion() {
  this.parentNode.classList.toggle("cerrado");
}

// Atajo para volver arriba (Ctrl+a)

document.addEventListener("keydown", function (event) {
  // Verifica si se presiona Ctrl + A
  if (event.ctrlKey && event.key === "a") {
    // Prevenir la acción predeterminada del navegador (seleccionar todo)
    event.preventDefault();
    // Desplazar a la parte superior de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
