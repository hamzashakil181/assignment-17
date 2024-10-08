// q1: Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.


// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Nice to meet you!");

// q2: Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var phoneModel = prompt("Enter your favorite mobile phone model:");
// var length = phoneModel.length;
// alert("Length of input: " + length);

// q3: Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";
// var index = word.indexOf("n");
// console.log("Index of 'n' in 'Pakistani': " + index);

// q4: Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

//         var phrase = "Hello World";
//         var lastIndex = phrase.lastIndexOf("l");
//         document.write("Last index of 'l' in 'Hello World': " + lastIndex);
    
//     q5    : Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

//         var word = "Pakistani";
//         var character = word.charAt(3);
//         document.write("Character at index 3 in 'Pakistani': " + character);
    
//     q6:Repeat Q1 using string concat() method.

//     var firstName = prompt("Enter your first name:");
//         var lastName = prompt("Enter your last name:");
//         var fullName = firstName.concat(" ", lastName);
//         alert("Hello, " + fullName + "!");
    
//         q7: Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

//         var originalWord = "Hyderabad";
//         var replacedWord = originalWord.replace("Hyder", "Islam");
//         document.write("Original Word: " + originalWord + "<br>");
//         document.write("Replaced Word: " + replacedWord);
    
//     q8    : Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

//         var message = "Ali and Sami are best friends. They play cricket and football together.";
//         var updatedMessage = message.replace(/and/g, "&");
//         document.write("Original Message: " + message + "<br>");
//         document.write("Updated Message: " + updatedMessage);
  
//   q9      : Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

//         var stringValue = "472";
//         var numberValue = Number(stringValue); // Convert string to number

//         document.write("String Value: " + stringValue + "<br>");
//         document.write("Type of String Value: " + typeof stringValue + "<br>");
//         document.write("Number Value: " + numberValue + "<br>");
//         document.write("Type of Number Value: " + typeof numberValue);

// q10        : Write a program that takes user input. Convert and 
// show the input in capital letters.

// var input = prompt("Enter text:");
// var uppercaseInput = input.toUpperCase();
// alert("Uppercase: " + uppercaseInput);

// q11: Write a program that takes user input. Convert and 
// show the input in title case.

// var input = prompt("Enter text:");
// var titleCaseInput = input.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(' ');
// alert("Title Case: " + titleCaseInput);

// q12: Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

//         var num = 35.36;
//         var numStr = num.toString(); // Convert to string
//         var resultStr = numStr.replace('.', ''); // Remove the dot
//         document.write("Result: " + resultStr);

// q13        : Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter your username:");
// var specialChars = ['@', '.', '!', ','];
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     if (specialChars.includes(username[i])) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Invalid username. Please enter a valid username without special symbols: @, ., !, or ,");
// } else {
//     alert("Valid username: " + username);
// }

// q14: You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }
// q15: Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password;
// var isValid = false;

// while (!isValid) {
//     password = prompt("Enter your password:");

//     var hasAlphabets = /[a-zA-Z]/.test(password);
//     var hasNumbers = /[0-9]/.test(password);
//     var startsWithNumber = /^[0-9]/.test(password);
//     var isLongEnough = password.length >= 6;

//     if (hasAlphabets && hasNumbers && !startsWithNumber && isLongEnough) {
//         isValid = true;
//         alert("Password is valid.");
//     } else {
//         alert("Invalid password. Please ensure:\n" +
//               "- It contains both alphabets and numbers\n" +
//               "- It does not start with a number\n" +
//               "- It is at least 6 characters long");
//     }
// }

// q16: Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

//         var university = "University of Karachi";
//         var universityArray = university.split(" "); 
//                 document.write("Elements of the array:<br>");
//         for (var i = 0; i < universityArray.length; i++) {
//             document.write(universityArray[i] + "<br>");
//         }
    
//     q17    : Write a program to display the last character of a user 
// input.
// var input = prompt("Enter text:");
// var result;

// if (input.length > 0) {
//     var lastCharacter = input.charAt(input.length - 1);
//     result = 'Last Character: ' + lastCharacter;
// } else {
//     result = 'Please enter something.';
// }

// alert(result);

// q18: You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

//         var text = "The quick brown fox jumps over the lazy dog";
//         var wordToCount = "the";
//       var lowerText = text.toLowerCase();
//         var lowerWord = wordToCount.toLowerCase();
//         var wordsArray = lowerText.split(" ");
//         var count = 0;
//         for (var i = 0; i < wordsArray.length; i++) {
//             if (wordsArray[i] === lowerWord) {
//                 count++;
//             }
//         }

//        document.write("The word '" + wordToCount + "' occurs " + count + " times in the given string.");
