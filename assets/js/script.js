var saveBtn = $("[class=saveBtn]");
var allNotes = [];

saveBtn.on('click', function() {
    console.log($(this));

    $(".textBox").each(function() {
        console.log($(this).val());
        var userNotes = allNotes.push($(this).val());
        console.log(allNotes);

        localStorage.setItem(userNotes, JSON.stringify(allNotes));
        var getNotes = JSON.parse(localStorage.getItem("user notes"));

        $(".textBox").append(getNotes);
    
})
});

// //selectors

// $(document).ready(function(){
//     displayTable();
   
// });

// var root =$("#schedular-row");

// // Recursive function to populate the 3 column object in a row for 9 to 5 hours
// var hourCounter = 9;
// var ampm="am";
// function displayTable(){
//     while( hourCounter <= 17) {
//         // Create Div for Time slot
//         var timeDiv = $("<div>");
//         timeDiv.id = "timeDiv";
//         if( hourCounter < 12){
//             ampm = "am";
//         }else{
//             ampm = "pm";
//         }
//         var timeHr = 0;
//         if(hourCounter >  12){
//             timeHr = hourCounter - 12;
//         }else{
//             timeHr = hourCounter;
//         }
//         timeDiv.text(timeHr + " " + ampm);
//         root.append(timeDiv);

//        // Create Div for Text Field  

//         var textFieldDiv = $("<div>");
//         textFieldDiv.id = "textdiv"+hourCounter;
//         textFieldDiv.addClass("inputTextDiv");
//         textFieldDiv.text("<input type='text' name='calendarText' id='inputText"+ hourCounter +"'  placeholder='Enter event details...'/>");
//         root.append(textFieldDiv);

//         // Create Div for Save button
//         var buttonFieldDiv = $("<div>");
//         buttonFieldDiv.id = "savebutton"+hourCounter;
//         buttonFieldDiv.className ="submitButton";
//         buttonFieldDiv.text("<button class='saveBtn' id='button"+ hourCounter +"'><i class='fa fa-save'></i></button>");
//         root.append(buttonFieldDiv);
//         hourCounter++;
//     }
// }


// // // Auto populate save button on data entry to data field (Requirement)
// // function handleField(event) {
// //     event.preventDefault(event);
// //     var itemEntered = textFieldDiv.val();
// //     console.log(itemEntered);
// //     textFieldDiv.text(itemEntered);
// // }

// //  //Store user enter data in local store for save click

// //  buttonFieldDiv.on("saveBtn", displayTable);
 
// //  console.log("abc");

// // // Pre poluate user data if already entered. (Requirement)
