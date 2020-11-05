$(function() {
    
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });
});

//Página Sobre Nosotros
$(function() {
    
   //Doctrinas
   $('.creencias .info_creencia:first').show();
   $('.menu_doctrinas a:first').addClass('activo');
   $('.menu_doctrinas a').on('click', function() {
       $('.menu_doctrinas a').removeClass('activo');
       $(this).addClass('activo');
       $('.ocultar').hide();
       var enlace = $(this).attr('href');
       $(enlace).fadeIn(1000);
       return false;
    });
});
