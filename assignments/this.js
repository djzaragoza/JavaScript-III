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

// var Person = function(name, age){
//     return{
//         name: name,
//         age: age,
//         sayName: function(){
//             console.log(this.name);
//         },
//         mother: {
//             name: `Thess`,
//             sayName: function(){
//                 console.log(this.name);
//             }
//         }
//     };
// };

// var DJ = Person(`DJ`, 35);
// DJ.sayName();
// DJ.mother.sayName();

// Principle 3

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// };

// var myCar = new Car(`Toyota`, `RAV4`);
//     console.log(myCar);

// code example for New Binding

// var Animal = function (color, name, type) {
//     this.color = color;
//     this.name = name;
//     this.type = - type;
// };

// var zebra = new Animal(`black and white`, `Zorro`, `Zebra`);

// Principle 4

// var sayAge = function(){
//     `use strict`;
//     console.log(this.age);
// };

// var me = {
//     age: 35
// };

// sayAge();

// code example for Explicit Binding