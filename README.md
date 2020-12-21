# typed-object

Stricter (exact) typings for your `Object.*` methods.

## Install

```bash
yarn add @psimk/typed-object
# or
npm i @psimk/typed-object
```

## Usage

There are two ways to use the package:

### functions

Each method has a corresponding function, with the stricter typings already applied.

```ts
import { typedObjectKeys } from "@psimk/typed-object";

const foo = { a: 1, b: 2, c: 4 };

Object.keys(foo); // string[]

typedObjectKeys(foo); // Array<"a" | "b" | "c">
```

### types

Instead of the above, you can import the types on their own.

```ts
import type { TypedObjectKeys } from "@psimk/typed-object";

const foo = { a: 1, b: 2, c: 4 };

Object.keys(foo); // string[]

(Object.keys as TypedObjectKeys)(foo); // Array<"a" | "b" | "c">
```

## Why?

At first it might seem odd, that TypeScript doesn't provide these "strict" (exact) typings out of the box. However, this is made by design; In most general cases, your JavaScript objects can contain dynamic keys (e.g. unique identifiers) and/or derive from another object. Because TypeScript is a build time tool and doesn't validate your runtime types, there is no way for it to know what keys an object could contain.

Moreover, for the above reason, these custom types and predefined functions, **should not** be used as a complete replacement for the existing methods and their types. This package is made for those specific use cases where you know ahead of time what keys and/or values you may have.

reference: https://github.com/microsoft/TypeScript/pull/12253
