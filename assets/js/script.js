// function to display current date
var displayCurrentDate = function () {
var currentDate = moment().format("LL");
var currentDay = $("#currentDay").text(currentDate);
return currentDay;
};


// save task in local storage
$("#btn1").on("click", function(event) {
    event.preventDefault();
    var inputVal = $("#input1").val().trim();
    localStorage.setItem("task1", JSON.stringify(inputVal))
});

// retrieve task from localStorage
// var savedTask1 = localStorage.getItem("task1");
// inputVal.val(savedTask1);
var savedTask1 = JSON.parse(localStorage.getItem("task1"));
$("#input1").val(savedTask1);

displayCurrentDate();