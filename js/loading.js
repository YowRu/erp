$(document).ready(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");
    $('.sideWP').load("side.html");
    $('.systemSide').load('systemSide.html');
    $('.pagination').load('pagination.html');
    $('section.detail').load('detail.html');
    $('section.auditDetail').load('auditDetail.html');
    $('.inputAmount').load('inputAmount.html');
    
    let n = $('body').find('.datePicker').length
    for(let i=0;i<n;i++){
        $('body').find('.datepicker').eq(i).prop('id','date'+i);
      }
});