// q1: Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// function displayNumberProperties() {
//     var userInput = numberInput.value;  // Access element directly by ID
//     var number = parseFloat(userInput);

//     // Check if the number is valid and positive
//     if (number < 0 || isNaN(number)) {
//         alert("Please enter a valid positive number.");
//         return;
//     }

//     // Calculate round, floor, and ceil values
//     var roundedValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     // Update the result area
//     numberOutput.textContent = "Number: " + number;
//     roundedOutput.textContent = "Rounded Value: " + roundedValue;
//     floorOutput.textContent = "Floor Value: " + floorValue;
//     ceilOutput.textContent = "Ceil Value: " + ceilValue;
// }
// q2: Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var inputField = document.getElementById('numberInput');
// var resultOutput = document.getElementById('resultOutput');
// var submitButton = document.getElementById('submitButton');

// submitButton.onclick = function() {
//     var userInput = inputField.value;
//     var number = parseFloat(userInput);

//     resultOutput.innerHTML = '';

//     if (number < 0) {
//         var roundedValue = Math.round(number);
//         var floorValue = Math.floor(number);
//         var ceilValue = Math.ceil(number);

//         resultOutput.innerHTML = `
//             <h3>Number Properties</h3>
//             <p><strong>Number:</strong> ${number}</p>
//             <p><strong>Rounded Value:</strong> ${roundedValue}</p>
//             <p><strong>Floor Value:</strong> ${floorValue}</p>
//             <p><strong>Ceil Value:</strong> ${ceilValue}</p>
//         `;
//     } else {
//         resultOutput.innerHTML = '<p>Please enter a negative floating point number.</p>';
//     }
// };
// q3: Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// calculateButton.onclick = function() {
//     var number = parseFloat(numberInput.value);
//     var absoluteValue = Math.abs(number);
//     resultOutput.innerHTML = `
//         <h3>Result</h3>
//         <p>Absolute value of ${number} is ${absoluteValue}.</p>
//     `;
// };

// q4:Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var rollDice = function() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;
//     console.log(`You rolled a ${diceValue}!`);
// };

// var tossCoin = function() {
//     var result = Math.random() < 0.5 ? "Heads" : "Tails";
//     console.log(`You tossed: ${result}`);
// };

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// alert(`Random number: ${randomNumber}`);

// rollDice();
// tossCoin();

// q5: Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms)");

// var parseWeight = function(input) {
//     var weightMatch = input.match(/[\d.]+/);
//     return weightMatch ? parseFloat(weightMatch[0]) : null;
// };

// var weight = parseWeight(userInput);

// if (weight !== null) {
//     alert(`Your weight is: ${weight} kg`);
// } else {
//     alert("Invalid weight input. Please try again.");
// }

// q6: Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// if (userGuess === secretNumber) {
//     alert("Congratulations! You guessed the secret number!");
// } else {
//     alert(`Sorry, the secret number was ${secretNumber}.`);
// }
