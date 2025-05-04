
//  ##### Code Bug Fixing
// From Questions 1 to 5: A couple of issues are present in the provided code. Identify and rectify these errors to ensure the code functions correctly.




//   ####  Question - 1

//   BMI Calculator
// Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.
// The function should take two arguments: weight(in kilograms) and height(in meters), and should determine the health classification based on the calculated BMI.To calculate the BMI use the formula: BMI = weight / (height * height)
// The function should return the health classification as a String.Determine the health classification based on the calculated BMI:
// If BMI is less than 18.5, the person is classified as "Underweight".
// If BMI is between 18.5(inclusive) and 24.9(exclusive), the person is classified as "Normal weight".
// If BMI is between 25(inclusive) and 29.9(exclusive), the person is classified as "Overweight".
// If BMI is 29.9 or higher, the person is classified as "Obese".


//  #####code



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi < 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }


// rl.question("Enter your weight in kg: ", (weightInput) => {
//     const weight = parseFloat(weightInput);


//     rl.question("Enter your height in meters: ", (heightInput) => {
//         const height = parseFloat(heightInput);


//         const result = calculateBMI(weight, height);
//         console.log(`Your BMI classification is: ${result}`);

//         rl.close();
//     });
// });






// Question-2

// Temperature Converter
// Write a JavaScript function convertTemperature that converts temperatures between Celsius and Fahrenheit scales, providing a flexible tool for users to switch between these two common temperature units.
// The function should take two arguments: temperature and unit, where temperature is the numeric value of the temperature to be converted, and unit is a string indicating the initial temperature unit ("C" for Celsius or "F" for Fahrenheit).
// The function should return the converted temperature value rounded to two decimal places with converted scale as a String.
// If unit is "C", convert the Celsius temperature to Fahrenheit using the formula: Fahrenheit = Celsius * 9/5 + 32.
// If unit is "F", convert the Fahrenheit temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
// If unit is neither "C" nor "F", then it should return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit".


// ###### code






// const readline = require('readline');

// function convertTemperature(temperature, unit) {
//     let converted;

//     if (unit === "C") {
//         converted = (temperature * 9 / 5) + 32;
//         return `${converted.toFixed(2)} F`;
//     } else if (unit === "F") {
//         converted = (temperature - 32) * 5 / 9;
//         return `${converted.toFixed(2)} C`;
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit";
//     }
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter temperature value: ", (tempInput) => {
//     const temperature = parseFloat(tempInput);

//     rl.question("Enter unit (C or F): ", (unit) => {
//         const result = convertTemperature(temperature, unit.toUpperCase());
//         console.log("Converted Temperature:", result);
//         rl.close();
//     });
// });


//   ##### Question -3



// Tip Calculator
// Write a JavaScript function calculateTip that calculates the total amount to be paid, including the tip, based on the bill amount and a specified tip percentage.
// The function should take two arguments: billAmount (the total bill amount) and tipPercentage (the tip percentage to be applied, expressed as a decimal). Calculate the tip amount by multiplying the billAmount by the tipPercentage and add the calculated tip amount to the billAmount to get the total amount to be paid.
// The function should return the total amount to be paid, rounded to two decimal places as a Number.



//   ### code



// const readline = require('readline');
// function calculateTip(billAmount, tipPercentage) {
//     const tip = billAmount * tipPercentage;
//     const total = billAmount + tip;
//     return Number(total.toFixed(2));
// }
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the bill amount: ", (billInput) => {
//     const billAmount = parseFloat(billInput);
//     rl.question("Enter the tip percentage (e.g., 0.15 for 15%): ", (tipInput) => {
//         const tipPercentage = parseFloat(tipInput);

//         if (isNaN(billAmount) || isNaN(tipPercentage)) {
//             console.log("Invalid input. Please enter numeric values.");
//         } else {
//             const total = calculateTip(billAmount, tipPercentage);
//             console.log("Total amount to be paid: $" + total);
//         }

//         rl.close();
//     });
// });



//  ####Question - 4

// Palindrome Checker
// Write a JavaScript function isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards (ignoring spaces, punctuation, and capitalization).
// The function should take one argument: str (string), and should perform the following steps:
// Convert the input string to lowercase.
// Remove any non-alphanumeric characters (including spaces and punctuation) from the string.
// Compare the modified string with its reverse to determine if it is a palindrome.
// The function should return a boolean value indicating whether the input string is a palindrome.


// code


// const readline = require('readline');


// function isPalindrome(str) {

//     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const reversed = cleaned.split('').reverse().join('');
//     return cleaned === reversed;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Enter a string to check if it's a palindrome: ", (input) => {
//     const result = isPalindrome(input);
//     console.log(`Is palindrome: ${result}`);
//     rl.close();
// });






// #####Question-5



// Vowel Count
// Write a JavaScript function countVowels that counts the number of vowels (a, e, i, o, u) in a given string. The function should take one argument: str (string).
// The function should return the count of vowels in the input string.



// code

//

//    ####   Improvised Perspective to the Coding Problem




// Improvised Perspective to the Coding Problem
// From Questions 1 to 5: Provide an alternative code implementation different from the one you've been given.




// Quetion - 1

//   Longest Word Length
// Write a JavaScript function called findLongestWord that takes a sentence(string) as
// input and determines the length of the longest word within the sentence.



// code


// const readline = required('readline');

// function findLongestWord(sentence) {
//     const words = sentence.split(/\s+/);
//     let maxLength = 0;

//     for (let word of words) {
//         const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
//         if (cleanedWord.length > maxLength) {
//             maxLength = cleanedWord.length;
//         }
//     }

//     return maxLength;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a sentence: ", (input) => {
//     const length = findLongestWord(input);
//     console.log("Length of the longest word:", length);
//     rl.close();
// });



// Question-2


// Title Case
// Write a JavaScript function called titleCase which accepts a sentence (string) as input and transforms it into title case.
// Title case means that the initial letter of each word is capitalized.

// const readline = require('readline');


// code

// function titleCase(sentence) {
//     return sentence
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a sentence to convert to Title Case: ", (input) => {
//     const result = titleCase(input);
//     console.log("Title Case:", result);
//     rl.close();
// });


// Question.3



// Count Occurrences of a Character
// Write a JavaScript function countOccurrences that takes a string and a character as
// input and returns the count of occurrences of that character in the sentence string.


// code

// const readline = require('readline');

// function countOccurrences(sentence, char) {
//     let count = 0;
//     for (let c of sentence) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a sentence: ", (sentence) => {
//     rl.question("Enter the character to count: ", (char) => {
//         if (char.length !== 1) {
//             console.log("Please enter a single character.");
//         } else {
//             const result = countOccurrences(sentence, char);
//             console.log(`The character "${char}" occurs ${result} times.`);
//         }
//         rl.close();
//     });
// });


// Question-4



// Shopping Cart Total
// Imagine you're building an e-commerce website. Write a JavaScript function calculateTotal that takes an array of products (objects) and calculates the total cost of the items in the shopping cart.
// Each product object has the following properties:
// name: The name of the product (string).
// price: The price of the product (number).
// quantity: The quantity of the product in the cart (number).


// #### code



// function calculateTotal(products) {
//     let total = 0;


//     for (let product of products) {
//         total += product.price * product.quantity;
//     }

//     return total;
// }

// // Example 1
// const cart1 = [
//     { name: "Laptop", price: 1000, quantity: 1 },
//     { name: "Phone", price: 500, quantity: 2 },
//     { name: "Headphones", price: 50, quantity: 4 }
// ];

// const totalCost1 = calculateTotal(cart1);
// console.log("Total Cost for Cart 1: $" + totalCost1); // Output: 2200

// // Example 2
// const cart2 = [
//     { name: "Fruits", price: 10, quantity: 5 },
//     { name: "Vegetables", price: 8, quantity: 3 },
//     { name: "Dairy", price: 5, quantity: 2 },
//     { name: "Snacks", price: 3, quantity: 10 }
// ];

// const totalCost2 = calculateTotal(cart2);
// console.log("Total Cost for Cart 2: $" + totalCost2);





// Question-5

// Fizz Buzz
// Write a JavaScript function fizzBuzz that takes a positive integer n as input and returns an array of strings.
// Replace numbers divisible by 3 with "Fizz", numbers divisible by 4 with "Buzz", and numbers
//  divisible by both 3 and 4 with "FizzBuzz".


//### code




// function fizzBuzz(n) {
//     const result = [];

//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 4 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 4 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(i.toString());
//         }
//     }

//     return result;
// }

// // Example 1
// console.log(fizzBuzz(12));
// // Example 2
// console.log(fizzBuzz(5));





// Logic Building Coding Questions
// From Questions 1 to 10: You have been tasked to develop the logic for the provided coding problems.






// Quetion-1



// Prime Numbers
// Write a JavaScript function findPrimes that takes a positive integer n as
//  input and returns an array of prime numbers less than or equal to n.





// #### code




// function findPrimes(n) {
//     const primes = [];

//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;


//         for (let j = 2; j * j <= i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// // Example 1
// console.log(findPrimes(20));

// // Example 2
// console.log(findPrimes(9));






// Question-2



// Character Reversal
// Write a JavaScript function reverseString that takes a string as
// input and returns the string with its characters reversed.





//#### code





// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Example 1
// console.log(reverseString("JavaScript"));

// // Example 2
// console.log(reverseString("AlmaBetter University"));


// Question-3






// Sign of Product
// Write a JavaScript function signOfProduct that takes an array of integers as input and returns the sign of the product of all the integers in the array.
// The function should return one of the following values:
// 1 if the product is positive.
// -1 if the product is negative.
// 0 if the product is zero.
// Implement the function efficiently, without actually computing the product.




// ###code






// function signOfProduct(nums) {
//     let sign = 1;

//     for (let num of nums) {
//         if (num === 0) {
//             return 0;
//         }
//         if (num < 0) {
//             sign *= -1;
//         }
//     }

//     return sign;
// }

// // Example 1
// console.log(signOfProduct([2, -3, 5, 4]));

// // Example 2
// console.log(signOfProduct([1, 2, 0]));




// Question-4





// Check Sign
// Write a JavaScript function checkSign that takes three numbers as input and returns a string representing the signs of the numbers.
// If all three numbers are positive, return "+++"
// If two numbers are positive and one is negative, return "++-"
// If one number is positive and two are negative, return "+--"
// If all three numbers are negative, return "---"




// ########## code



// function checkSign(a, b, c) {
//     const signs = [a, b, c].map(num => num > 0 ? '+' : '-');
//     return signs.join('');
// }

// // Example 1
// console.log(checkSign(2, 5, 7));

// // Example 2
// console.log(checkSign(8, -3, 4));


// Question-5


// URL Slug Generator
// Imagine you're working on a blog platform. Write a JavaScript function generateSlug that takes a title string and generates a URL-friendly slug by replacing
// spaces with hyphens and converting the text to lowercase.






// ######### Code

// function generateSlug(title) {
//     return title.toLowerCase().replace(/\s+/g, '-') + '.com';
// }

// // Example 1
// console.log(generateSlug("Hello World"));

// // Example 2
// console.log(generateSlug("AlmaBetter Web Dev"));




// Question - 6



// Shortest Word Distance
// Given an array of strings wordsDict and two distinct strings word1 and word2, which are both present in the array. Write a JavaScript function shortestDistance that returns the minimum distance
//  between the positions of word1 and word2 within the list of words.



// ### code


// function shortestDistance(wordsDict, word1, word2) {
//     let index1 = -1;
//     let index2 = -1;
//     let minDistance = Infinity;

//     for (let i = 0; i < wordsDict.length; i++) {
//         if (wordsDict[i] === word1) index1 = i;
//         if (wordsDict[i] === word2) index2 = i;

//         if (index1 !== -1 && index2 !== -1) {
//             minDistance = Math.min(minDistance, Math.abs(index1 - index2));
//         }
//     }

//     return minDistance;
// }

// // Example 1
// const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
// console.log(shortestDistance(wordsDict1, "coding", "makes"));

// // Example 2
// const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
// console.log(shortestDistance(wordsDict2, "apple", "fig"));



// Question-7


// Flip Game
// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.
// Write a JavaScript function findMove that takes a string as input and calculates all the possible states of the string after
//  a valid move has been made and return the states in an array of strings.



//  ##### code


// function findMove(str) {
//     const moves = [];

//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] === '+' && str[i + 1] === '+') {
//             moves.push(str.substring(0, i) + '--' + str.substring(i + 2));
//         }
//     }

//     return moves;
// }

// // Example 1
// console.log(findMove("++++"));

// // Example 2
// console.log(findMove("++-++"));



// Question-8


// Swap Consecutive Characters
// Write a JavaScript function swapConsecutiveCharacters that takes a string as input and rearranges the consecutive characters
// within the string in a swapped manner and returns a swapped string.


// code


// function swapConsecutiveCharacters(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i += 2) {
//         if (i + 1 < str.length) {
//             result += str[i + 1] + str[i];
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

// // Example 1
// console.log(swapConsecutiveCharacters("abcdef"));

// // Example 2
// console.log(swapConsecutiveCharacters("AlmaBetter"));



// Question-9



// Array Intersection
// Write a JavaScript function arrayIntersection that takes two arrays as input and returns a new array containing the
//  elements that are common in both arrays, without any duplicates.




// #### Code
// function arrayIntersection(arr1, arr2) {
//   const set2 = new Set(arr2);
//   const result = new Set();

//   for (const num of arr1) {
//     if (set2.has(num)) {
//       result.add(num);
//     }
//   }

//   return Array.from(result);
// }

// console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));
// console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]));




// Question-10


// Insert 7
// You are given a string consisting of characters, including spaces. Your task is to insert the character "7" immediately after every set of 6 characters from the start of the string, while ignoring spaces. The spaces should be skipped while counting the characters.
// Write a JavaScript function insert7 that takes a string as input and returns the modified string after performing the required insertion.




//  ####code


// function insert7(str) {
//     let count = 0;
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             count++;
//             result += str[i];
//             if (count === 6) {
//                 result += '7';
//                 count = 0;
//             }
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

// // Example 1
// console.log(insert7("Hello World and Universe!"));

// // Example 2
// console.log(insert7("Full Stack Web Development")); 
