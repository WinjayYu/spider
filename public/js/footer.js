/**
 * Created by winjayyu on 2018/4/10.
 */
window.onload = function () {
  var search = window.location.href;

  $('.menu_item').each((i, v) => {
    $(v).removeClass('active');
    console.log(search);
    console.log($(v).data('search'));
    if(search.indexOf($(v).data('search')) !== -1) {
      $(v).addClass('active');
    }
  })
}
