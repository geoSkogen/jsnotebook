window.addEventListener('load', initSlide);

function initSlide() {
  var nav = document.getElementsByClassName("sidenav")[0];
  var closeMe = document.getElementsByClassName("closeButton")[0];
  if (document.getElementsByClassName("buttonHere")[0]) {
    var openMe = document.getElementsByClassName("buttonHere")[0];
  } else if (document.getElementsByClassName("buttonHereHead")[0]) {
    var openMe = document.getElementsByClassName("buttonHereHead")[0];
  }


  openMe.onclick = openNav;
  closeMe.onclick = closeNav;

  function openNav() {
    nav.style.width = "27%";
  }

  function closeNav() {
    nav.style.width = "0";
  }
}
