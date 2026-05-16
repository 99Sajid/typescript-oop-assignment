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

