# partial-application

Enables partial application without affecting the receiver (ie. `this`). 

File size: **592 bytes**.<br/>
Supported platforms: **server and browser**.<br/>
Supported language versions: **ES3 and above**.

Also includes a function that will return a function with an arity of one, that can be useful when working with frameworks like Grunt that look at the arity of functions.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install partial-application```

## Example

```javascript
var partial = require('partial-application').partial;

function foo() {
  console.log(arguments, this);
}

// Bare invocation.
partial(foo, 0)(1, 2); // { '0': 0, '1': 1, '2': 2 } { /* the global object  */ }

// Method invocation.
var o = {};
o.m = partial(foo, 0);
o.m(1, 2); // { '0': 0, '1': 1, '2': 2 } { m: [Function] }
```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.