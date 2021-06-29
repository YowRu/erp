$(document).ready(function() {
  
  $("#main").delegate("input[type=text].datepicker", "click", function(){
    $(this).datepicker({format: 'YYYY/MM/DD'});
    $(this).datepicker().datepicker("setDate", new Date());
 });
  $( ".datepicker" ).datepicker({format: 'YYYY/MM/DD'});
  $(".datepicker").datepicker().datepicker("setDate", new Date());

  $('.editVendor').click(function(){
    $('.popUpWP').css({'display':'flex'});
  });

  $('.btn.back').click(function(){
    $('.popUpWP').hide();
  });
  
  $('.addVendor').click(function(){
    let newTr = $(this).siblings('table').find('.copy').clone().removeClass('copy');
    $(this).siblings('table').find('tbody').append(newTr);
    let n = $(this).siblings('table').find('tr').length;
    for(let i=1;i<n-1;i++){
      if(n<10){
        $('table tr').eq(i+1).find('.number').text('0'+(i));
      }else{
        $('table tr').eq(i+1).find('.number').text(i);
      }
    } 
  });
  $("table").delegate(".delete","click",function(){
    let n =$(this).parents('table').find('tr').length;
    $(this).parents('tr').remove();
    for(let i=1;i<n-1;i++){
      if(n<10){
        $('table tr').eq(i+1).find('.number').text('0'+(i));
      }else{
        $('table tr').eq(i+1).find('.number').text(i);
      }
    }
  });

   $('section .btn.add').click(function(){
     let n = $(this).siblings('.row').length;
     let name = $(this).siblings('.copy').find('.datepicker').attr('id');
     let datepicker = $(this).siblings('.copy').find('.datepicker').removeClass('hasDatepicker').clone().prop('id', name+n);
     let btn = $(this).siblings('.copy').children('.btn').clone();

     $(this).parents('section').append('<div class="row"><p class="text">第<span class="number">'+n+'</span>次：</p></div>');
     $(this).parents('section').children('.row').last().append('<div class="dateWP"></div>');
     $(this).parents('section').children('.row').last().find('.dateWP').append(datepicker);
     $(this).parents('section').children('.row').last().append(btn);
   });
   
   $("section").delegate(".btn.delete","click",function(){
     let n =$(this).parents('section.copy').children('.row').length;
     console.log(n);
     for(let i=1;i<n-1;i++){
       $(this).parents('section').find('.row').eq(i).find('.number').text(i);
     } 
     $(this).parents('.row').remove();
   });
 });
