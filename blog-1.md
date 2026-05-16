# Why unknown is Safer than any in TypeScript

## Introduction

In TypeScript, sometimes we do not know what type of data will come. For this reason TypeScript gives us `any` and `unknown`. At first they may look similar, but actually they work differently.

The `any` type removes type checking, but `unknown` keeps the program safer. That is why many developers say `any` is a type safety hole.

---

## What is any?

The `any` type can store any kind of value.

```typescript
let value: any = "Hello";

value = 10;
value = true;
```

The problem is TypeScript will not check for mistakes when using `any`.

```typescript
let data: any = 50;

data.toUpperCase();
```

This code gives an error when running because numbers do not have `toUpperCase()`, but TypeScript will not stop it.

So using `any` too much can create bugs in big projects.

---

## What is unknown?

The `unknown` type is safer.

It can also store different types of values, but before using the value we must check the type first.

```typescript
let value: unknown = "TypeScript";
```

If we try to use methods directly, TypeScript gives an error.

```typescript
value.toUpperCase();
```

So we need type checking first.

---

## Type Narrowing

Type narrowing means checking the type before using the value.

Example:

```typescript
function printValue(value: unknown): string {

    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return "Not a string";
}
```

Here the `typeof` keyword checks if the value is a string. After checking, TypeScript understands the type.

This process is called type narrowing.

---

## Why unknown is Better

Some advantages of `unknown`:

- Safer than `any`
- Reduces runtime errors
- Type checking is required
- Better for large projects

It is useful when working with:
- API data
- User input
- JSON data

---

## Conclusion

Both `any` and `unknown` can store different types of values. But `any` removes safety while `unknown` keeps the program secure by forcing type checks.

For better and safer TypeScript code, using `unknown` is usually the better choice.