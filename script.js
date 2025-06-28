window.addEventListener("scroll", function () {
  const holaDiv = document.querySelector(".hola");
  const scrollY = window.scrollY;

  if (scrollY > 70) { // cuando baja más de 70px
    holaDiv.classList.add("fade-out");
  } else {
    holaDiv.classList.remove("fade-out");
  }
});

function ajustarMargenTop() {
  const header = document.querySelector(".encabezado"); //Busca el <header> con clase .encabezado.
  const contenido = document.querySelector(".contenido-principal");//Busca el <main> (o div) con clase .contenido-principal.
  if (header && contenido) {//si existen, osea encuentra el encabezado y el contenido-principal,pasa lo q se declara entre los corchetes osea Le pone al contenido un margin-top igual a la altura real del header (header.offsetHeight). 
    contenido.style.marginTop = header.offsetHeight + "px"; //offsetHeight devuelve la altura del elemento incluyendo padding y border.
  }
}

window.addEventListener("DOMContentLoaded", ajustarMargenTop); //Se usa para ejecutar ajustarMargenTop() apenas la página está lista, así el main se empuja hacia abajo en cuanto carga.
window.addEventListener("resize", ajustarMargenTop); //Se usa para ejecutar ajustarMargenTop() apenas la página está lista, así el main se empuja hacia abajo en cuanto carga.

//Tu header es fixed y está encima del contenido.
//El alto del header puede variar (en móviles, por ejemplo).
//Si no actualizás el margin-top, el contenido puede quedar tapado.