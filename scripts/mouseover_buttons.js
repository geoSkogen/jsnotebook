$(document).ready(function(){
  $(".button").on ({
    mouseenter: function(){
      $(this).css("background-color", "cornflowerblue");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightsteelblue");
    },
    click: function(){
      $(this).css("background-color", "black");
    }
  });
});
