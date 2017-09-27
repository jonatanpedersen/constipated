# constipated
Are you fed up with your snarky co-worker constantly changing all your precious vars to consts, preventing you from reassigning variables in places no one would ever suspect? Then constipated can help you take back control and relieve all those poor locked up variables. Constipated brings freedom to all variables, no matter where they are declared, or what values they hold.

Make re-assigments great again!

[![Build Status](https://travis-ci.org/jonatanpedersen/constipated.svg?branch=master)](https://travis-ci.org/jonatanpedersen/constipated)
[![Build Status](https://img.shields.io/npm/v/constipated.svg)](https://www.npmjs.com/package/constipated)

## Installation

```bash
$ npm i constipated --save
```

## Usage

### relieveString(str) : string
``` javascript
var {relieveString} = require('constipated');
var relievedString = relieveString('const constipated = true');
```

### relieveFile(file) : void
``` javascript
var {relieveFile} = require('constipated');
relieveFile('src/main.js');
```

### relieveGlob(pattern) : void
``` javascript
var {relieveGlob} = require('constipated');
relieveGlob('src/**/*.js');
```

## License
The MIT License

Copyright (c) 2017 [Jonatan Pedersen](https://www.jonatanpedersen.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.