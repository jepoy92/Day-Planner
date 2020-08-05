var addToTasks = []


function currentDate () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#currentDay").text(currentTime);
  }
  
setInterval(currentDate,1000);

currentDate();


for (var i = 0; i < 24; i++) {

    var hourText = i + 9

    var hourString = "hour"

    var hourID = hourText + hourString

    const rowElement = $("<div class = 'row'>");

    rowElement.appendTo(".timeContainer");
    
    const hourDiv = $(`<div class = 'col-md-1 hour' id = ${hourText}>`);
    
    if ( i < 3 ) {

        hourDiv.text(hourText + "AM")

    } else if ( i === 3) {
        hourDiv.text(hourText + "PM")
    } else 
        hourDiv.text((hourText-12) + "PM")


    hourDiv.appendTo(rowElement);
    

    // const saveImg = $("<img src = ' ../Assets/saveBtn.ico' alt = 'floppy disk icon'>")

    // saveImg.appendTo(hourDiv)

    const timeBlockDiv = $(`<input type = 'text' class ='col-md-10 time-block' id = ${hourID}>`)

    timeBlockDiv.appendTo(rowElement);
    
    const saveBtn = $(`<button class='saveBtn col-md-1' value = ${hourID}>`);

    saveBtn.on("click", function(event) {
        
        event.preventDefault();

        var Id = $(this).val()
            
        var input = $(`#${Id}`).val() 

        localStorage.setItem(Id, input);

        
    })

    saveBtn.appendTo(rowElement)

    const currentHour = moment().format("h")

    var hourElement = $(`#${hourID}`)

    var present = hourElement.addClass("present")
    console.log(present)

    
    renderTasks();
    
}

function renderTasks () {
    const keys = Object.entries(localStorage)

    keys.forEach(key => {
        $("#" + key[0]).val(key[1])
    });
}
