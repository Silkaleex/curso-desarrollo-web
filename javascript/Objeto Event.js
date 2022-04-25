
//   Ejemplo 1    
//   function resalta (elEvento) {
//       var evento = elEvento || window.event;
//       var tipo = evento.type;
//       
//       switch(tipo){
//           case'mouseover':
//               this.style.borderColor = 'white';
//               this.style.backgroundColor = 'black';
//               break;
//               
//            case'mouseout':
//               this.style.borderColor = 'black';
//               this.style.backgroundColor = 'white';
//               break;
//       }
//   }
//    var seccion = document.getElementById('seccion');
//       
//      window.onload = function() {
//      
//      seccion.onmouseover = resalta;
//      seccion.onmouseout = resalta;
//  }     
//   
//  Ejemplo 2 no funciona no entiendo por que he mirado todo y no funciona, lo que hace en este caso es si presiono control alt y shift se abre una pantalla alert diciendo que estoy presionando ese boton.
//       
//       var seccion = document.getElementById('seccion');
//       function muestraInfo(elEvento){
//           var e = window.event || elEvento;
//           var mensaje = "Tipo de evento!" + e.type + "<br> " + "propiedad KeyCode: " + e.keyCode + "<br> " + "Propiedad charCode: " + e.charCode + "<br>" + "caracter Pulsado: " + String.fromCharCode(e.charCode);
//           
//        seccion.innerHTML += "<p>"+ info + "</p> -------------- ";
//       }
//       if (e.altKey) {
//           alert('Tecla alt presionada');
//       }else if (e.ctrlKey) {
//           alert('tecla control pulsada')
//       }else if (e.shift) {
//           alert('Tecla shift presionada')
//       }
//           if ( e.ctrlKey && e.charCode === 115) {
//               //Guardar contenido
//           }
//       
//       window.onload = function() {
//           document.onkeyup = muestraInfo;
//           document.onkeypress = muestraInfo;
//           document.onkeydown = muestraInfo;
//       }
//     
//      Ejemplo 3 posicion del puntero respecto a la ventana del navegador
      var seccion = document.getElementById('seccion');
      function muestraInfo(e) {
          var e = window.event || elEvento;
          var ie = navigator.userAgent.toLocaleLowerCase().indexOf('msie')!=-1;
          
            var coordenadasX = e.clientX + document.body.scrollLeft;
            var coordenadasY = e.clientY + document.body.scrollTop;
          
          if ( ie ) {
              coordenadasX;
              coordenadasY;
          }else{
              coordenadasX = e.pageX;
              coordenadasY = e.pageY;
          }
          
          var coordenadasX = e.screenX;
          var coordenadasY = e.screenY;
          
          seccion.innerHTML += "<p>Has pulsado el ratón en la posicion: (" + coordenadasX + "," + coordenadasY + ")</p>";
      }
       document.onclick = muestraInfo;
