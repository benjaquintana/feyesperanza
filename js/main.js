$(function(){
    
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });
});

$(function(){
   
    //Página Sobre Nosotros
    //Doctrinas
   $('.creencias .info_creencia:first').show();
   $('.menu_doctrinas a').on('click', function() {
       $('.ocultar').hide();
       var enlace = $(this).attr('href');
       $(enlace).fadeIn(1000);
       return false;
    });
});
