# lemoji

Emoticons made using a series of symbols.

## What is this?

This package contains emoji made with unicode characters.You can easliy use text (e.g. `:angry`) to type the emoji maybe you want (`ꐦ≖ ≖`).

## About lemoji

* it has associated tags, description, and category.
* it is built entirely with typescript.
* And this package is safe.

## who needs this bag?

* If you want to use emoji on an operating system that doesn't support graphics.
* Or you like them very much.  
* Or hope to use these emoji in your project.

## Install

This package supprts `esm` and `commonjs`. You can use `npm`, `yarn`, or `pnpm` to install this package.

>use npm

```sh
npm install lemoji
```

>use yarn

```sh
yarn add lemoji
```

> use pnpm

```sh
pnpm add lemoji
```

## How to use

>This package exports the following identifiers: `lemoji`, `nameToEmoji`, `emojiToName`.

### If you use commonjs, you can use `require` to import the identifiers

   ```js
   const { nameToEmoji } = require("lemoji")
   ```

### If you use esm, you can use `import` to import identifiers

   ```js
   import { nameToEmoji } from "lemoji"
   ```

### API

>`lemoji`: it is a objects (`Ilemoji[]`).Every `lemoji` has the following fields:

   ```ts
   {
     name: string;
     emoji: string;
     tags: string[];
     description: string;
     category: string;
   }
   ```

* Example

   ```js
   import {lemoji} from 'lemoji'

   console.log(lemoji)
   ```

* fields:

  ```js
  [
   {
     "emoji": "(·•᷄ࡇ•᷅ ）",
     "names": ["tangled"],
     "tags": ["frustrated","unhappy"],
     "description": "tangled face",
     "category": "Smileys & Emotion"
   },
   {
     "emoji": "(◍•ᴗ•◍)",
     "names": ["smiley"],
     "tags": ["happy","joy","haha"],
     "description": "grinning face",
     "category": "Smileys & Emotion"
   },
   //...
  ]
  ```

>`nameToEmoji`: it is a objects (`InameToEmoji`).Every `nameToEmoji` has the following fields:

   ```ts
   {
     [name: string]: string;
   }
   ```

* use `esm`

   ```js
   const { nameToEmoji } = require("lemoji")

   console.log(nameToEmoji.angry)//ꐦ≖ ≖
   console.log(nameToEmoji.happy)//(•̀ᴗ• )
   ```

* use `commonjs`

   ```js
  const { nameToEmoji } = require("lemoji")

  console.log(nameToEmoji.angry)//ꐦ≖ ≖
  console.log(nameToEmoji.happy)//(•̀ᴗ• )
   ```

>`emojiToName`: it is a objects (`IemojiToName`).Every `emojiToName` has the following fields:

   ```ts
   {
     [emoji: string]: string;
   }
   ```

* use `esm`:

   ```js
   import { emojiToName } from "lemoji"

   console.log(emojiToName["(*^_^*)"])//smile
   console.log(emojiToName["(\xB7\u2022\u1DC4\u0847\u2022\u1DC5 \uFF09"])//tangled
   ```

* use `commonjs`:

   ```js
   const { emojiToName } = require("lemoji")

   console.log(emojiToName["ꐦ≖ ≖"])//angry
   ```

## License

[MIT](LICENSE)
