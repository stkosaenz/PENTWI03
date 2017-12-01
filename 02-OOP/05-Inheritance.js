// Omar Sáenz Mendoza
// omar.saenz@softtek.com
// MEAN: Javascript for experienced developers

const Person = function (firstName) {
    this.firstName = firstName;
};

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName);
};

function Student(firstName, subject) {
    Person.call(this, firstName);
    this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
}

//Usage
const student1 = new Student("Omar", "Math");
student1.sayHello();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);
