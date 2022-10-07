// We are using day.js https://day.js.org/en/ and not moment.js
now = dayjs().format('dddd MMMM DD : hh mm a');
console.log("Current Time and date: " + now);
var inputText9 = localStorage.getItem("inputText9");

// Updating 
$("#currentDay").text(now);

// Testing click on save button
$("#btn-save-09am").click(function(){
    // console.log("Save Button was click for 9am");
    inputText9 = $("#todo9").val();
    console.log("Value from inputText9 btn: " + inputText9);
    // Add value form inputText9 to local storage
    window.localStorage.setItem("localInputText9", inputText9);
    console.log(" inputText09 Value from local storade: " + localStorage.getItem("inputText9") );
})
