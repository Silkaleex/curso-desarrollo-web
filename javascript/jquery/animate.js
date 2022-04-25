$(document).ready(function(){
    $('.boton').click(function(){
       $('img').animate({top:"+=100px"}, 1000)
    });


var $cuervo= $('.cuervo');

$(document).keydown(function(key){  
    switch( key.which ) {
    //A
        case 65:
            $cuervo.animate({left: "-=10px"}, 'fast');
             $('.contenido').html( "A ->"+key.which );
            break;
    //D
        case 68:
            $cuervo.animate({left: "-=10px"}, 'fast');
             $('.contenido').html( "D ->"+key.which );
            break;
    //W
        case 87:
            $cuervo.animate({top: "-=10px"}, 'fast');
             $('.contenido').html( "W ->"+key.which );
            break;
    //S
        case 83:
            $cuervo.animate({top: "-=10px"}, 'fast');
             $('.contenido').html( "S ->"+key.which );
            break;
        }
    });
});
