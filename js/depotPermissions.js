$(document).ready(function(){


function deleteText() {
  $('.list2 label').each(function(){
    $(this).html('<label for=""><input type="checkbox" name="selected">移除</label>');
  });
}

function AddText() {
  $('.list1 label').each(function(){
    $(this).html('<label for=""><input type="checkbox" name="selected">加入</label>');
  });
}

 $(".arrowRight").click(function(){
    $(".list1 input").each(function(){
      if($(this).prop('checked')){
        $(this).parents('li').remove().appendTo(".list2");
      }
    });
    deleteText();
});

$(".arrowLeft").click(function(){
  $(".list2 input").each(function(){
      if($(this).prop('checked')){
        $(this).parents('li').remove().appendTo(".list1");
      }
  }); 
  AddText();
});

$('.btn.addAll').click(function(){
  $(".list1 li").each(function(){
    $(this).remove().appendTo(".list2");
  });
  deleteText();
});

$('.btn.deleteAll').click(function(){
  $(".list2 li").each(function(){
    $(this).remove().appendTo(".list1");
  });
  AddText();
});

});