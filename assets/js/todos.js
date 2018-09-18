//check off specific todos by clicking
$("li").click(function(){
  //if li is gray
  console.log($(this).css("color"));
  if($(this).css("color") === "rgb(128, 128, 128)"){
      console.log("It is corrently gray!");
  }
});