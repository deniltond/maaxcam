$(document).ready(function() {
/*    $('#myCarousel').carousel({
	    interval: 10000
	})*/
	
    $( "#slide1" ).click(function() {
    	alert('Ponte Hercílio Luz');
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37900/live/live/ponte-hercilio-luz?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Ponte Hercílio Luz"></iframe>');
        $('#currentSlide_title').html('Ponte Hercílio Luz');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_ponte.jpg'>");

    });

    $( "#slide2" ).click(function() {
    	alert('Kioske');
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/39444/live/live/kiosque-beiramar-norte?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Kioske"></iframe>');
        $('#currentSlide_title').html('Kioske');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_anuncie.png'>");

    });

    $( "#slide3" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37866/live/live/beira-mar-norte?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Beira Mar Norte"></iframe>');
        $('#currentSlide_title').html('Beira Mar Norte');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_gelatoo.png'>");

    });

//    Slide 2
    $( "#slide4" ).click(function() {
        $('#currentSlide').html('    <iframe src="http://monitore.maaxcam.com.br/embed/37903/live/live/camera-catedral?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Catedral"></iframe>');
        $('#currentSlide_title').html('Catedral');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_catedral.jpg'>");
    });
    $( "#slide5" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37864/live/live/parque-de-coqueiros?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Coqueiros"></iframe>');
        $('#currentSlide_title').html('Coqueiros');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_coqueiros.jpg'>");

    });
    $( "#slide6" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/38138/live/live/beiramar-koxixos?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Koxixos"></iframe>');
        $('#currentSlide_title').html('Koxixos');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_koxixos.gif'>");

    });

//  Slide 3
    $( "#slide7" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37910/live/live/mirante-lagoa?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Mirante da Lagoa"></iframe>');
        $('#currentSlide_title').html('Mirante da Lagoa');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_anuncie.png'>");

    });
    $( "#slide8" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37594/live/live/ponte-lagoa-da-conceicao?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Ponte da Lagoa"></iframe>');
        $('#currentSlide_title').html('Ponte da Lagoa');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_anuncie.png'>");

    });
    $( "#slide9" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/38141/live/live/marina-sto-antonio-de-lisboa?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Marina Santo Antônio de Lisboa"></iframe>');
        $('#currentSlide_title').html('Marina Sto Antônio de Lisboa');
        $('#propaganda_slide').html("<img src='/site_media/static/assets/images/publicidade_sto_antonio.jpg'>");

    });
    
//  Slide 4
    $( "#slide10" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37902/live/live/camera-kitesurf?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Câmera Kit Surf"></iframe>');
        $('#currentSlide_title').html('Câmera Kite-Surf');
    });
    $( "#slide11" ).click(function() {
        $('#currentSlide').html('<iframe src="http://monitore.maaxcam.com.br/embed/37906/live/live/joaquina?autoplay=true&sound=true" width="685px" height="400px" frameborder="0" allowfullscreen title="Praia da Joaquina"></iframe>');
        $('#currentSlide_title').html('Praia da Joaquina');
    });
    

});
