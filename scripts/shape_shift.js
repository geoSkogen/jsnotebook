$(document).ready(function(){
  var toggle = 0;
  $(".buttonShpShft").click(function(){
    if (toggle == 0) {
      $(".block").animate({
        left: '10%',
        opacity: '0.6',
        minWidth: '25%',
        minHeight: '65%',
        fontSize: '20px'
      });
      toggle = 1;
    } else if (toggle == 1) {
      $(".block").animate({
        left: '6%',
        opacity: '1',
        maxWidth: '1%',
        //maxHeight: '20%',
        fontSize: '14px'
      });
      toggle = 0;
    }
  });
});
