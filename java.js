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
  inputs[i].style.border = '3px solid blue';
}
