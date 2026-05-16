//problem-01
function filterEvenNumbers(numbers: number[]): number[] {
    const evenNumbers: number[] = [];

    numbers.forEach((num: number) => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    });

    return evenNumbers;
}

//problem-02
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}


//problem-03
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}

//problem-04
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };


//problem-05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));

//problem-06
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");


