$(document).ready(function(){
   
    $('#boton').on('click', function(){
       $.get ('Metodo%20get%20de%20jquery.css',{
           //Aqui van elementos php que hayamos creado por ejemplo coche:'renault'..... y cambiamos lo que tenemos entre parentesis del metodo -> $.get(aqui hay que enlazarlo con el archivo php)
       }, function(valor){
          $('.informacion').html(valor);
        console.log(valor);
       });
    });
});