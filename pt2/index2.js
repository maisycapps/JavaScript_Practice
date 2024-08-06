// mutable temp variable, if else chain, jacket or no jacket (boolean)
let temperature = 100;
let isRaining = false;

function jacketOrNot(temperature, isRaining){

// if else statement
if (temperature <= 40) {
console.log(`It’s ${temperature} degrees outside! Wear a heavy jacket.`)
} else if (temperature <= 60) {
    console.log(`It’s ${temperature} degrees outside. Wear a jacket.`)
} else if (temperature < 70) {
    console.log(`It’s ${temperature} degrees outside, wear a light jacket.`)
} else {
    console.log('It’s hot out today! No jacket needed!');
}

// ternary/conditional statement
isRaining ? console.log('It’s raining, too, so you should bring an umbrella!')
:console.log('No rain today, you can leave the umbrella at home!')

}

jacketOrNot(temperature, isRaining);

// function that accepts two numbers, does a calculation, prints the result

let userName = "terry";

function checkUserName(userName){
    if (userName === false || userName === "" || userName === null || userName === undefined || userName === NaN) {
    console.log('Hello, guest!');
    } else {
    console.log(`waddup ${userName}!`)
    }
}
checkUserName(userName);

let numA = 4;
let numB = 8;
let calc = "subtract";

function maths(numA, numB, calc) {
let result = 0;
let msg = `of ${numA} and ${numB} is`;

    if (calc === "add") {
        result = numA + numB;
        return `Sum ${msg} ${result}`;
    } else if (calc === "subtract") {
        result = numA - numB;
        return `Difference ${msg} ${result}`;
    } else if (calc === "multiply") {
        result = numA * numB;
        return `Product ${msg} ${result}`;
    } else if (calc === "divide") {
        result = numA / numB;
        return `Division ${msg} ${result}`;
    } else if (calc === "modulus") {
        result = numA % numB;
        return `Modulus ${msg} ${result}`;
    } else {
        return `${calc} is an invalid operation.`;
    } 
}

function checkNum(numA, numB) {
    
    if (typeof numA === 'number' && typeof numB === 'number') {
    console.log(maths(numA, numB, calc));
    } else if (typeof numA !== 'number' && typeof numB === 'number') {
    console.log(`numA error. ${numA} is not a valid input. Please enter a numerical value.`);
    } else if (typeof numA === 'number' && typeof numB !== 'number') {
    console.log(`numB error. ${numB} is not a valid input. Please enter a numerical value.`);
    } else {
    console.log(`numA error. numB error. neither ${numA} nor ${numB} are valid inputs. Please enter a numerical value.`)
    }
}

checkNum(numA, numB);