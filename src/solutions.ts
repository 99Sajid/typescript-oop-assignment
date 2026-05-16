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
