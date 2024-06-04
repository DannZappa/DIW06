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
