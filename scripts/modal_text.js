window.addEventListener('load', initFuncs);

function initFuncs() {
  var modals = document.getElementsByClassName("textModal");
  var buts = document.getElementsByClassName("buttonGo");
  var closes = document.getElementsByClassName("buttonClose");

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

  for (i = 0; i < modals.length; i++) {
    modalControl(modals[i],buts[i+1],closes[i]);
  }
}

function modalControl(thisModal,thisBut,thisClose) {
  thisBut.onclick = function () {thisModal.style.display = "block";};
  thisClose.onclick = function () {thisModal.style.display = "none";};
}
