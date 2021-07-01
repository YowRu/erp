$(document).ready(function(){
  $('input.all').click(function(){
    if($(this).prop("checked")){
      $('table').find('input[type="checkbox"]').prop("checked", true);
    }else{
      $('table').find('input[type="checkbox"]').prop("checked", false);
    }
    
  });

  $('.btn.add.table').click(function(){
    let newTR = $(this).parents('section').find('table .copy').clone().removeClass('copy');
    
    $(this).parents('section').find('table tbody').append(newTR);
    
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