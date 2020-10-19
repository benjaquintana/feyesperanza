$(function(){
    //Menu Responsive
    $('.menu_movil').on('click', function() {
      $('.navegacion_principal').slideToggle();
    });

    //Controles Video Radio
    var video1 = document.getElementById('video1');
        Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
        studio.video.Reporter.attach('video_1', video1);
        });
});


