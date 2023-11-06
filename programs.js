// TASK 
// 1. Do the below programs in anonymous function & IIFE
//  a) Print odd numbers in an array

// anonymous function

let printOdd = function(arr){ 
    let odd = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i]);
        }
    }
    console.log("The Odd number are",odd);
}
printOdd([1,2,3,4,5]);

// IIFE function
(function printOdd(num) {
    for (let i=0; i<num.length; i++) {
      if(num[i] % 2 !== 0) {
        console.log(num[i]);
      }
    }
  })([1,2,3,4,5]);

  // b) Convert all the strings to title caps in a string array
// anonymous function
  let titleCaps = function titleCaps(str){
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCaps("Welcome to Guvi"));

// IIFE function
(function titleCaps(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
   
  })("Welcome to Guvi");

  //   c) Sum of all numbers in an array
// anonymous function
let sum = function(nums){
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total = total+nums[i];
    }
    console.log(total);
}
sum([10,20,30]);

// IIFE function
(function sum(nums) {
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total = total+nums[i];
    }
    console.log(total);
})([10,20,30]);

//   d) Return all the prime numbers in an array
// anonymous function
let primeNum = function(){
    let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });  
    console.log(numArray);
}
primeNum();

// IIFE function
(function primeNumOne(){
    let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });  
    console.log(numArray);
})();

//   e) Return all the palindromes in an array
// anonymous function
function isPalindrome(str)
{
    return str == str.split('').reverse().join('');
 
}
let palindromes = function(){
    let palArr = ["fof","dod","apple"]
    const result = palArr.filter(word => isPalindrome(word)); //filter function that filters array to only keep palindromes

    console.log(result);
}
palindromes();

// IIFE function
(function palindromesOne(){
    let palArr = ["fof","dod","apple"]
    const result = palArr.filter(word => isPalindrome(word)); //filter function that filters array to only keep palindromes
    console.log(result);
})();

//   f) Return median of two sorted arrays of the same size
// anonymous function
let median = (a, b) => 
{
let c = [...a, ...b].sort((a, b) => a - b);
  let half = c.length / 2 | 0;
if (c.length % 2) return c[half];
  return (c[half] + c[half - 1]) / 2;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(median(arr1, arr2));

// IIFE function
(function medianOne(){
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    let finalArr = [...arr1, ...arr2].sort((arr1, arr2) =>arr1 -arr2);
    let half = finalArr.length / 2 | 0;
    if (finalArr.length % 2) return finalArr[half];
    console.log((finalArr[half] + finalArr[half - 1]) / 2);
})();

//   g) Remove duplicates from an array
// anonymous function
let removeDuplicates = function(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(["pink","red","pink","blue","white","blue","black"]));

// IIFE function
(function removeDuplicatesOne(arr){
    let dupArr = ["pink","red","pink","blue","white","blue","black"];
    let unique = [];
    dupArr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    console.log(unique);
})();

//h)Rotate an array by k times
// anonymous function
let arrayRotation = function() {
    let rotArr = [1,2,3,4,5];
    let k = 2;
    for (let i = 0; i < k; i++) {
        rotArr.unshift(rotArr.pop());
    }
    console.log(rotArr);  
}
arrayRotation();

// IIFE function
(function arrayRotationOne(arr){
    let rotArr = [1,2,3,4,5];
    let k = 2;
    for (let i = 0; i < k; i++) {
        rotArr.unshift(rotArr.pop());
    }
    console.log(rotArr);
})();

//2.Do the below programs in arrow functions.
//  a) Print odd numbers in an array
//Arrow Function
 printOddTwo = (arr) => { 
    let odd = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2!==0){
            odd.push(arr[i]);
        }
    }
    console.log("The Odd number are",odd);
}
printOddTwo([1,2,3,4,5]);

 // b) Convert all the strings to title caps in a string array
//Arrow Function
titleCapsTwo =  (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCapsTwo("Welcome to Guvi"));

//   c) Sum of all numbers in an array
// Arrow function
sumTwo = (nums) => {
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total = total+nums[i];
    }
    console.log(total);
}
sumTwo([10,20,30]);

//   d) Return all the prime numbers in an array
// Arrow function
primeNumTwo = () => {
    let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    numArray = numArray.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });  
    console.log(numArray);
}
primeNumTwo();

//   e) Return all the palindromes in an array
// Arrow function
palindromesTwo = () => {
    let palArr = ["fof","dod","apple"]
    const result = palArr.filter(word => isPalindrome(word)); //filter function that filters array to only keep palindromes

    console.log(result);
}
palindromesTwo();