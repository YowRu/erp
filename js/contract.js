$(document).ready(function() {
  $( ".datepicker" ).datepicker({format: 'YYYY/MM/DD'});

  $(".datepicker").datepicker().datepicker("setDate", new Date());

  $('.btn.addVendor').click(function(){
    $('.popUpWP').css({'display':'flex'});
  });

  $('.btn.back').click(function(){
    $('.popUpWP').hide();
  });
  
});

