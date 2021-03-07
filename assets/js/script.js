var currentDate = moment().format("LL");
// function to display current date
var displayCurrentDate = function () {
var currentDay = $("#currentDay").text(currentDate);
return currentDay;
};


// save task in local storage
$("#btn1").on("click", function(event) {
    event.preventDefault();
    var inputVal1 = $("#input1").val().trim();
    localStorage.setItem("task1", JSON.stringify(inputVal1))
});

$("#btn2").on("click", function(event) {
    event.preventDefault();
    var inputVal2 = $("#input2").val().trim();
    localStorage.setItem("task2", JSON.stringify(inputVal2))
});

$("#btn3").on("click", function(event) {
    event.preventDefault();
    var inputVal3 = $("#input3").val().trim();
    localStorage.setItem("task3", JSON.stringify(inputVal3))
});

$("#btn4").on("click", function(event) {
    event.preventDefault();
    var inputVal4 = $("#input4").val().trim();
    localStorage.setItem("task4", JSON.stringify(inputVal4))
});

$("#btn5").on("click", function(event) {
    event.preventDefault();
    var inputVal5 = $("#input5").val().trim();
    localStorage.setItem("task5", JSON.stringify(inputVal5))
});

$("#btn6").on("click", function(event) {
    event.preventDefault();
    var inputVal6 = $("#input6").val().trim();
    localStorage.setItem("task6", JSON.stringify(inputVal6))
});

$("#btn7").on("click", function(event) {
    event.preventDefault();
    var inputVal7 = $("#input7").val().trim();
    localStorage.setItem("task7", JSON.stringify(inputVal7))
});

$("#btn8").on("click", function(event) {
    event.preventDefault();
    var inputVal8 = $("#input8").val().trim();
    localStorage.setItem("task8", JSON.stringify(inputVal8))
});

$("#btn9").on("click", function(event) {
    event.preventDefault();
    var inputVal9 = $("#input9").val().trim();
    localStorage.setItem("task9", JSON.stringify(inputVal9))
});


// retrieve task from localStorage
var savedTask1 = JSON.parse(localStorage.getItem("task1"));
$("#input1").val(savedTask1);

var savedTask2 = JSON.parse(localStorage.getItem("task2"));
$("#input2").val(savedTask2);

var savedTask3 = JSON.parse(localStorage.getItem("task3"));
$("#input3").val(savedTask3);

var savedTask4 = JSON.parse(localStorage.getItem("task4"));
$("#input4").val(savedTask4);

var savedTask5 = JSON.parse(localStorage.getItem("task5"));
$("#input5").val(savedTask5);

var savedTask6 = JSON.parse(localStorage.getItem("task6"));
$("#input6").val(savedTask6);

var savedTask7 = JSON.parse(localStorage.getItem("task7"));
$("#input7").val(savedTask7);

var savedTask8 = JSON.parse(localStorage.getItem("task8"));
$("#input8").val(savedTask8);

var savedTask9 = JSON.parse(localStorage.getItem("task9"));
$("#input9").val(savedTask9);

// function to update tasks

// color code time blocks
var auditScheduler = function () {
var currentHour = new Date().getHours();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (var i = 0; i < hours.length; i++) {
    // console.log(hours[i]);
    $("#input" + (i+1)).removeClass("past present future");
    if (currentHour > hours[i]) {
        $("#input" + (i+1)).addClass("past");
    } else if (currentHour >= hours[i] && currentHour < (hours[i] + 1)) {
        $("#input" + (i+1)).addClass("present");
    } else {
        $("#input" + (i+1)).addClass("future");
    }
}
};

// set time interval every 15 minutes to check the current hour
setInterval(function() {
    $(".time-block .description").each(function(index) {
      auditScheduler();
      displayCurrentDate();
    });
  }, (1000 * 60) * 15);

// set time interval every 12 hours to check the current date
// if the current date is changed, then the localStorage get cleared for the new day
setInterval(function() {
  var checkDate = moment().format("LL")
  if (checkDate > currentDate) {
    for(i=1; i <= 9; i++) {
        localStorage.removeItem("task" + i)
    }
}
}, (1000 * 60) * 15);

displayCurrentDate();
auditScheduler();