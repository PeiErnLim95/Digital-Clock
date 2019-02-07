function displayTime(){
    var dates = new Date();
    var hour = dates.getHours();
    var minute = dates.getMinutes();
    var second = dates.getSeconds();
    var day = dates.getDate();
    var month = dates.getMonth() + 1;
    var year = dates.getFullYear();
    var wday = dates.getDay();
    var months;

    switch (month) {
        case 1:
            months = "January";
            break;
        case 2:
            months = "February";
            break;
        case 3:
            months = "March";
            break;
        case 4:
            months = "April";
            break;
        case 5:
            months = "May";
            break;
        case 6:
            months = "June";
            break;
        case 7:
            months = "July";
            break;
        case 8:
            months = "August";
            break;
        case 9:
            months = "September";
            break;
        case 10:
            months = "October";
            break;
        case 11:
            months = "November";
            break;
        case 12:
            months = "December";
            break;
        default:
    }
    
    switch (wday) {
        case 1:
            wday = "Monday";
            break;
        case 2:
            wday = "Tuesday";
            break;
        case 3:
            wday = "Wednesday";
            break;
        case 4:
            wday = "Thursday";
            break;
        case 5:
            wday = "Friday";
            break;
        case 6:
            wday = "Saturday";
            break;
        case 7:
            wday = "Sunday";
            break;
        default:
    }

    document.getElementById("hour").textContent = padding(hour);
    document.getElementById("minute").textContent = padding(minute);
    document.getElementById("second").textContent = padding(second);
    document.getElementById("day").textContent = padding(day);
    document.getElementById("month").textContent = months;
    document.getElementById("year").textContent = year;
    document.getElementById("wday").textContent = wday;
}

function padding(digit){
    return (digit < 10 ? '0' : '') + digit;
}

function changeBasedOnTime(){
    var dates = new Date();
    var currentTime = dates.getHours();
    if (currentTime > 7 && currentTime < 12){
        document.body.className = "morning";
        document.getElementById("greeting").textContent = "GOOD MORNING";
    }
    else if (currentTime > 12 && currentTime < 19){
        document.body.className = "afternoon";
        document.getElementById("greeting").textContent = "GOOD AFTERNOON";
    }
    else{
        document.body.className = "night";
        document.getElementById("greeting").textContent = "GOOD NIGHT";
    }
}

setInterval(displayTime, 0);
setInterval(changeBasedOnTime, 0);