//display current date
let now = moment();
$("#currentDay").text(now.format('MMMM Do YYYY, h:mm a'));
let currenthour = moment().hour();

$(".time-block").each(function() {
    blocktime = $(this).attr("id");

    if (blocktime < currenthour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blocktime == currenthour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})

$(document).ready(function () {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, text);
    })
})

