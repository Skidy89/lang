@skidy89/lang - Node Native Language Bindings (N-API)
====================================================

This package provides a small native addon and TypeScript types for working
with the `lang` native module built with Rust + N-API.

----------------------------------------------------
Install
----------------------------------------------------
Install from npm:

npm install @skidy89/lang

----------------------------------------------------
Usage (Node.js)
----------------------------------------------------
const lang = require('@skidy89/lang'); 
const cli = new lang.SSL("./languages"); // Change to your directory (must contain .lang files)
const langData = await cli.load();

// Example
console.log(langData["es"]["hello-world"]);

- "es" is the filename of the .lang file
- "hello-world" is the key

----------------------------------------------------
Example lang file
----------------------------------------------------
# Use "#" for comments
hello-world = "hello world!!"

----------------------------------------------------
Usage (TypeScript)
----------------------------------------------------
import { SSL } from '@skidy89/lang';
const cli = new SSL("./languages");
const langData = await cli.load();

----------------------------------------------------
Build
----------------------------------------------------
This project builds a native N-API addon. Build locally with:

npm run build

This runs `napi build --release` (from @napi-rs/cli) and then `tsc` to emit type definitions.

----------------------------------------------------
Publish
----------------------------------------------------
Before publishing, bump the version in package.json and ensure `lang.node` and
the generated `.d.ts` files are present.

Validate package contents locally:

npm pack

Publish to npm (public scoped package):

npm publish --access public

If using an unscoped name, update the `name` field in package.json accordingly.
For scoped public packages, ensure `publishConfig.access` is set to `public`.

----------------------------------------------------
Files included in the package
----------------------------------------------------
- lang.node (native addon)
- index.js (JS wrapper)
- index.d.ts (TypeScript declarations)
- lib/ (supporting JS/TS files)

----------------------------------------------------
License
----------------------------------------------------
MIT

----------------------------------------------------
Notes
----------------------------------------------------
- Simple language loader (sll.js)
- This project is a WIP (work in progress)
- Please be patient while methods are updated
