var addToTasks = []


function currentDate () {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#currentDay").text(currentTime);
  }
  
setInterval(currentDate,1000);

currentDate();


for (var i = 0; i < 25; i++) {

    var hourText = i + 1;

    var hourString = "hour";

    var hourID = hourText + hourString;

    const rowElement = $("<div class = 'row'>");

    rowElement.appendTo(".timeContainer");
    
    const hourDiv = $(`<div class = 'col-md-1 hour' id = ${hourText}>`);
    
    if ( i < 12 ) {

        hourDiv.text(hourText + "AM")

    } else if ( i === 12) {
        hourDiv.text((hourText-1) + "PM")
    } else if( i === 24) {
        hourDiv.text((hourText - 13) + "AM")
    } else {
        hourDiv.text((hourText - 13) + "PM")
    }
        


    hourDiv.appendTo(rowElement);
    

    // const saveImg = $("<img src = ' ../Assets/saveBtn.ico' alt = 'floppy disk icon'>")

    // saveImg.appendTo(hourDiv)

    const timeBlockDiv = $(`<input type = 'text' class ='col-md-10 time-block' id = ${hourID} value = ${hourID}>`)

    timeBlockDiv.appendTo(rowElement);

    // const inputBlock = $(`<input type = 'text' class ='col-md-10 time-block' id = ${hourID}>`)

    // timeBlockDiv.append(timeBlockDiv)

    const currentHour = moment().add(1, "hours").format("H")

    const adjustedHour = currentHour + "hour"

    var hourElement = $(`#${hourID}`)

    var hourVal = hourElement.val()

    console.log(hourElement)

    if ( hourVal < adjustedHour) {
        hourElement.addClass("past")
    } else if (hourVal === adjustedHour) {
        hourElement.addClass("present")
    } else if (hourVal > adjustedHour) {
        hourElement.addClass("future")
    }


    
    const saveBtn = $(`<button class='saveBtn col-md-1' value = ${hourID}>`);

    saveBtn.on("click", function(event) {
        
        event.preventDefault();

        var Id = $(this).val()
            
        var input = $(`#${Id}`).val() 

        localStorage.setItem(Id, input);

        
    })

    saveBtn.appendTo(rowElement)
    
    renderTasks();
    
    // aChristmasCarol();

    // console.log(aChristmasCarol)
}


function renderTasks () {
    const keys = Object.entries(localStorage)

    keys.forEach(key => {
        $("#" + key[0]).val(key[1])
    });
}

function aChristmasCarol() {

    for ( var i = 0; i < 25; i++) {

        var hourText = i + 1;

        var hourString = "hour";
    
        var hourID = hourText + hourString;

        const currentHour = moment().add(1, "hours").format("H")

        const adjustedHour = currentHour + "hour"
    
        var hourElement = $(`#${hourID}`)
    
        if (adjustedHour === hourElement) {
            hourElement.addClass("present")

            console.log(adjustedHour)

        }

    }
    

}
