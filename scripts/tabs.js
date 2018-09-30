window.addEventListener('load', initTabs);

function initTabs() {
  var tabs = document.getElementsByClassName("tab");
  var intro = document.getElementsByClassName("tabDocShow")[0];

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
    nav.style.width = "80%";
  }

  function closeNav() {
    nav.style.width = "0";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
      if (document.getElementsByClassName("tabActive")[0]) {
        document.getElementsByClassName("tabActive")[0].className = "tab";
      }
      if (document.getElementsByClassName("tabDocActive")[0]) {
        document.getElementsByClassName("tabDocActive")[0].className = "tabDoc";
      }
      intro.style.display = "none";
      this.className += "Active";
      document.getElementById(this.id + "Doc").setAttribute("class", "tabDocActive");
    }
  }
}
