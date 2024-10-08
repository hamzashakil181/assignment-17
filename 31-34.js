// q1: Write a program that displays current date and time in your browser


// function displayDateTime() {
//     const now = new Date(); 
//     document.write(now); 
// }
// displayDateTime();
// setInterval(displayDateTime, 1000);

//  q2: Write a program that alerts the current month in words. 
// For example December.

// var now = new Date(); // Get the current date
// var currentMonth = now.toLocaleString('en-US', { month: 'long' }); 

// alert("Current month: " + currentMonth); 

//   q3: Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var day = new Date().toLocaleString('en-US', { weekday: 'short' }); 
// alert("Today is: " + day); 

// q4: Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var day = new Date().getDay(); 
// alert(day === 0 || day === 6 ? "It's Fun day" : "It's a regular day");
        

// q5: Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var day = new Date().getDate();
// alert(day < 16 ? "First fifteen days of the month" : "Last days of the month");


// q6:Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var minutesSinceEpoch = Math.floor(new Date().getTime() / 60000);
// alert(`Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}`);


// q7: Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

    
//         var now = new Date();
//         var hour = now.getHours();
//         if (hour < 12) {
//             alert("It's AM");
//         } else {
//             alert("It's PM");
//         }
    
//     q8:    Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

//         var laterDate = new Date(2020, 11, 31); 
//         alert(The last day of the last month of 2020 is: ${laterDate.toDateString()});
    
    
//     q9:    Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//         var ramadanStartDate = new Date(2015, 5, 18); 

//         var currentDate = new Date();

//         var differenceInMilliseconds = currentDate - ramadanStartDate;

//         var millisecondsInADay = 1000 * 60 * 60 * 24; 
//         var daysSinceRamadan = Math.floor(differenceInMilliseconds / millisecondsInADay);

//         alert(Days since 1st Ramadan: ${daysSinceRamadan});
   
   
//    q10:     Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date(2015, 5, 18); 
//         var startOf2015 = new Date(2015, 0, 1); 
//         var differenceInMilliseconds = referenceDate - startOf2015;
//         var secondsElapsed = Math.floor(differenceInMilliseconds / 1000); // 1000 milliseconds in a second
//         document.getElementById('elapsedSeconds').textContent = Seconds elapsed between January 1, 2015, and June 18, 2015: ${secondsElapsed};
    
//     q11:    : Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

//         var currentDate = new Date();
//       var currentHours = currentDate.getHours();
//         currentDate.setHours(currentHours + 1);
//         document.getElementById('updatedDate').textContent = Updated date and time (1 hour ahead): ${currentDate};
  
  
//   q12:      Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

//         var currentDate = new Date();
//         currentDate.setFullYear(currentDate.getFullYear() - 100);
//         alert(The date 100 years back was: ${currentDate.toDateString()});
    
    
//     q13:    : Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

//         var age = prompt("Please enter your age:");
//         var currentYear = new Date().getFullYear();
//         var birthYear = currentYear - age;
//         document.getElementById('birthYear').textContent = Your birth year is: ${birthYear};
   
   
//    q14     : Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// function generateBill() {
//     var customerName = document.getElementById('customerName').value;
//     var currentMonth = document.getElementById('currentMonth').value;
//     var units = parseFloat(document.getElementById('units').value);
//     var charges = parseFloat(document.getElementById('charges').value);
//     var  lateSurcharge = parseFloat(document.getElementById('lateSurcharge').value);

// var  netAmount = (units * charges).toFixed(2);
//     var grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);

//     var billDetails = `
//         <h3>Bill Details</h3>
//         <p><strong>Customer Name:</strong> ${customerName}</p>
//         <p><strong>Current Month:</strong> ${currentMonth}</p>
//         <p><strong>Number of Units:</strong> ${units}</p>
//         <p><strong>Charges per Unit:</strong> ${charges.toFixed(2)}</p>
//         <p><strong>Net Amount Payable:</strong> ${netAmount}</p>
//         <p><strong>Late Payment Surcharge:</strong> ${lateSurcharge.toFixed(2)}</p>
//         <p><strong>Gross Amount Payable:</strong> ${grossAmount}</p>
//     `;
//     document.getElementById('billOutput').innerHTML = billDetails;
// }
