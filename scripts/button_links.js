window.addEventListener('load', initClick);

function initClick() {

  var href;
  var this_a;
  var but_index = 0
  var buts = document.getElementsByClassName("button");
  var as = document.getElementsByTagName("a");

  for (var i = 0; i < as.length; i++) {
    if (as[i].className != "titleLink") {
      href = as[i].getAttribute("href");
      clickLink(buts[but_index], href);
      but_index++;
    }
  }

  function clickLink(elm, url) {
    elm.onclick = function () { location.assign(url); };
  }
}
