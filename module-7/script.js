// Returning Boolean Values from Functions
function isLess(a, b) {
  return a <= b;
}

isLess(10, 15);

// Return Early Pattern for Functions
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Counting Cards
let count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Build JavaScript Objects
const myDog = {
  name: "Doki",
  legs: 4,
  tails: 1,
  friends: []
};

// Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Accessing Object Properties with Bracket Notation
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

// Accessing Object Properties with Variables
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj3[playerNumber];

// Updating Object Properties
// Setup
const myDog2 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder";

// Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// Delete Properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}

// Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

// Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Record Collection
function updateRecords(records, id, prop, value) {

  if(value === "") {
    delete records[id][prop];
  }

  if(prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }

  if(prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty('tracks')) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }

  return records;
}

