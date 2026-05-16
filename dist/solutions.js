"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//problem-01
function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    });
    return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
//problem-02
function reverseString(input) {
    return input.split("").reverse().join("");
}
console.log(reverseString("typescript"));
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    return "Number";
}
console.log(checkType("Hello"));
console.log(checkType(42));
//problem-04
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));
//problem-06
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
//problem-07
function getIntersection(arr1, arr2) {
    const commonNumbers = [];
    arr1.forEach((num) => {
        if (arr2.includes(num)) {
            commonNumbers.push(num);
        }
    });
    return commonNumbers;
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
//# sourceMappingURL=solutions.js.map