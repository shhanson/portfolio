$(document).ready(function(){

  $('.materialboxed').materialbox();

  $('*').css('cursor', 'pointer');

  $(document).on('click touchstart', '#meetrunnerLink', () => {
    $('.project').hide();
    $('#meetrunnerProject').show();
  });

  // $('#meetrunnerLink').click(() => {
  //   $('.project').hide();
  //   $('#meetrunnerProject').show();
  // });


  $('#budgieLink').click(() => {
    $('.project').hide();
    $('#budgieProject').show();
  });

  $('#sinclairLink').click(() => {
    $('.project').hide();
    $('#sinclairProject').show();
  });

  $('#tinyhabitsLink').click(() => {
    $('.project').hide();
    $('#tinyhabitsProject').show();
  });
});
