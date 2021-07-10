// day button slide up downn!

        $("div.dayslide1").slideUp(0);
        $("div.dayslide2").slideUp(0);
        $("div.dayslide3").slideUp(0);


    $("button.weekbtn1").on("click",function(){
      $("div.dayslide1").slideToggle();
    });
  $("button.weekbtn2").on("click",function(){
    $("div.dayslide2").slideToggle();
  });
  $("button.weekbtn3").on("click",function(){
    $("div.dayslide3").slideToggle();
  });
