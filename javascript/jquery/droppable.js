$(function(){
    $('.cuadro1').draggable({
        cursor: 'move',
        cursorAt: {
            top: 69,
            left: 69
        },
        snap: '.contenedor',
        snapMode : 'iner',
    });
      $('.cuadro2').draggable({
        cursor: 'move',
        cursorAt: {
            top: 69,
            left: 69
        },
     snap: '.contenedor'
    });
    $('.contenedor').droppable({
        activeClass : 'activo',
        hoverClass : 'hover',
        drop : function(evento, ui) {
            $(this)
            .css({'background-color': 'greenyellow', 'font-size': '30px'})
            .html('Has soltado el elemento');
            ui.draggable.css({'background-color' : '#5d5dff'});
            $.ajax({
                //agrega elemento en la base de datos
                
            });
        },
        tolerance : 'fit',
        out : function( evento, ui ) {
          $(this)
            .css({'background-color': 'rgba(0, 103, 128, 0.4)', 'font-size': '30px'})
            .html('Has soltado el Elemento del contenedor');
            ui.draggable.css({'background-color' : 'brown'});
            
            $.ajax({
                //Eliminando lo agregado
            });
        }

    })
});