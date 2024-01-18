
const myFirstName = "David";
const myLastName = "Martin";
const myAge = "old";
const myCity = "Nowhere, KS";
let myFirstInitial = myFirstName[0];
let myLastInitial = myLastName[0];
const firstNameLength = myFirstName.length;


function sayGreeting(firstName, lastName, age, city, firstInitial, lastInitial) {
    console.log(`Hello! My name is ${firstName} ${lastName}! I'm ${age}, and I'm from ${city}. It's nice to meet you!`)
    console.log(`Sincerely,\n${firstInitial}.${lastInitial}.`)
}

sayGreeting(myFirstName, myLastName, myAge, myCity, myFirstInitial, myLastInitial);
