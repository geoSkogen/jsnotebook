$(document).ready(function() {
  var tggl = 0;
  var tggl2 = 0;
  var bttns = document.getElementsByClassName("buttonB");
  var bttnLen = bttns.length;
  var bttn = bttns[0];
  var bttn2 = bttns[1];
  $(bttn).click(function(){
    if (tggl == 0) {
      bttn.innerHTML = "fade out";
      $("#grey").fadeIn();
      $("#blue").fadeIn("slow");
      $("#lav").fadeIn(3000);
      $("#haze").fadeIn(3000);
      tggl = 1;
    } else if (tggl == 1) {
      bttn.innerHTML = "fade in";
      $("#grey").fadeOut(3000);
      $("#blue").fadeOut(2000);
      $("#lav").fadeOut("slow");
      $("#haze").fadeOut("3000");
      tggl = 0;
    }
  });
  $(bttn2).click(function(){
    if (tggl2 == 0) {
      bttn2.innerHTML = "un-haze";
      $("#grey").fadeTo("slow", 0.7);
      $("#blue").fadeTo("slow", 0.5);
      $("#lav").fadeTo("slow", 0.4);
      tggl2 = 1;
    } else if (tggl2 == 1){
      bttn2.innerHTML = "haze it";
      $("#grey").css("opacity", 1);
      $("#blue").css("opacity", 1);
      $("#lav").css("opacity", 0.8);
      tggl2 = 0;
    }
  });
});
