function isEvenOdd(number) {
  return number % 2 ? "odd" : "even";
}
//constant time complexity => O(1)
console.log(isEvenOdd(20));
console.log(isEvenOdd(11));
