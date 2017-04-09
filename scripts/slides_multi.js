$(document).ready(function(){
  var toggle = [ 0, 0, 0, 0 ];
  var titles = document.getElementsByClassName("downTitle");
  var panels = document.getElementsByClassName("downPanel");
        panels[0].innerHTML = $("#demo").val();
        panels[1].innerHTML = $("#t1").text();
      /*  panels[2].innerHTML = $("#t2").html() +
        "<br/>*<sub>this example fails becuase tags are automatically rendered "
         + "by the browser</sub>";*/
    //    panels[3].innerHTML = $("#aTag").attr("href");
        panels[2].innerHTML = $("#aTag").attr("href");
        for (i = 0; i < panels.length; i++) {
          assignSlide(titles[i], panels[i], toggle[i]);
        }

        function assignSlide(thisTitle, thisPanel, thisToggle) {
          $(thisTitle).click(function(){
            if (thisToggle == 0) {
              $(thisPanel).slideDown(800);
              thisToggle = 1;
            } else if (thisToggle == 1) {
              $(thisPanel).slideUp(800);
              thisToggle = 0;
            }
          });
        }
 });
