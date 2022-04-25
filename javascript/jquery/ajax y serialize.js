$(document).ready(function(){
   
    
        var url = 'ajax y serialize.php'(),
            $img = $('img');
    
    $('#boton').click(function(){
        
//        var coche = $('#coche').val(),
//            modelo = $('#modelo').val(),
//            color = $('#color').val(),
        var datos = $('form').serialize(),
            
            $('.informacion').html(datos);
        
        $.ajax({
            url: url,
            type: 'POST',
            data : {
                'coche' : coche,
                'modelo' : modelo,
                'color' : color;
            } ,
            dataType : 'html',
            beforeSend : function(){
                $img.css({display:'block'});
            },
            complete : function(){
                $img.css({display:'none'});
            },
            success : function(datos){
                $('.informacion').html(datos);
            },
            error : function(ajax, estado, excepcion){
                
            }
        })
    })
    
});