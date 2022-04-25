$(document).ready(function(){
    
    var $esf = $('.esfera');
    
    $esf.click(function(){
        $(this).delay(1000).fadeOut();
    })
    .mouseleave(function(){
        $(this).removeClass('azul');
    });
    $('#campo').focus(function(){
        $(this).css('outline-color', '#ff0000');
    })
    .keypress( function(){
        var v = $(this).val();
        $esf.html(v);
    });   
    
    $('#base').click(function(){
        $('#panel').slideDown(4000);
    });
    
     $('#panel').click(function(){
        $(this).slideUp(4000);
    });
     $('#base').click(function(){
        if( $(this).hasClass('miclase') ){
            $('#panel').html("Si tiene la clase");
        }else{
            $('#panel').html("no tiene la clase");
        }
    });
      $('#base').click(function(){
           $(this).attr('title', 'contenedor modificado');
            var t = $(this).attr('title');
            $('#panel').html(t);
        });
    $('#base').click(function(){
        $('img').attr('src', 'http://imagenpng.com/wp-content/uploads/2017/01/fondo4.jpg');
        });
    });

$(function(){
    $('.esfera').on('click', function(){
        $(this).toggleClass('azul');
    });
    
    $('h3').click(function(){
        $('.esfera').fadeToggle('slow', function(){
            //Seleccionando Jquery es decir el H3
            $('.contenido').html('<h1>Estas utilizado el efecto fadeToggle</h1>');
        });
    });
    
    $('#base').click(function(){
        $('#panel').slideToggle();
    });
    $('#boton').click(function(){
       $('.esfera').toggle(4000); 
    });
    
});