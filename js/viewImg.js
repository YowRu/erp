$(document).ready(function(){
    let W =$(window).width();
    $('input[type="file"]').change(function(){
      const [file] = this.files
      if (file) {
        let val = URL.createObjectURL(file);
        if(W<1146){
          $(this).parents('.wrap').prev('.wrap.none').removeClass('none');
          $(this).parents('.wrap').prev('.wrap').find('img').addClass('view').attr({'src':val});
          $(this).siblings('label').text(val);
        }else{
          $(this).parents('.right').addClass('hasImg');
          $(this).siblings('label').text(val);
          $(this).parents('.right').siblings('img').addClass('view').attr({'src':val});
        }
        
      }
    });
  });