class Course {
    // #price
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.setPrice = price;
    console.log(this.lengthCalculate());
    this.display();
  }
  get getPrice() {
    return `\$${this.price}`;
  }
  set setPrice(value) {
    this.price = value > 0 ? value : "wrong number";
  }
  lengthCalculate() {
    const [hours] = this.length.split(" ");
    console.log(+hours);
    return +hours / this.price;
  }
  display() {
    console.log(
      `${this.title} is the name of the course which has the length of ${this.length} and has the price of the ${this.getPrice}`
    );
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numofExercise) {
    super(title, length, price);
    this.numofExercise = numofExercise;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log("This is the method which is defined by me");
  }
}

const course1 = new Course("js", "64 hours", -550);
const course2 = new Course("css", "24 hours", 550);
const praticalCourse1 = new PracticalCourse("badminton", "3 hours", 100, 12);
console.log(praticalCourse1);
const theoreticalCourse = new TheoreticalCourse(
  "social science",
  "4 hours",
  140
);
course1.#price=213432;
theoreticalCourse.publish();
console.log(theoreticalCourse);
console.log(course1);
console.log(course2);
