/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - Whenever a function is in the global scope, the value of this inside of that function is the window object
* 2. Whenever a function is called by a dot, the object before the dot is this keyword
* 3. Whenever a constructor function is used, it is a function that returns an object. When you call it, you have to use the keyword.
* 4. Whenever call, apply and bind method's are used, this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// Basic Function
// function greetMe(name) {
//     console.log(`Hello`+ name);
//     console.log(this);
// }

// greetMe(' DJ ');

// code example for Window Binding

// Principle 2

// const myObj = {
//     greeting: `Hello`,
//     sayHello: function(name) {
//         console.log(`${this.greeting}) my name is ${name}`);
//         console.log(this);
//     }
// };
// myObj.sayHello(`DJ`);

// code example for Implicit Binding

// Principle 3

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// };

// var myCar = new Car(`Toyota`, `RAV4`);
//     console.log(myCar);

// code example for New Binding

// Principle 4

// function add(c, d){
//     console.log(this.a + this.b + c + d);
// }

// // add(3, 4);

// var ten = {a: 1, b: 2};

// add.call(ten, 3, 4);

// add.apply(ten, [3, 4]);


// code example for Explicit Binding