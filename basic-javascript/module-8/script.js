// Iterate with JavaScript While Loops
const myArray = [];

let i = 5;

while(i >= 0) {
  myArray.push(i);
  i--;
}

// Iterate with JavaScript For Loops
const myArray2 = [];

for(let i = 1; i <= 5; i++) {
  myArray2.push(i);
}

// Iterate Odd Numbers With a For Loop
const myArray3 = [];

for(let i = 1; i < 10; i += 2) {
  myArray3.push(i);
}

// Count Backwards With a For Loop
const myArray4 = [];

for(let i = 9; i > 0; i -= 2) {
  myArray4.push(i);
}

// Iterate Through an Array with a For Loop
let total = 0;

const myArr = [2, 3, 4, 5, 6];

for(let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Iterate with JavaScript Do...While Loops
const myArray5 = [];
let counter = 10;

do {
  myArray5.push(counter);

  counter++;
} while(i < 10);

// Replace Loops using Recursion
function sum(arr, n) {
  if (n === 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

// Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i = 0; i < contacts.length; i++) {

    if(contacts[i].firstName === name) {
      if(contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }

  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");