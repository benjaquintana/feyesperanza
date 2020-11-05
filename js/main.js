$(function(){
    
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });
});

$(function(){
   
    //Página Sobre Nosotros
    //Doctrinas
   
    $('.menu_doctrinas a').on('click', function() {
        var enlace = $(this).attr('href');
        console.log(enlace);
    });
});
