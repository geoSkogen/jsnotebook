$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "gainsboro");
  //  $(this).css("border", "1px solid cadetblue");
  });
  $("input").blur(function(){
    $(this).css("background-color", "lightsteelblue");
  //  $(this).css("border", "1px solid darkgrey");
  });
});
