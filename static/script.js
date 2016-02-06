
$('.logo').delay(200).transition({ scale : 1 });

$('iframe').attr( 'src', 'https://telegram.inevio.com/app/index.html' );

$('iframe').load(function() {

  setTimeout( function(){
    $('.logo').remove();
    $('iframe').show();
  }, 300 );

});
