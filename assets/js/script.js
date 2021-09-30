//Global Variable for storing the text values
var textNotes = [];//For User
var localStoredTextNotes = []; //store in local storage

// Variables for Moment functions for displaying hours in different colors
var now = moment();
 $("#currentDay").text(now);
var currentHour = now.format("HH");




//initialization
$(document).ready(function() {
// init() is to load the localstorage to text fields(if any)
// init() prepopulates the coloring of Text fields
      init(); 
});


//to save the text values on save click
function saveText(e) {
    
     var saveId = e;
     var textFieldIdx = saveId.substring(saveId.length - 1);
     var inputTextVal =  $("#text"+textFieldIdx).val();

     textNotes[textFieldIdx] = inputTextVal;    

     // Pushing the saved fields to localstorage variable

     var tempVar;
     for(var i=0;i<9;i++){
          tempVar = textNotes[i];
        localStoredTextNotes[i] = tempVar;
     }


     // Storing the Text notes to Local Storage
     localStorage.setItem("localStoredNotes", JSON.stringify(localStoredTextNotes));
}

function init() {
   // Populate Text frame with Color
   $("input").each(function(){
    var divHr = $(this).attr("data-hour");
    if(divHr == currentHour){
       $(this).addClass("present");
    }else if(divHr > currentHour){
        $(this).addClass("future");
    }else if(divHr < currentHour){
        $(this).addClass("past");
    }
    });

    var localStorageSaveItem =  JSON.parse(localStorage.getItem("localStoredNotes") ); 

    // Populate Text Fields
    // Loop only if the values are present
    if(localStorageSaveItem != null){

   
    for(var i=0; i<9; i++){
       $("#text"+i).val(localStorageSaveItem[i]);
    }
}
}

