function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
/*
function scrollToAnchor(aid){
  const destination = $("a[name='"+ aid +"']");
    $('html,body').animate({
      scrollTop: destination.offset().top
    },'slow');
}
$(document).on('click', '.smooth-link', function(){
  scrollToAnchor('contact');
})*/
