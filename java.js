console.log("Hello, World!");

var clock = $('#container');

clock.append('<h1>Current time: ' + new Date().toLocaleTimeString() + '</h1>');
clock.css('text-align', 'center');

var currentDate = dayjs();
var newDate = currentDate.add(7, 'day');
console.log("New Date after adding 7 days:", newDate.format("YYYY-MM-DD HH:mm:ss"));
