// We are using day.js https://day.js.org/en/ and not moment.js
now = dayjs().format('dddd MMMM DD : hh mm a');
// var taskList = $(".form-control");

var userTask = localStorage.getItem("savedTask");
 if (userTask !== null) {
    // console.log(" Previous Value in local storage: " + userTask);
 }

// Updating 
$("#currentDay").text(now);

function addTask() {
    for (i=0; i<9; i++)
        {
            var liEl = '<div class="input-group mb-3"> <div class="input-group-prepend"> <span class="input-group-text"></span></div>';
            var  inputEl = '<input type="text" class="form-control">';
            var btnEl1 = '<div class="input-group-append"> <button class="btn btn-outline-secondary" '
            var btnID = 'id=savetask' + i ;
            var btnEl2 =  btnID + ' "type="button">Save</button></div></div>';
            var btnEl = btnEl1 + btnEl2;
            console.log("Button ID = " + btnID);
            var allEl = liEl + inputEl + btnEl;
            $(".container").append(allEl);
        }
    // scheduleHour1 = $(".input-group-text");  
    
    scheduleHour = document.getElementsByClassName("input-group-text");
    // timenow = scheduleHour[0].innerHTML;
    // console.log("Time Now; " + timenow);

    for (j=0; j< 9; j++) {
        var workHour = j + 9;
            if (workHour > 0 && workHour <= 12) {
                workHour = (workHour) + ":00 AM";
            } else if (workHour> 12) {
                workHour = (workHour - 12) + ":00 PM";
            } else if (workHour == 0) {
                workHour = "12:00 PM"
            }
        scheduleHour[j].innerHTML = workHour;
        console.log(scheduleHour[j].innerHTML);
    } 
}


$("#savetask0").click(function(){
    console.log("Save Clicked: ");
})

// ** WORKING WITH SINGLE BUTTON.
// $("#savetask").click(function(){
//     var userTask = localStorage.getItem("savedTask");
//     if (userTask !== null) {
//         document.getElementById("usertask").setAttribute("value", userTask);
//     }
//     var inputTask = $("#usertask").val();
//     localStorage.setItem("savedTask", inputTask);
//     addTask();
// })


window.onload = function() {
    var savedTaskLocal = localStorage.getItem("savedTask");
    // document.getElementById("usertask").setAttribute("value", savedTaskLocal);
    $("#usertask").attr("value", savedTaskLocal);
    console.log("Loading localstorage to DOM " + savedTaskLocal)
    addTask();
}

function clearStorage () {
    console.log("Clear local storage");
}

