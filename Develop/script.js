var addToTasks = []


function currentDate () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#currentDay").text(currentTime);
  }
  
setInterval(currentDate,1000);

currentDate();


for (var i = 0; i < 12; i++) {

    const rowElement = $("<div class = 'row'>");

    rowElement.appendTo(".timeContainer");
    
    const hourDiv = $(`<div class = 'col-md-1 hour' id = >`);

    var hourText = i + 9
    
    if ( i < 3 ) {

        hourDiv.text(hourText + "AM")

    } else if ( i === 3) {
        hourDiv.text(hourText + "PM")
    } else 
        hourDiv.text((hourText-12) + "PM")


    hourDiv.appendTo(rowElement);

    // const saveImg = $("<img src = ' ../Assets/saveBtn.ico' alt = 'floppy disk icon'>")

    // saveImg.appendTo(hourDiv)

    const timeBlockDiv = $(`<input type = 'text' class ='col-md-10 time-block' id = ${hourText}>`)

    timeBlockDiv.appendTo(rowElement);
    
    const saveBtn = $("<button class='saveBtn col-md-1'>");

    saveBtn.appendTo(rowElement)

    // // const saveImg = $("<img src = ' ../Assets/saveBtn.ico' alt = 'floppy disk icon'>")

    // // saveImg.appendTo(hourDiv)

}

function renderTask () {

    
    for (var i = 0; i < localStorage.length; i++) {

        var taskItem = i + 9

        var inputTask = localStorage.getItem(`${taskItem}`) 

        $(`#${taskItem}`).val(inputTask)
        
        }

    }

$(document).ready(function () {

    $(".saveBtn").on("click", function(event) {

        for (var i = 0; localStorage.length; i++) {

        event.preventDefault();
        
        var textID = i + 9

        var input = $(`#${textID}`).val() 

        console.log(textID)

        localStorage.setItem(`${textID}`, input);

        }
        
    })

    renderTask();
    
});


