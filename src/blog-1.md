# `blog-1.md`

````md
# Why `unknown` is Safer Than `any` in TypeScript

## Introduction

TypeScript is designed to make JavaScript applications safer and easier to maintain. Two commonly used types for handling unpredictable data are `any` and `unknown`. Although they may seem similar at first, they behave very differently.

The `any` type disables TypeScript’s type checking, while `unknown` forces developers to verify data before using it. This is why `any` is often called a “type safety hole.”

---

## What is `any`?

The `any` type allows a variable to store any kind of value. Once a variable becomes `any`, TypeScript stops checking for errors.

```typescript
let value: any = "Hello";

value.toUpperCase();
value.toFixed(2);
value.nonExistingMethod();
````

Even though some methods are invalid for strings, TypeScript will not show any errors. Problems will only appear during runtime.

This makes `any` dangerous in large projects because it removes the benefits of static typing.

---

## Why is `any` Called a Type Safety Hole?

Type safety means preventing invalid operations before the code runs.

Using `any` breaks this protection because:

* TypeScript stops checking the variable
* Invalid methods can be called
* Runtime errors become more common
* Bugs become harder to detect

Example:

```typescript
function processData(data: any) {
  return data.toUpperCase();
}

processData(42);
```

This code compiles successfully but crashes at runtime because numbers do not have the `toUpperCase()` method.

---

## What is `unknown`?

The `unknown` type is a safer alternative. It can also hold any value, but TypeScript requires type checking before usage.

```typescript
let value: unknown = "TypeScript";
```

You cannot directly use string methods unless the type is verified.

```typescript
value.toUpperCase(); // Error
```

This prevents accidental misuse.

---

## Type Narrowing in TypeScript

Type narrowing is the process of checking a variable’s type before using it.

Example:

```typescript
function printValue(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return "Not a string";
}
```

Here, TypeScript narrows the type from `unknown` to `string` inside the `if` block.

Common narrowing techniques include:

* `typeof`
* `instanceof`
* `in` operator
* Custom type guards

---

## Benefits of Using `unknown`

### Better Safety

It prevents unsafe operations.

### Fewer Runtime Errors

Developers must validate data before using it.

### Cleaner Code

The code becomes easier to understand and maintain.

### Ideal for External Data

Useful when handling:

* API responses
* User input
* JSON data
* Third-party libraries

---

## Conclusion

Although `any` and `unknown` both accept all data types, they serve very different purposes. The `any` type removes TypeScript’s protection and can introduce hidden bugs. On the other hand, `unknown` enforces validation and keeps applications safer.

For modern TypeScript development, `unknown` is the preferred choice whenever the data type is uncertain.

````

---