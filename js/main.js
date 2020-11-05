$(function(){
    alert("funciona");
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });

    //Controles Video Radio
    var video1 = document.getElementById('video_index');
        Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
        studio.video.Reporter.attach('video_index', video1);
        });
});

$(function() {
    
    //Página Sobre Nosotros
    //Doctrinas
    $('.programa_evento .info_curso:first').show();
    $('.menu_programa a:first').addClass('activo');
    $('.menu_programa a').on('click', function() {
        $('.menu_programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace=$(this).attr('href');
        $(enlace).fadeIn(1000);
        return(false);
    });
});
