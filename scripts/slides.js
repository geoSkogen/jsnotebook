$(document).ready(function() {
  var tggl = 0;
  $("#downTitle").click(function(){
    if (tggl == 0) {
      $("#downPanel").slideDown("slow");
      tggl = 1;
    } else if (tggl == 1) {
      $("#downPanel").slideUp("slow");
      tggl = 1;
    }
  });
});
