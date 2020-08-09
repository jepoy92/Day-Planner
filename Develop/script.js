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

    var workingHours = ["01hour", "02hour", "03hour", "04hour", "05hour", "06hour", "07hour", "08hour", "09hour", "10hour", "11hour", 
    "12hour", "13hour", "14hour", "15hour", "16hour", "17hour", "18hour", "19hour", "20hour", "21hour", "22hour", "23hour", "24hour", "25hour"]

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

    const timeBlockDiv = $(`<input type = 'text' class ='col-md-10 time-block' id = ${hourID} value = '${workingHours[i]}'>`)

    // value= ${hourID} 

    timeBlockDiv.appendTo(rowElement);


    const currentHour = moment().add(1, "hours").format("HH")

    const adjustedHour = currentHour + "hour"

    var hourElement = $(`#${hourID}`)

    var hourVal = hourElement.val()

    // console.log(hourVal)

    if ( hourVal < adjustedHour) {
        hourElement.addClass("past")
    } else if (hourVal === adjustedHour) {
        hourElement.addClass("present")
    } else {
        hourElement.addClass("future")
    }


    
    const saveBtn = $(`<button class='saveBtn col-md-1' value = ${hourID}>`);

    saveBtn.on("click", function(event) {
        
        event.preventDefault();

        var Id = $(this).val()
            
        var input = $(`#${Id}`).val() 

        localStorage.setItem(Id, input);

        
    })

    const saveImg = $("<img src = ' ../Assets/saveBtn.png' alt = 'floppy disk icon'>")

    saveImg.appendTo(saveBtn)

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
