### blog-2.md

```md
# How Generics Build Reusable and Strictly Typed Code in TypeScript

## Introduction

Generics are one of the most powerful features in TypeScript. They allow developers to create reusable functions, classes, and components while maintaining strong type safety.

Without generics, developers often duplicate code for different data types. Generics solve this problem by allowing one flexible implementation to work with multiple types.

---

## What Are Generics?

Generics allow a function or class to work with different data types while preserving type information.

Example syntax:

```typescript
function identity<T>(value: T): T {
  return value;
}
````

Here:

* `T` represents a generic type
* The function accepts a value of type `T`
* It also returns the same type `T`

---

## Why Generics Are Important

Generics help developers:

* Reuse code
* Reduce duplication
* Maintain strict typing
* Improve readability
* Prevent runtime errors

---

## Example Without Generics

Without generics, separate functions are needed for each type.

```typescript
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

This approach creates unnecessary duplication.

---

## Example With Generics

Using generics, one function can handle multiple types.

```typescript
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);
```

The same function works for both strings and numbers while preserving type safety.

---

## Generics With Arrays

Generics are very useful for arrays.

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["A", "B", "C"]);
```

The return type automatically matches the array type.

---

## Generics in Interfaces

Generics can also be used in interfaces.

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Usage:

```typescript
const userResponse: ApiResponse<string> = {
  success: true,
  data: "John",
};
```

This makes interfaces flexible and reusable.

---

## Generics in Classes

Generics can improve reusable class design.

```typescript
class Storage<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}
```

Usage:

```typescript
const numberStorage = new Storage<number>(100);
const stringStorage = new Storage<string>("TypeScript");
```

---

## Type Safety Benefits

Generics ensure that data types remain consistent.

Example:

```typescript
function merge<T>(value: T): T {
  return value;
}

merge<string>("Hello");
```

If incorrect types are used, TypeScript immediately shows errors during development.

This reduces bugs and improves reliability.

---

## Conclusion

Generics make TypeScript applications more scalable, reusable, and maintainable. They eliminate repetitive code while preserving strict type checking.

By using generics, developers can create flexible functions, interfaces, and classes that adapt to different data structures without sacrificing safety. This is why generics are considered a core feature of professional TypeScript development.

````

---