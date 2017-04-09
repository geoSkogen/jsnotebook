window.addEventListener('load', initDowns);

function initDowns() {
var accords = document.getElementsByClassName("downTitleAccord");

for (var i = 0; i < accords.length; i++) {
  accords[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}

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
/*function initDowns() {
  var accords = document.getElementsByClassName("downTitleAccord");
  var panels = document.getElementsByClassName("downPanelAccord");
  var state = [ 0, 0, 0, 0 ];

  for (var i = 0; i < accords.length; i++) {
       getDown(accords[i], panels[i], state[i]);
  }

  function getDown(thisTitle, thisPanel, thisToggle) {
    thisTitle.onclick = function () {
      thisPanel.className = "downPanelAccordShow";
    }
  }*/
}
