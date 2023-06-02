// const hobbies2 = Array(5);
// const characters = Array.from("Hi there");

// console.log(hobbies2);
// console.log(characters);

// const personalDetail = [23, "Pratik", { name: "Pratik" }];
// personalDetail[5] = "yes";

// const hobbies = ["sports", "cooking"];
// hobbies.push("dancing");
// console.log(hobbies.unshift("yes"));
// console.log(hobbies.pop());
// console.log(hobbies.shift());

// // console.log(hobbies.splice(-2,1))
// hobbies.push("yes");
// const hobbies3 = hobbies.slice(1);
// console.log(hobbies);
// console.log(hobbies3);

// const numbers = [1, 2, 3];
// const numbers2 = numbers.concat([5, 6, 3]);
// numbers.push("yes");
// console.log(numbers, numbers2);

// console.log(numbers2.lastIndexOf(3));
const persons = [{ name: "Pratik" }, { name: "Shruti" },{name:"Pratik"}];
const persons2=[...persons.map(person => ({name:person.name}))]
persons[2].name="Jay"
console.log(persons2)
const [pratik,...shruti]=persons
console.log(pratik,shruti)
// const pratik=persons.find((person, idx, persons) => person.name === "Pratik")
// console.log(persons.findIndex((person, idx, persons) => person.name === "Pratik"))
// pratik.name="Krishna"
// console.log(persons)
// console.log(numbers.includes(3))

// const prices = [1, 2, 3, 4];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (tax + 1));
// }
// prices.forEach((price, idx, prices) => {
//   taxAdjustedPrices.push({index:idx,taxValue:price * (tax + 1)});
// });

// const taxAdjustedPrices = prices.map((price, idx, prices) => ({
//   index: idx,
//   taxValue: price * (tax + 1),
// }));

const prices2 = [12.2, 3, 2, 55];

const sortedArray = prices2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedArray.reverse());
// console.log(taxAdjustedPrices);

const filter = prices2.filter((price) => price > 6);
console.log(filter);

let sum = 0;
// prices2.forEach((price) => (sum += price));
sum = prices2.reduce(
  (prevValue, curValue, curIndex, prices) => prevValue + curValue,
  0
);
console.log(sum);

const data = "new york;10.99;2000";
const data2 = data.split(";");
console.log(+data2[1]);

const name = ["Pratik", "Shruti"];
console.log(name.join(" "));
// console.log(sum);
// const pratik = [...data2];
// pratik.push("Discipline");
// console.log(pratik, data2);

console.log(Math.min(...prices2));
