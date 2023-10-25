// Problem 1: Write a function to calculate the area of a triangle.
var base = 10;
var height = 6;

var areaOfTriangle = (base * height) / 2;

console.log(areaOfTriangle);

// Problem 2: Write a function to convert degrees to radians.
function degreesToRadians(deg) {
    return deg * (Math.PI / 180.0);
}

console.log(degreesToRadians(24));

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const resultOfFactorial = calculateFactorial(20);
console.log(resultOfFactorial);

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(6));
console.log(isPrime(15));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arrayOne, arrayTwo) {
    const mergedArray = arrayOne.concat(arrayTwo);
    return mergedArray;
}
const arr1 = ["red", "green", "yellow"];
const arr2 = ["blue", "indigo"];

const newArray = mergeArrays(arr1, arr2);
console.log(newArray); 



// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
      return true;
    } else {
      return false;
    }
  }
console.log(isLeapYear (1964));
console.log(isLeapYear (2011));


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

const n = ['mony', 'yeasmin', 'romana', 'mony', 'lima', 'romana', 'yeasmin', 'lima', 'tania', 'romana', 'mony']

function removeDuplicate(n) {
    const empty = []
    for (let i = 0; i < n.length; i++) {
        const names = n[i];

        if (empty.includes(names) === false) {
            empty.push(names);
        }
    }
    return empty;
}

console.log(removeDuplicate(n));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(x) {
    return (x - 32) / 1.8;
}

console.log(convertToCelsius(100));


// Problem 9: Write a function to find the maximum of five numbers.

function maximumNum(arr){
    const loopCount = arr.length;

    let big_num = arr[0];

    for (let i = 0; i < loopCount; i++) {

        if(big_num < arr[i] ){
            big_num = arr[i];
        }
    }

    return big_num;
}

const nubs = [65, 55, 92, 56, 45]

const ans = maximumNum(nubs);

console.log(ans)


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total
// number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(string) {
    if(string.length% 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd("Javascript"));
console.log(evenOdd("Hello"));





// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

// Ans:

/* 'if...else':
 1. The if...else blocks are executed depending on the condition in the if statement.
 2. if...else statement uses multiple statement for multiple choices.
 3.This statement used for  integer, character, pointer, floating-point type, or Boolean type.
 4.In if...else, the values are based on conditions.
 5.if...else statement tests both logical expressions and equality.

 'switch':
1. The switch statement has multiple cases.
2. Single statements for multiple decisions.
3. The switch statement used for character expressions and integers.
4. In the switch case, the values are based on user preference.
5. The switch statement tests only equality. */


// 2. What is JavaScript, and what is its primary purpose in web development?

// Ans:

/* JavaScript is a programming language.It was invented by Brendan Eich. It creates elements for improving site visitors’ 
interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors.
It was a general-purpose scripting language to ensure web pages’ interoperability across different browsers and devices.
This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.
The primary purpose of JavaScript in web development is to add interactivity to web pages. This makes web pages more engaging and user-friendly. For example, JavaScript can be used to create dynamic menus, validate form input, and display real-time data.
JavaScript can also be used to develop web applications. Web applications are web pages that provide users with a rich, interactive experience. 
For example, web applications such as Gmail, Google Maps, and Facebook all rely on JavaScript to function.

Here are some specific examples of how JavaScript is used in web development:
1.Form validation
2.Dynamic menus
3.Real-time data
4.Web applications

JavaScript can be used to perform a wide variety of tasks on web pages, such as:
1.Validating form input
2.Creating dynamic menus and toolbars
3.Controlling multimedia elements
4.Performing animations
5.Communicating with web servers

JavaScript is a powerful and versatile language that is essential for web development. 
It is used to add interactivity to web pages and to develop web applications. */


// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

// Ans:

/* The var, let, and const is the keyword to declare variables in javascript.
So, in this shot, we will look at the differences between these keywords.

var:
To declare a global variable
To declare a function variable
To declare a variable that needs to be redeclared or reassigned multiple times within a function

let:
To declare a variable that needs to be reassigned within a block
To declare a variable that needs to be accessed from within a block and from outside of the block

const:
To declare a variable whose value will never change
To declare a constant object or array */

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.



// 5. What is the difference between "null" and "undefined" in JavaScript?

//Ans:

/* Null:
To represent the absence of a value for a variable that has been declared but not assigned a value.
To represent the absence of a value for a property of an object.
To represent the absence of a result from a function call.

Undefined:
To represent the absence of a variable that has not yet been declared.
To represent the absence of a property of an object that has not yet been defined.
To represent the default value of a function parameter. */

