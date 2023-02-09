// 1. Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] >= num){
      num = array[i];
    }
  }
  return num;
}

const array = [1, 141, 23, 10, 9, 92];
console.log(largestNumber(array));

// 2. Write a function that takes a string and returns the number of vowels in the string.
const vowels = ['a', 'e', 'i', 'o', 'u']

function numberOfVowels(string) {
  let count = 0;
  for (let i of string.toLowerCase()) {
    if (vowels.includes(i)) { //includes() returns true if a string includes a vowel and count plus
      count++
    }
  }
return count;
}

const string = ("It was a nice day!");
console.log(numberOfVowels(string));

// 3. Write a function that takes two arrays of numbers and returns a new array with all the elements from both arrays, without any duplicates.
const array1 = ["dog", "cat", "bird", "cat"];
const array2 = ["cat", "duck"];

function combineArrays(array1, array2) { 

const result = []
for (let i = 0; i < array1.length; i++) {
  if (result.indexOf(array1[i]) == -1) result.push(array1[i]) //index() checks if in the result array the object is not present it will remembers it
}                                                             //pushes it to the result array https://www.youtube.com/watch?v=dvPybpgk5Y4&ab_channel=InterviewNest
for (let i = 0; i < array2.length; i++) {
  if (result.indexOf(array2[i]) == -1) result.push(array2[i])
}
  return result;
}


console.log(combineArrays(array1, array2));

// 4. Write a function that takes an array of numbers and returns a new array with all the odd numbers in the original array
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddNumbers(array) {
  const odds = [];

  array.forEach(i => {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  });

  return odds;
}

const result = oddNumbers(num);
console.log(result);


// 5. Write a function that takes an array of numbers and returns an array with all the even numbers in the original array.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(array) {
  const even = [];

  array.forEach(i => {
    if (i % 2 === 0) {
      even.push(i);
    }
  });

  return even;
}

const final = evenNumbers(numbers);
console.log(final);

// 6. Write a function that takes two strings and returns a string that contains the characters that appear in both strings.
function commonCharacters(string1, string2) {}

// 7. Write a function that takes an object and returns a new object with all the keys and values reversed (BONUS)
function reverseObject(object) {}

/* Bonuses */

// Palindrome checker: Write a program that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards).
function palindrome(string) {}
//Word count: Write a program that takes in a string and returns the number of words in the string.
function wordCount(string) {}
// Character count: Write a program that takes in a string and returns the frequency count of each character in the string.
function characterCount(string) {}
// Reverse string: Write a program that takes in a string and returns the string reversed.
function reverseString(string) {}
// Replace vowels: Write a program that takes in a string and replaces all vowels with a specified character.
function replaceVowels(string, character) {}
// Longest word: Write a program that takes in a string and returns the longest word in the string.
function longestWord(string) {}
// Text analyzer: Write a program that takes in a string and returns the number of characters, words, and sentences in the string.
function textAnalyzer(string) {}
// Letter change: Write a program that takes in a string and changes each letter to the next letter in the alphabet.
function letterChange(string) {}
