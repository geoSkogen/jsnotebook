window.addEventListener('load', initFuncs);

function initFuncs() {
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

  var input = document.getElementsByTagName("input")[0];
  input.addEventListener("keypress", function () {
    var field = document.getElementsByTagName("input")[0];
    var stringIn = field.value;
    var upcased = stringIn.toUpperCase();
    if (event.keyCode == 13) matchDisplay(upcased, field);
  });

  function matchDisplay(filter, input) {
    var dds = document.getElementsByTagName("dd");
    //input.value = filter;
    for (var i = 0; i < dds.length; i++) {
      var index = dds[i].innerHTML.toUpperCase().indexOf(filter);
      if (index != -1) {
        dds[i].style.display = "";
      } else {
        dds[i].style.display = "none";
      }
    }
  }
}
