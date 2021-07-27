$(window).ready(function(){
    let pathname = window.location.pathname;
    let consult = pathname.split("/");
    let number = consult.length
    let W = $(window).width();
    
   $('section .btn.add').click(function(){

     if(consult[number-1] ==="contractEdit.html"){
      let n = $(this).siblings('.row').length;
      let name = $(this).siblings('.copy').find('.datepicker').attr('id');
      let datepicker = $(this).siblings('.copy').find('.datepicker').removeClass('hasDatepicker').clone().prop('id', name+n);
      let btn = $(this).siblings('.copy').children('.btn').clone();

      $(this).parents('section').append('<div class="row"><p class="text">第<span class="number">'+n+'</span>次：</p></div>');
      $(this).parents('section').children('.row').last().append('<div class="dateWP"></div>');
      $(this).parents('section').children('.row').last().find('.dateWP').append(datepicker);
      $(this).parents('section').children('.row').last().append(btn);
     }

   });
//mobileTable
function mobileTableNO() {
  $('.mobileTableWP').each(function(){
      let n = $(this).find('.mobileTable').length;
      for(let i =0;i<n;i++){
        if(i<10){
          $(this).find('.mobileTable').eq(i).find('.number').text('0'+(i+1));
        }else{
          $(this).find('.mobileTable').eq(i).find('.number').text(i+1);
        }
      }
    });
};

$('.btn.orangeDeep.deleteImg').click(function(){
  $(this).parents('.mobileTable').remove();
  mobileTableNO();
});

$(".mobileTableWP").delegate(".btn.orangeDeep.deleteImg","click",function(){
  $(this).parents('.mobileTable').remove();
  mobileTableNO();
  //  if($(this).parents('td').css({'background-color':'rgb(255, 242, 220)'})){
  //     $('section.detail').hide();
  //  }
});

for(let i=0;i<$('.mobileTable .datePicker').length;i++){
  $('body').find('.mobileTable input.datepicker').eq(i).prop('id','date'+i);
}
//mobileTable END

   //contractManagement
   $('.btn.add.table').click(function(){
     if($('.pcTable').hide()){
        let newRow = $(this).siblings('.mobileTableWP').find('.mobileTable').last().clone();
        $(this).siblings('.mobileTableWP').append(newRow);
        mobileTableNO();
     }else{
        let n = $(this).siblings('table').find('tr').length;
        if($(this).parents('section').find('table').hasClass('date')){
          let newTR = $(this).siblings('table').find('tr.copy').clone().removeClass('copy');
          $(this).siblings('table').find('tbody').append(newTR);
            
          if($(this).siblings('table').attr('id')=='table1'){

              $(this).siblings('table').find('tr').last().find('td:nth-child(3) input').removeClass('hasDatepicker').prop('id','expected'+(n-1));
              $(this).siblings('table').find('tr').last().find('td:nth-child(5) input').removeClass('hasDatepicker').prop('id','delivery'+(n-1));
            
          }else if($(this).siblings('table').attr('id')=='table5'){
              
              $(this).siblings('table').find('tr').last().find('td:nth-child(4) input').removeClass('hasDatepicker').prop('id','warranty'+(n-1));
            
            }else if($(this).parents('section').find('table').attr('id')=='table3'){
              let newTR = $(this).parents('section').find('table').find('tr.copy').clone().removeClass('copy');
              $(this).parents('section').find('tbody').append(newTR);
              $(this).parents('section').find('table').find('tr').last().find('td:nth-child(3) input').removeClass('hasDatepicker').prop('id','check'+(n+2));
            
            }else if($(this).siblings('table').attr('id')=='table4'){
              
              $(this).siblings('table').find('tr').last().find('td:nth-child(3) input').removeClass('hasDatepicker').prop('id','unqualified'+(n-1));
            }

        }else{
          let newTR = $(this).siblings('table').find('tr.copy').clone().removeClass('copy');
          $(this).siblings('table').find('tbody').append(newTR);
        }
        tableNO();
    }
  });


   function sectionNO() {
      $('section').each(function(){
          let n = $(this).find('.row').length;
          for(let i =1;i<n;i++){
              $(this).find('.row').eq(i).find('.number').text(i);
          }
        });
    };

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
//
//delete
//
  $(".btn.delete").click(function(){
    $(this).parents('.row').remove();
    sectionNO();
  });

   $("section").delegate(".btn.delete","click",function(){
    $(this).parents('.row').remove();
    sectionNO();
   });

   $("table").delegate(".deleteImg","click",function(){
     $(this).parents('tr').remove();
     tableNO();
     if($(this).parents('td').css({'background-color':'rgb(255, 242, 220)'})){
        $('section.detail').hide();
     }
  });


  $('.editVendor').click(function(){
    $('.popUpWP').css({'display':'flex'});
  });

  $("#main").delegate(".editVendor","click",function(){
    $('.popUpWP').css({'display':'flex'});
   })


  $('.btn.back').click(function(){
    $('.popUpWP').hide();
  });
  
  $('.addVendor').click(function(){
    if(W<1146){
      let newTr = $(this).parents('section').find('.mobileTableWP .mobileTable').last().clone();
      $(this).parents('section').find('.mobileTableWP').append(newTr);
      let n = $(this).parents('section').find('.mobileTableWP .mobileTable').length;
      
      for(let i=0;i<n;i++){
        if(n<10){
          $('.mobileTable').eq(i).find('.number').text('0'+(i+1));
        }else{
          $('.mobileTable').eq(i).find('.number').text(i+1);
        }
      } 
    }else{
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
    }
    
  });

  $('input.all').click(function(){
    if($(this).prop("checked")){
      $(this).parents('table').find('input[type="checkbox"]').prop("checked", true);
    }else{
      $(this).parents('table').find('input[type="checkbox"]').prop("checked", false);
    }
  });
//addItem
  function orangeWP(){
    if($('.orangeWP').hasClass('show')){
      $('.orangeWP').show();
    }else{
      $('.orangeWP').hide();
    }
  }

  $('.btn.add.orange').click(function(){
    if(consult[number-1] === "addItem.html" 
    || consult[number-1] === "setItemDetail.html" 
    || consult[number-1] === "addContract.html"){
      if(W<1146){
        $('.mobileTable.hide').hide();
        let newTR = $(this).parents('.btnWP.top').siblings('.mobileTableWP').find('.mobileTable.copy').clone().removeClass('copy');;
        $(this).parents('.btnWP.top').siblings('.mobileTableWP').append(newTR);
        mobileTableNO();
      }else{
        let newTR = $(this).parents('.btnWP.top').siblings('table').find('.copy').clone().removeClass('copy');
        $(this).parents('.btnWP.top').siblings('table').find('tbody').append(newTR);
        orangeWP();
        tableNO();
      }
      
    }else{
      $('.orangeWP').show();
    }
  });
//addItem
  $('.btn.blue').click(function(){
    $('.orangeWP').addClass('show');
    orangeWP();
  });

  $('.btn.confirm').click(function(){
    $('.orangeWP').hide();
  });

  $('.btn.cancel').click(function(){
    $('.orangeWP').hide();
  });

$('.btn.blue.copy').click(function(){
  $('#main .pop').css({'display':'flex'});
  $('.orangeWP').removeClass('show');
    orangeWP();
});

$('.pop .close').click(function(){
  $('#main .pop').hide();
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
//audit
$('.audit').click(function(){
  $('.detail').slideDown();
});

//userPermissions,userManagement
  $('.border.delete').click(function(){
      
    if($(this).parents('tr').find('number')){
      $(this).parents('tr').remove();
      tableNO();
    }else{
      $(this).parents('tr').remove();
    }
    
  });

  $('.btn.deleteAll').click(function(){
    $(this).parents('section').children('table').find('tr.checked:not(.th.checked)').remove();
    $('table').find('.th').find('input[type="checkbox"]').prop("checked", false);
  });

});