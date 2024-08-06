// Create and modify an array of colors:

let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

let firstColor = colors.shift();

let lastColor = colors.pop();

colors.push("pink");
colors.unshift("brown");

let newColors = colors.slice(1,4);

let colorString = newColors.join();

let colorsCopy = [...colors];

// Objects
const person = {
    name: "Jim Marbles",
    age: 84,
    favoriteColors: ["yellow", "orange"]
}

let name = person.name;
let age = person.age;
let favoriteColors = person.favoriteColors;

person.favoriteFood = "pizza";

delete person.favoriteColors;

const newPerson = {...person};

newPerson.name = "Harold Buttersworth";
newPerson.age = 105;
newPerson.favoriteFood = "corndogs";
newPerson.divorceStatus = "yes";

let newStuff = {friends: ["Bill", "Susan", "Gregory"], washesHands: "yes"};
Object.assign(person, newStuff);

person.introduction = () => console.log(`"The name's ${person.name}." (gently bows)`);

console.table(person);
person.introduction()
