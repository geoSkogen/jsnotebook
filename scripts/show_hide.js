$(document).ready(function(){
  $("#hide").click(function(){
    $(".hideMe").fadeOut("slow");
  });
  $("#show").click(function(){
    $(".hideMe").fadeIn("slow");
  });
});
