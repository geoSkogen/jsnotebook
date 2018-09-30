window.onload= initFuncs;

function initFuncs() {
  var modals = document.getElementsByClassName("photoModal");
  var photos = document.getElementsByClassName("photoModalContent");
  var buts = document.getElementsByClassName("imgGo");
  var closes = document.getElementsByClassName("buttonClose");
//initSlide()
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

  for (i = 0; i < modals.length; i++) {
    photoModalControl(modals[i],photos[i],buts[i],closes[i]);
  }
}

function photoModalControl(thisModal,thisImg,thisBut,thisClose) {
  thisBut.onclick = function () {
    var testMedia = window.matchMedia("(min-width: 520px)")
    var screenType = testMedia.matches ? "tablet" : "mobile"
    thisImg.setAttribute("src", thisBut.id + "_modal_" + screenType + ".jpg");
    thisModal.style.display = "block";
    console.log("opened modal for " + screenType)
  };
  thisClose.onclick = function () {thisModal.style.display = "none";};
}
