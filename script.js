$(document).ready(function(){

  const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

  $('.materialboxed').materialbox();

  $('*').css('cursor', 'pointer');

  // $(document).on(touchEvent, '#meetrunnerLink', () => {
  //   $('.project').hide();
  //   $('#meetrunnerProject').show();
  // });
  const meetrunner = document.getElementById('meetrunnerLink');
  meetrunner.addEventListener('click', function(){
    $('.project').hide();
    $('#meetrunnerProject').show();
  });

  // $(document).on(touchEvent, '#meetrunnerLink', function(){
  //   $('.project').hide();
  //   $('#meetrunnerProject').show();
  // });

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
