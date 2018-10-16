//check off specific todos by clicking
$("ul").on("click", "li", function(){
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
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //console.log("You hit enter!");
    //extracting value
    $(this).val();
    //save extracted value to a variable 
    var todoText = $(this).val();
    //clearing text from input
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li>" + "<span><i class='fa fa-trash'></i> </span>" + todoText + "</li");
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});