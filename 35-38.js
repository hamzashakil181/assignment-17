// Q1: Write a function that displays current date & time in your
// browser.

// function displayDateTime() {
//     const now = new Date();
//     document.write(now.toLocaleString());
// }

// setInterval(displayDateTime, 1000);

// q2: Write a function that takes first & last name and then it
// greets the user using his full name.


// function greetUser() {
//     const firstName = document.querySelector('input[name="firstName"]').value;
//     const lastName = document.querySelector('input[name="lastName"]').value;
//     document.write(`Hello, ${firstName} ${lastName}!`);
// }

// q3: Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNumbers() {
//     const num1 = +document.querySelector('input[name="number1"]').value;
//     const num2 = +document.querySelector('input[name="number2"]').value;
//     document.write(`The sum is: ${num1 + num2}`);
// }

// q4: Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculate(num1, num2, operator) {
//     if (operator === '+') return num1 + num2;
//     if (operator === '-') return num1 - num2;
//     if (operator === '*') return num1 * num2;
//     if (operator === '/') {
//         if (num2 === 0) return "Error: Division by zero";
//         return num1 / num2;
//     }
//     return "Error: Invalid operator";
// }

// // Example usage:
// const num1 = 10;
// const num2 = 5;
// const operator = '+';
// const result = calculate(num1, num2, operator);
// console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);

// q5:
// Write a function that squares its argument.

// function square(num) {
//     return num * num;
// }

// const result = square(5);
// console.log(The square of 5 is: ${result});

// q6: Write a function that computes factorial of a number.

// function factorial(n) {
//     if (n < 0) return "Error: Negative numbers don't have factorials.";
//     if (n === 0) return 1;
    
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i; // Multiply result by i
//     }
//     return result;
// }

// const result = factorial(5);
// console.log("The factorial of 5 is: " + result);


// q7: Write a function that take start and end number as inputs
// & display counting in your browser.

// function count(start, end) {
//     if (start > end) {
//         console.log("Error: Start must be less than or equal to end.");
//         return; 
//     }
    
//     for (let i = start; i <= end; i++) {
//         console.log(i); 
//     }
// }
// count(1, 10); 

// q8: Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//     return Math.sqrt(base * base + perpendicular * perpendicular);
// }

// const hypotenuse = calculateHypotenuse(3, 4);
// console.log("The hypotenuse of the triangle is: " + hypotenuse);

// q9: Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width, height) {
//     return width * height; // Multiply width by height
// }

// // Using values
// console.log("The area of the rectangle (using values) is: " + calculateArea(5, 10));

// // Using variables
// const rectWidth = 7;
// const rectHeight = 12;
// console.log("The area of the rectangle (using variables) is: " + calculateArea(rectWidth, rectHeight));

// q10: Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam


// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase(); // Clean the string
//     const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse it
//     return cleanedStr === reversedStr; // Check if it's a palindrome
// }

// // Example usage:
// console.log("madam is a palindrome: " + isPalindrome("madam"));
// console.log("A man, a plan, a canal, Panama! is a palindrome: " + isPalindrome("A man, a plan, a canal, Panama!"));
// console.log("hello is a palindrome: " + isPalindrome("hello"));

// q11: Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeFirstLetter(str) {
//     let words = str.split(' '); // Split into words
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1); // Capitalize first letter
//     }
//     return words.join(' '); 

// // Example usage:
// console.log(capitalizeFirstLetter('the quick brown fox')); 

// q12: Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str) {
//     let longestWord = '';
//         str.split(' ').forEach(word => { // Split and iterate through each word
//         if (word.length > longestWord.length) {
//             longestWord = word; // Update longest word
//         }
//     });
//     return longestWord; // Return the longest word
// }

// // Example usage:
// console.log(findLongestWord('Web Development Tutorial'));

