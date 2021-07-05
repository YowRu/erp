
  $("input[type=text]").change(function () {
  var searchText = $(this).val();//獲取輸入的搜尋內容
  var $searchLi = "";//預備物件，用於儲存匹配出的li
  if (searchText != "") {
  //獲取所有匹配的li
  $searchLi = $("#content_news_list").find('a:contains(' + searchText + ')').parent();
  //將內容清空
  $("#content_news_list").html("");
  }
  //將獲取的元素追加到列表中
  $("#content_news_list").html($searchLi).clone();
  //判斷搜尋內容是否有效，若無效，輸出not find
  if ($searchLi.length <= 0) {
  $("#content_news_list").html("<li>not find</li>")
  }
  })
  $("input[type=submit]").click(function () {
  $("searchText").change();
  })
