
// When hovering over dropdown list apply color white on enter and black on leave
 $(".dropdown-list li").on("tap", function(){
     $("a", this).css("color","white");})
      , function(){
         $("a", this).css("color","rgb(40, 44, 45)")
  };




