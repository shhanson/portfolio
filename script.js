$(document).ready(function(){


  $('.materialboxed').materialbox();

  $('#meetrunnerLink').bind('tap', tapHandler);

  function tapHandler(event){
    $('.project').hide();
    $('#meetrunnerProject').show();
  }



  $('#meetrunnerLink').click(() => {
    $('.project').hide();
    $('#meetrunnerProject').show();
  });
  // $('#meetrunnerLink').on('click', function(){
  //     $('.project').hide();
  //     $('#meetrunnerProject').show();
  // });
  // 
  // $('#meetrunnerLink').on('tap', () => {
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
