$(function(){
    $('.cuadro').draggable({
        cursor: 'move',
        cursorAt: {
            top: 69,
            left: 69
        },
        start : function() {
            $('.contenido').html('Has iniciado el draggable');
        },
        stop : function() {
            $('contenido').html('Has detenido el movimiento');
        },
        drag : function() {
            $('.contenido').html('has empezado a mover el cuadro');
        },
        revert: true,
        helper: 'clone',
       
        });
     });
 