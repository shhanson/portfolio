$(document).ready(function(){

  $('.materialboxed').materialbox();

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
