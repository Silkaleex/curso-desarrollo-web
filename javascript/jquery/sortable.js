$(function(){
    $('#ordenable, #ordenable2').sortable({
        revert : true,
        placeholder : 'hoverOrdenable',
        connectWith : '.conectar',
        update : function(event,ui) {
            alert('Has dejado caer el item de ordenamiento')
        }
    }).disableSelection();
    $('#draggable').draggable({
        connectToSortable : '#ordenable, #ordenable2',
        helper : 'clone',
        revert : 'invalid',
    });
});