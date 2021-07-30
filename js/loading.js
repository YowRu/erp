$(document).ready(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");
    $('.sideWP').load("side.html");
    $('.systemSide').load('systemSide.html');
    $('.pagination').load('pagination.html');
    $('section.detail').load('detail.html');
    $('section.auditDetail').load('auditDetail.html');
    $('.inputAmount').load('inputAmount.html');
    $('.mobileTableWP.checkLook').load('mobileTableWP_checkLook.html');

    let n = $('body').find('.datePicker').length
    for(let i=0;i<n;i++){
        $('body').find('.datepicker').eq(i).prop('id','date'+i);
    }

    if($('body').find('.pcTable')){
      $('.pcTable').each(function(){
        if($(this).hasClass('edit')){
          $('<div class="mobileTableWP edit"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.edit').load('mobileTableWP.html');
        }else if($(this).hasClass('save')){
          $('<div class="mobileTableWP save"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.save').load('mobileTableWP_save.html');
        }else if($(this).hasClass('checkLook')){
          $('<div class="mobileTableWP checkLook"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkLook').load('mobileTableWP_checkLook.html');
        }else if($(this).hasClass('look')){
          $('<div class="mobileTableWP look"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.look').load('mobileTableWP_look.html');
        }else if($(this).hasClass('check')){
          $('<div class="mobileTableWP check"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.check').load('mobileTableWP_check.html');
        }else if($(this).hasClass('checkDelete')){
          $( '<div class="mobileTableWP checkDelete"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkDelete').load('mobileTableWP_checkDelete.html');
        }else if($(this).hasClass('print')){
          $( '<div class="mobileTableWP print"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.print').load('mobileTableWP_print.html');
        }
      });
    }  

});