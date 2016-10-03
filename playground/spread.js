/*

function add(a, b) {
  return a + b;
}

console.log(add(3,1));

var toAdd = [9, 5];

console.log(add(...toAdd));


var groupA = ['Greg', 'April'];

var groupB = ['Matt', 'Mark'];

var final = [3, ...groupA, ...groupB];

console.log(final);

*/

var person = ['Andrew', 25];
var personTwo = ["Greg", 36];

function greeting(n, a) {console.log("Hi " + n + " , you are " + a)};

greeting(...person);
greeting(...personTwo);

var names = ['Greg', 'April'];
var final = [...names, "Anestasia", "Nathan"];

function family(arr) {
  arr.forEach((name) => console.log("Hello " + name));
}

family(final);
