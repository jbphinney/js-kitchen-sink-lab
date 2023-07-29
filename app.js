// setting up variables.
let vegetables = ['Cucumber', 'Brussle Sprouts', 'Broccoli', 'Spinach'];
let myName = 'John';
const numberStates = 50;
let sum = 5 + 4;
let pet = {
    name: 'roofus',
    breed: 'ridgeback'
};

let ageTest = {
    Bill: 21,
    Bob: 18,
    Jill: 30,
    Frank: 19,
    Peter: 21
};

let numberedWords = getLength('Hello World!');


// doing things with the variables
function sayHello() {
    alert('Hello World!');
};

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else (
        alert('Welcome ' + name + '!')
    )
};

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
};

console.log(pet);

for (let i in ageTest) {
    checkAge(i, ageTest[i]);

};

function getLength(word) {
    // console.log(word.length);
    let numberedWords = word.length
    return numberedWords
}

if(numberedWords % 2 == 0 ){
    console.log('This world is nice and even!');
}else{
    console.log('The world is an odd place!');
};

console.log(numberedWords)

