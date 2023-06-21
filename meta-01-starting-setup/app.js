const uid = Symbol();
console.log(uid);

const user = {
  [uid]: "p1",
  name: "Pratik",
  age: 19,
  [Symbol.toStringTag]: "User",
};

console.log(user.toString());
console.log(Symbol("uid") === Symbol("uid"));

const company = {
  // curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return {
  //       value: this.curEmployee,
  //       done: true,
  //     };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    let curEmployee = 0;
    while (curEmployee < this.employees.length) {
      yield this.employees[curEmployee];
      curEmployee++;
    }
  },
};

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }
// const it=company.getEmployee()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for (const emp of company) {
  console.log(emp);
}
console.log([...company]);

//--------------------------

const course = {
  title: "JavaScript - The Complete Guide",
};

// Reflect.setPrototypeOf(course, {
//   toString() {
//     return this.title;
//   },
// });

// Reflect.deleteProperty(course,'title')
// delete course.title
// console.log(course.toString());

const courseHanlder = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }
    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, value) {
    if(propertyName === 'rating'){
      return;                                                                                                                             
    }
    obj[propertyName] = value;
  },
};

const pCourse = new Proxy(course, courseHanlder);
console.log(pCourse.title, pCourse.length, pCourse.rating);
pCourse.rating='2'
console.log(pCourse.rating)