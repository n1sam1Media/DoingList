//check off specific todos by clicking
$("li").click(function(){
  //if li is gray
  if($(this).css("color") === "rgb(128, 128, 128)"){
      //turn it black
      $(this).css({
        color: "black",
        textDecoration: "none"
      });
  } else {
    //turn it gray
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }
});

//click X to delete a todo
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});