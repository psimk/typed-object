# typed-object

Stricter (exact) typings for your `Object.*` methods.

## Install

```bash
yarn add @psimk/typed-object
# or
npm i @psimk/typed-object
```

## Usage

There are two ways to use the package, importing an "aliased" function with the stricter types already applied or importing just the type and manually casting the built-in methods. Below are examples using both approaches. There is no "best" approach and should be chosen according to your projects standards and requirements.

- **ObjectKeys**

```ts
import { typedObjectKeys } from "@psimk/typed-object";
import type { ObjectKeys } from "@psimk/typed-object";

const foo = { a: 1, b: 2, c: 3 } as const;

Object.keys(foo); // string[]

typedObjectKeys(foo); // Array<"a" | "b" | "c">
// OR
(Object.keys as ObjectKeys)(foo); // Array<"a" | "b" | "c">
```

- **ObjectValues**

```ts
import { typedObjectValues } from "@psimk/typed-object";
import type { ObjectValues } from "@psimk/typed-object";

const foo = { a: 1, b: 2, c: 3 } as const;

Object.values(foo); // number[]

typedObjectValues(foo); // Array<1 | 2 | 3>
// OR
(Object.keys as ObjectValues)(foo); // Array<1 | 2 | 3>
```

- **ObjectEntries**

```ts
import { typedObjectEntries } from "@psimk/typed-object";
import type { ObjectEntries } from "@psimk/typed-object";

const foo = { a: 1, b: 2, c: 3 } as const;

Object.entries(foo); // number[]

typedObjectEntries(foo); // Array<["a", 1] | ["b", 2] | ["c", 3]>
// OR
(Object.keys as ObjectEntries)(foo); // Array<["a", 1] | ["b", 2] | ["c", 3]>
```

## Why?

At first it might seem odd, that TypeScript doesn't provide these "strict" (exact) typings out of the box. However, this is made by design; In most general cases, your JavaScript objects can contain dynamic keys (e.g. unique identifiers) and/or derive from another object. Because TypeScript is a build time tool and doesn't validate your runtime types, there is no way for it to know what keys an object could contain.

Moreover, for the above reason, these custom types and predefined functions, **should not** be used as a complete replacement for the existing methods and their types. This package is made for those specific use cases where you know ahead of time what keys and/or values you may have.

reference: https://github.com/microsoft/TypeScript/pull/12253
