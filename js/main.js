$(function(){
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


