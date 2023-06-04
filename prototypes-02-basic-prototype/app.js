// class AgedPerson {
//   // constructor(){
//   //   console.log(this.name)
//   // }
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "Max";

//   constructor() {
//     super();
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old."
//     );
//   };
// }

// function Person() {
//   this.age = 30;
//   this.name = "Max";
// }
// Person.prototype.greet = function () {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " years old."
//   );
// };
// Person.description="Mujse Peda hote hai sare Person"

// Person.prototype.printAge = function printAge() {
//   console.log(`This is my age ${this.age}`);
// };

// console.dir(Person);
// const p = new Person();
// p.greet();
// p.printAge();
// console.log(Person.prototype === p.__proto__);
// console.log(p.__proto__);
// // console.log(p.toString())

// // const p2=new p.__proto__.constructor()
// // console.log(p2)

// console.dir(Object.prototype.__proto__)

// const p = new Person();
// const p2 = new Person();
// console.log(p);
// console.log(p.__proto === p2.__proto);
// const btn = document.querySelector("button");
// btn.addEventListener("click", p.greet.bind(p));

// const course={
//   title:'Javscript - The Complete Guide',
//   rating:5
// }
// Object.setPrototypeOf(course,{
//   // ...Object.getPrototypeOf(course),
//   printRating:function(){
//     console.log('tasdjfasklj')
//   }
// })
// console.log(course.__proto__)

// console.log("topa tapu");-->1

// setTimeout(() => {
//   console.log("tameto");
// }, 0);--->4

// Promise.resolve().then(() => console.log('resolved promise'))--->3


// console.log('adfasdfa🍅🍓')-->2