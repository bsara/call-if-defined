# call-if-defined [![NPM Package](https://img.shields.io/npm/v/call-if-defined.svg?style=flat-square)][npm]

![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)

> A micro-library of functions that call a given function if it is defined.
>
> This library was created for both convenience purposes and for the cleaner code that
> can be produced by using its provided functions.

> **NOTE:** Compatible with ES4+ browsers, AMD, CommonJS, ES6 Imports, and HTML
> script references.

[Changelog](https://github.com/bsara/call-if-defined/blob/master/CHANGELOG.md)



## Install

```bash
$ npm i --save call-if-defined
```


## Usage

```js
import { callIfDefined, callIfDefinedNull } from 'call-if-defined';


function myFunc(valueToPrint, valueToReturn) {
  console.log(valueToPrint);

  return valueToReturn;
}


callIfDefined(myFunc, "Fish fingers and custard", 42); // Prints "Fish fingers and custard" & returns 42
callIfDefined(myFunc, "Fish fingers and custard", 42); // Prints nothing and returns `undefined`

callIfDefinedNull(myFunc, "Fish fingers and custard", 42); / Prints "Fish fingers and custard" & returns 42
callIfDefinedNull(myFunc, "Fish fingers and custard", 42); // Prints nothing and returns `null`

```


## API

### callIfDefined(func, *[...funcParams]*)

Returns the result of calling `func` with the given `funcParams`, if `func` is
defined; otherwise, returns `undefined`.

- **func** `*`

  The function to be called, if it is defined.

- **...funcParams** `*`

  The paramters to pass to `func`, if `func` is defined.


<br/>


### callIfDefinedNull(func, *[...funcParams]*)

Returns the result of calling `func` with the given `funcParams`, if `func` is
defined; otherwise, returns `null`.

- **func** `*`

  The function to be called, if it is defined.

- **...funcParams** `*`

  The paramters to pass to `func`, if `func` is defined.


<br/>
<br/>


# License

ISC License (ISC)

Copyright (c) 2018, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[license]: https://github.com/bsara/call-if-defined/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/call-if-defined                "NPM Package: call-if-defined"
