//display current date
let now = moment();
$("#currentDay").text(now.format('MMMM Do YYYY, h:mm a'));

let currenthour = moment().hour();
console.log(currenthour);

//display correct colors
$(".timeblock").each(function() {
    blocktime = $(this).attr("id");
    console.log(blocktime , currenthour);

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