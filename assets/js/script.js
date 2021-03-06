// function to display current date
var displayCurrentDate = function () {
var currentDate = moment().format("LL");
var currentDay = $("#currentDay").text(currentDate);
return currentDay;
};


displayCurrentDate();
