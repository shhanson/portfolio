$(document).ready(function(){


  $('.materialboxed').materialbox();

  $('*').css('cursor', 'pointer');


  // $('#meetrunnerLink').click(() => {
  //   $('.project').hide();
  //   $('#meetrunnerProject').show();
  // });
  $('#meetrunnerLink').on('click', function(){
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
