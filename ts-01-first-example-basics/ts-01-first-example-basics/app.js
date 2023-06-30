"use strict";
class User {
    // name: string;
    // private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log("does something");
    }
}
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User("max", 39);
console.log(user.name);
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const button = document.querySelector("button");
function add(a, b) {
    return a + b;
}
// type CalculationResult = { res: number; print: () => void }[];
// type printMode = "Consoe" | "alert";
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
let results = [];
function printResult(result, printMode) {
    if (printMode == OutputMode.CONSOLE) {
        console.log(result);
        console.table(results);
    }
    else if (printMode == OutputMode.ALERT) {
        alert(result);
    }
}
// printResult(add(5, 3));
const isDone = false;
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
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
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho("Hi there").split(' ');
