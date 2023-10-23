// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
Escape Sequences in Strings

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed 
*/

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
const myStr4 = "This is the start. " + "This is the end.";


// Concatenating Strings with the Plus Equals Operator
let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";

// Constructing Strings with Variables
const myName = "Manuel";
const myStr6 = "My name is " + myName + " and I am well!";


// Appending Variables to Strings
const someAdjective = "great choice";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;


// Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Understand String Immutability
let myStr8 = "Jello World";
myStr8 = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String
const thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String
const lastLetterOfLastName = lastName[lastName.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "A very " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;