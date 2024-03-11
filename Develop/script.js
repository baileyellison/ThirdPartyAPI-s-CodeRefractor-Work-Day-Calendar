// Defining the variables
var currentDay = $("#currentDay");
currentDay.text(moment().format("MM/DD/YYYY"));

// Finding the current time
var currentHour = moment().hour();

$(".time-block").each(function(){
  // getting the hour of each timeblock
  var blockHour = $(this).attr("id").split("-")[1];
  // getting value from Local Storage
  var textEntry = localStorage.getItem(blockHour);
  var textarea = $(this).find(".description");
  textarea.val (textEntry);
  // Adding past, present or future
  if (blockHour < currentHour) {
    $(this).find(".description").addClass("past");
  }else if(blockHour == currentHour) {
    $(this).find(".description").addClass("present");
  }else{
    $(this).find(".description").addClass("future");
  }
});

// Event listener for save button
$(".saveBtn").on("click", function() {
  var key = $(this).parent().attr("id").split("-")[1];
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key,value);
});

  