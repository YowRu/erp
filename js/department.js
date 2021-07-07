$(document).ready(function(){
  $('input.all').click(function(){
    if($(this).prop("checked")){
      $('table').find('input[type="checkbox"]').prop("checked", true);
    }else{
      $('table').find('input[type="checkbox"]').prop("checked", false);
    }
    
  });

  $('.btn.add.orange').click(function(){
    $('.orangeWP').show();
  });
  $('.btn.confirm').click(function(){
    $('.orangeWP').hide();
  });
  $('.btn.cancel').click(function(){
    $('.orangeWP').hide();
  });

$('input[type="checkbox"]').click(function(){
  
  if($(this).prop("checked")){
    if($(this).hasClass('all')){
      $(this).parents('table').find('tr').addClass('checked');
    }else{
      $(this).parents('tr').addClass('checked');
    }

  }else{
    $(this).parents('tr').removeClass('checked');
  }
});

$('.btn.deleteAll').click(function(){
  $(this).parents('section').children('table').find('tr.checked:not(.th.checked)').remove();
  $('table').find('.th').find('input[type="checkbox"]').prop("checked", false);
});

  function tableNO() {
    $('table').each(function(){
        let n = $(this).find('tr').length;
        for(let i =2;i<n;i++){
          if(i<11){
            $(this).find('tr').eq(i).find('.number').text('0'+(i-1));
          }else{
            $(this).find('tr').eq(i).find('.number').text(i-1);
          }
        }
      });
  };

  $('.delete').click(function(){
    
    if($(this).parents('tr').find('number')){
      $(this).parents('tr').remove();
      tableNO();
    }else{
      $(this).parents('tr').remove();
    }
    
  });
  $("table").delegate(".delete","click",function(){
    $(this).parents('tr').remove();
  });

});