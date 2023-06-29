const age = [123, 4, 22];

age.push(4); //Constant time complexity => O(1)

age.unshift(5); //Linear time complexity => O(n)

const myAge = age[1]; // => constant time complexity => O(1)

//---
const namePopularity = [
  { user: "Pratik", usages: 5 },
  { user: "Rohan", usages: 64 },
];

const manuUsages = namePopularity.find((e) => e.user === "Rohan").usages;
//BEST CASE TIME COMPLEXTITY => O(1)
//WORST CASE TIME COMPLEXTITY => O(n)
//AVERAGE CASE TIME COMPLEXTITY => O(n)

const nameMap = {
  Pratik: 5,
  Rohan: 2,
};

console.log(nameMap["Pratik"]); // => O(1)
