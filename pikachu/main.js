$(".body").mouseover(function () {
    $(".blink").css("visibility", "visible");
    $(".left-eye").css("visibility", "hidden");
    $(".right-cheek , .left-cheek").css("opacity", "0.7");
    $(".right-cheek").css("left", "69%");
    $(".left-cheek").css("left", "21%");
  });
  
  $(".body").mouseout(function () {
    $(".blink").css("visibility", "hidden");
    $(".left-eye").css("visibility", "visible");
    $(".right-cheek , .left-cheek").css("opacity", "0.5");
    $(".right-cheek").css("left", "70%");
    $(".left-cheek").css("left", "20%");
  });
  