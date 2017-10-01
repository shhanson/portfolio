$(document).ready(function(){

  $('.materialboxed').materialbox();

  $('.projectLink').css('cursor', 'pointer');

  $('#meetrunnerLink').click(() => {
    $('.project').hide();
    $('#meetrunnerProject').show();
  });


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
