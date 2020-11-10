$(function() {
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });
});

//Página Sobre Nosotros

//Menu Doctrinas
$(function() { 
   
    $('.creencias .menu_creencia:first').show();
    $('.menu_doctrinas a:first').addClass('activo_doctrina');
    $('.menu_doctrinas a').on('click', function() {
        $('.menu_doctrinas a').removeClass('activo_doctrina');
        $(this).addClass('activo_doctrina');
        $('.ocultar_creencias').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        $(enlace + ' a:first').click();
        return false;
    });
});

//Menu Creencias
$(function() {
    $('.menu_creencia .info_creencia:first').show();
    $('.menu_creencia a:first').addClass('activo_creencia');
    $('.menu_creencia a').on('click', function() {
        $('.menu_creencias a').removeClass('activo_creencia');
        $(this).addClass('activo_creencia');
        $('.ocultar_creencia').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
});