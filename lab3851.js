/*================================================*/
/*              ALAB38.5.1 PART ONE              */
/*==============================================*/

/*Take an array of numbers and return the sum*/
function sumArray(num){
    return num.reduce((a,b)=>a+b,0);
}
let num = [1, 2, 3, 4, 5];
let sum = sumArray(num);
console.log(sum);

//Take an array of numbers and return the average
function averageArray(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    let numbers = [1, 2, 3, 4, 5];
    let average = averageArray(numbers);
    console.log(average);

//Take an array of strings and return the longest string
function longestString(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
  }
  //Testing the function
  
  let str = ["hello", "world", "Billy", "Montoute"];
  let longest = longestString(str);
  console.log(longest);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function strLongerThan(arr, num) {
    return arr.filter(s => s.length > num);
  }
 
  let strings = ["say", "hello", "in", "the", "morning"];
  let longerStrings = strLongerThan(strings, 3);
  console.log(longerStrings);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
  function printNumbers(n, current = 1) {
    if (current <= n) {
      console.log(current);
      printNumbers(n, current + 1);
    }
  }
  
  printNumbers(10);

  let n = prompt("Enter a number:");
printNumbers(parseInt(n));