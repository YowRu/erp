$(document).ready(function() {
  
  $("#main").delegate("input[type=text].datepicker", "click", function(){
    $(this).datepicker({format: 'YYYY/MM/DD'});
    $(this).datepicker().datepicker("setDate", new Date());
 });
  $( ".datepicker" ).datepicker({format: 'YYYY/MM/DD'});
  $(".datepicker").datepicker().datepicker("setDate", new Date());

 });
