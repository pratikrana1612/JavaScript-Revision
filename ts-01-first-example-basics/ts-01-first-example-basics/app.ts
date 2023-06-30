interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  // name: string;
  // private age: number;
  constructor(public name: string, private age: number) {}
  print() {
    console.log("does something");
  }
  // this.name = name;
  // this.age = age;
}
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResult = CalculationContainer[];
const user = new User("max", 39);
console.log(user.name);

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const button = document.querySelector("button");

function add(a: number, b: number) {
  return a + b;
}
// type CalculationResult = { res: number; print: () => void }[];
// type printMode = "Consoe" | "alert";
enum OutputMode {
  CONSOLE,
  ALERT,
}

let results: Array<any> = [];

function printResult(result: number | string, printMode: OutputMode): void {
  if (printMode == OutputMode.CONSOLE) {
    console.log(result);
    console.table(results);
  } else if (printMode == OutputMode.ALERT) {
    alert(result);
  }
}
// printResult(add(5, 3));
const isDone: boolean = false;

button?.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print: function () {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  // results.push(5);
  console.table(results);
  results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>("Hi there").split(' ')
