# TypeQuery &middot; [![Build Status](https://github.com/mistlog/type-query/workflows/build/badge.svg)](https://github.com/mistlog/type-query/workflows/build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/mistlog/type-query/badge.svg)](https://coveralls.io/github/mistlog/type-query)

TypeQuery is a lib of [typetype](https://github.com/mistlog/typetype/), used to create complex typescript type using js, in jQuery style(jQuery means fashion here, :)).

* introducation: [Type Query: jQuery Style Type Manipulation](https://mistlog.medium.com/type-query-jquery-style-type-manipulation-497ce26d93f)
* quick start: [typetype template](https://github.com/mistlog/typetype-template)


## Usage

```bash
> npm i @mistlog/type-query
```

### API

> example: [typetype-template/src/type-query-basic.ts](https://github.com/mistlog/typetype-template/blob/main/src/type-query-basic.ts)

```ts
import { transcribe } from "@mistlog/type-query";

const filePath = "tuple-to-object.type";
const input = `
    type tuple = ["tesla", "model 3", "model X", "model Y"]

    type result = \`\`\` "use js"
    return $.use("tuple")
        .tupleToObject()
        .omit(key => !key.startsWith("model"))
        .type();
    \`\`\`
`;
const output = transcribe(filePath, input);
console.log(output.code);
```

output: 

```ts
type tuple = ["tesla", "model 3", "model X", "model Y"];
type result = {
  "model 3": "model 3";
  "model X": "model X";
  "model Y": "model Y";
};
```

## Examples 

- all examples: [type query test assets](https://github.com/mistlog/type-query/tree/main/test/assets)

## License

This project is [MIT licensed](https://github.com/mistlog/type-query/blob/main/LICENSE).
