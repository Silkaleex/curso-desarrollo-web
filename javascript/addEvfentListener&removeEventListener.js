////Elemento que escuche
//elemento_que_escuche.addEventListener("click", function, Boolean)
//Ejemplo 1
var seccion, div, boton, boton2;
seccion = document.getElementsByTagName('section')[0];
div = document.getElementsByTagName('div')[0];
boton = document.getElementsByTagName('button')[0];
boton2 = document.getElementsByTagName('Button')[1];

function lanzador() {
    function soySeccion () {
        alert('Hola soy la etiqueta Section');
    }
    function soyDiv () {
        alert('Hola soy la etiqueta DIV');
    }
    function soyBoton () {
        alert('Hola soy la etiqueta button');
    }
    seccion.addEventListener('click', soySeccion, true);
    div.addEventListener('click', soyDiv, true);
    boton.addEventListener('click', soyBoton, true);
    
    function lanzar() {
    alert('Me ejecuto solo una vez');
    boton2.removeEventListener('click', lanzar, false);
        }
    boton2.addEventListener('click', lanzar, false);
    }

window.addEventListener('load', lanzador, false);

