console.log("Hello, World!");

var inputs = document.getElementsByClassName("input");





// Update the clock
function updateClock() {
    // Get the container element
    var container = document.getElementById('container');
    container.style.textAlign = 'center';
    container.style.color = 'black';
    container.style.fontSize = '40px';
    container.style.fontWeight = 'bold';
    container.style.padding = '10px';
    container.style.marginTop = '50px';
    container.style.marginBottom = '-50px';
    container.style.border = '3px solid blue';

    // Get the current time
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    

    // Format the time as HH:MM:SS
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth() + 1; 
    var day = currentTime.getDate();

    // Pad single-digit minutes and seconds with a leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var space = "    ";

    // Update the content of the container with the current time
    container.innerHTML ='Date  ' + year + '-' + month + '-' + day + ' Time  ' + hours + ':' + minutes + ':' + seconds;

    // Call the updateClock function again after 1 second
    setTimeout(updateClock, 1000);
  }

  // Start the clock when the page loads
  window.onload = function () {
    updateClock();
  };



 $( function() {
  $( "#selectable" ).selectable();
} );



for (var i = 0; i < inputs.length; i++) {
  inputs[i].style.width = '85%';
  inputs[i].style.textAlign = 'center';
  inputs[i].style.color = 'black';
  inputs[i].style.fontSize = '20px';
  inputs[i].style.height = '70px';
  inputs[i].style.border = '0px solid transparent';
}


$(document).ready(function() {
  // Get the current hour
  var currentHour = new Date().getHours();

  // Iterate through each time slot and set background color based on the current time
  $("#selectable li").each(function() {
    // Extract the hour from the text content of the time slot
    var timeSlotHour = parseInt($(this).text().split("am")[0]);

    // Compare the current hour with the time slot hour
    if (timeSlotHour < currentHour) {
      // Past time, set background color to gray
      $(this).css("background-color", "#d3d3d3");
    } else if (timeSlotHour === currentHour) {
      // Current time, set background color to a different color
      $(this).css("background-color", "red");
    } else {
      // Future time, set background color to another color
      $(this).css("background-color", "green");
    }
  });
});


$(document).ready(function() {
  // Add button click event handler
  $(".button").on("click", function() {
    // Get the input text from the associated input field
    var inputText = $(this).prev(".input").val();

    // Check if the input is not empty
    if (inputText.trim() !== "") {
      // Create a new list item with the input text
      var newItem = $("<li>").addClass("ui-widget-content").text(inputText);

      // Append the new item to the selectable list
      $(this).closest("li").append(newItem);

      // Clear the associated input field after adding
      $(this).prev(".input").val("");
    }
  });
});
