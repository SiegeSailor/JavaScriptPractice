// One of the perposes of useing ES6 is to prevent to use the same Global Variable


// let :: Only survive in the scope
// let in function
var a = 0;

function letProve() {
    // This variable a doesn't affect the global variable a since we use let in this scope.
    // If no let, the global varriable a will be 1.
    let a = 0;
    a = 1;
}
letProve();
console.log(a);
// let in for
const listLen = document.querySelectorAll('.list li').length;
for (let i = 0; i < listLen; i = i + 1) {
    // If use var rather than let, the alert( i + 1) will all be 4 because of global variable issue;
    document.querySelectorAll('.list li')[i].addEventListener('click', function () {
        alert(i + 1);
    })
}

// const :: read only
const b = 0;
// b = 2;  <<-- use this assignment will cause error
console.log(b);
// But const can be assigned if it is an object
const obj = {
    url: 'http://www.yahoo.com.tw'
}
obj.url = 'http://www.google.com';
console.log(obj);
// We can still make const object read only with this.
// This will freeze the variable in the current stage.
obj.url = 'http://www.yahoo.com.tw';
Object.freeze(obj);
obj.url = 'http://www.google.com';
console.log(obj);

// var vs let vs const

// === 1 ===
// var will be pushed up to the top as JavaScript default.
console.log(varC);
var varC = 'C';
console.log(varC);
// let and const variable will only show up when we define them.
// console.log(letC);
let letC = 'C';
console.log(letC);
// console.log(constC);
const constC = 'C';
console.log(constC);

// === 2 ===
// var can be defined many times.
var d = 0;
var d = 1;
// let and const can only be defined once. no matter the first defination is made by var or let or const.
// let d = 0;
// let d = 1;
// const d = 0;
// const d = 1;

// === 3 ===
// let and const will not automatically be global variable ( under window ).
var e = 0;
console.log(e);
console.log(window.e);
console.log(this.e);
let letE = 5;
console.log(letE);
console.log(window.letE);
const constE = 10;
console.log(constE);
console.log(this.constE);