$(function() {
  $('#page-top a').click(function(e){
    e.preventDefault();
    $('html').animate({ scrollTop: 0}, 500);
  })
})