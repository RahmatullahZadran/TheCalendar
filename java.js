console.log("Hello, World!");

function updateClock() {
    // Get the container element
    var container = document.getElementById('container');
    container.style.display = 'block';
    container.style.textAlign = 'center';

    // Get the current time
    var currentTime = new Date();

    // Format the time as HH:MM:SS
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Pad single-digit minutes and seconds with a leading zero
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the content of the container with the current time
    container.innerHTML = hours + ':' + minutes + ':' + seconds;

    // Call the updateClock function again after 1 second
    setTimeout(updateClock, 1000);
  }

  // Start the clock when the page loads
  window.onload = function () {
    updateClock();
  };
