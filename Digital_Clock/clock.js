setInterval(UpdateClock, 1000);
function UpdateClock() {

 // Creating object of the Date class
 var date = new Date();

 // Get current hour
 var hour = date.getHours();

 // Get current minute
 var minute = date.getMinutes();

 // Get current second
 var second = date.getSeconds();

// Get current day
 var day = date.getDay();

// Get current month
var month = date.getMonth();

// Get current year
var year = date.getFullYear();

//Get current date
var dnum = date.getDate();

 // Variable to store AM / PM
 var period = "AM";

//var  months = ["January","February","March", "April", "May", "June", "July", "August","September","October","November", "December"];
//var week = ["Monday","Tuesday","Wensday","Thursday","Friday","Saturday","Sunday"];

 // Assigning AM / PM according to the current hour
 if (hour >= 12) {
 period = "PM";
 } else {
 period = "AM";
 }

 // Converting the hour in 12-hour format
 if (hour == 0) {
 hour = 12;
 } else {
 if (hour > 12) {
 hour = hour - 12;
 }
 
}

switch(day){
    case 0 :
        day="Monday";
        break;

    case 2 :
        day="Tuesday";
        break;
   
    case 3 :
        day="Wensday";
        break;

    case 4 :
        day="Thursday";
        break;

    case 5 :
        day="Friday";
        break;

    case 6 :
        day="Saturday";
        break;

    default:
         day="Sunday";
        break;
}

switch(month){
    case 0 :
        month="January";
        break;

    case 1 :
        month="February";
        break;
   
    case 2 :
        month="March";
        break;

    case 3 :
        month="April";
        break;

    case 4 :
        month="May";
        break;

    case 5 :
        month="June";
        break;

    case 6 :
        month="July";
        break;

    case 7 :
        month="August";
        break;

    case 8 :
    month="September";
    break;

    case 9 :
    month="October";
     break;

    case 10 :
        month="November";
         break;

     case 11 :
        month="December";
        break;
}
 // Updating hour, minute, and second
 // if they are less than 10
 hour = update(hour);
 minute = update(minute);
 second = update(second);

 day = update(day);
 month = update(month);
 year = update(year);
 dnum = update(dnum);

 // Adding time elements to the div
 document.getElementById("dayname").innerHTML = day;
 document.getElementById("daynum").innerHTML = dnum;
 document.getElementById("month").innerHTML = month;
 document.getElementById("year").innerHTML = year;

 document.getElementById("hour").innerHTML = hour;
 document.getElementById("minutes").innerHTML = minute;
 document.getElementById("second").innerHTML = second;
 document.getElementById("period").innerHTML = period;

};

 // Function to update time elements if they are less than 10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return "0" + t;
 }
 else {
 return t;
 }
}

UpdateClock();

