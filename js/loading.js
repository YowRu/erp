$(document).ready(function(){
  let pathname = window.location.pathname;
  let consult = pathname.split("/");
  let number = consult.length

    $("header").load("header.html");
    $("footer").load("footer.html");
    $('.sideWP').load("side.html");
    $('.systemSide').load('systemSide.html');
    $('.pagination').load('pagination.html');
    $('section.detail').load('detail.html');
    $('section.auditDetail').load('auditDetail.html');
    $('.inputAmount').load('inputAmount.html');
    $('.mobileTableWP.checkLook').load('mobileTableWP_checkLook.html');
    
//datePicker
    let n = $('body').find('.datePicker').length
    for(let i=0;i<n;i++){
        $('body').find('.datepicker').eq(i).prop('id','date'+i);
    }
//mobile table load
    if($('body').find('.pcTable')){
      $('.pcTable').each(function(){
        if($(this).hasClass('edit')){
          if(consult[number-1] ==="newMaterial.html"){
            $('<div class="mobileTableWP edit"></div>' ).insertAfter( $(this).parents('.nextContent').find('.pcTable') );
          }else{
            $('<div class="mobileTableWP edit"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          }
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
        }else if($(this).hasClass('checkEdit')){
          $('<div class="mobileTableWP checkEdit"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkEdit').load('mobileTableWP_checkEdit.html');
        }else if($(this).hasClass('checkDelete')){
          $( '<div class="mobileTableWP checkDelete"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkDelete').load('mobileTableWP_checkDelete.html');
        }else if($(this).hasClass('print')){
          $( '<div class="mobileTableWP print"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.print').load('mobileTableWP_print.html');
        }else if($(this).hasClass('checkUpload')){
          $( '<div class="mobileTableWP checkUpload"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkUpload').load('mobileTableWP_checkUpload.html');
        }else if($(this).hasClass('checkUser')){
          $( '<div class="mobileTableWP checkUser"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.checkUser').load('mobileTableWP_checkUser.html');
        }else if($(this).hasClass('audit')){
          $('<div class="mobileTableWP audit"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.audit').load('mobileTableWP_audit.html');
        }else if($(this).hasClass('auditDelete')){
          $('<div class="mobileTableWP auditDelete"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.auditDelete').load('mobileTableWP_auditDelete.html');
        }else if($(this).hasClass('inputTwo')){
          $('<div class="mobileTableWP inputTwo"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.inputTwo').load('mobileTableWP_inputTwo.html');
        }else if($(this).hasClass('user')){
          $('<div class="mobileTableWP user"></div>' ).insertAfter( $(this).parents('section').find('.pcTable') );
          $('.mobileTableWP.user').load('mobileTableWP_user.html');
        }
        

      });
    }  

});