$(function () {
   $('#sixth');

   console.log($('#sixth'));

   console.log($('.newItem'));

   console.log($('h2'));

   console.log($('.item:not(#sixth)'));

   console.log(       $('.item:even'));

   console.log(          $('.item:eq(0)'));

   $('#sixth').html('<i>Zmieniony html</i>');
   $('.newItem').text('Zmieniony tekst');

   $('.item:first').before('<li class="item">Dodany przed pierwszym </li>);

/*$('#sixth').css('font-size', '2em');*/

   $('.textInput').on('focus', function () {
       $(this).css('border', '3px solid lightgray');

   });



});