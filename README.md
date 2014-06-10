#Technical Machine Style Guide
###Spacing
```js
// Tabs should be two spaces

// One space between name and args in definition
function apple (arg1, arg2) {
  console.log('two space "tabs" with apostrophe string');
}

apple(1, 2); // No spaces between name and args in invocation
```

###Comment styles
```js
// Unless specifically different, comments should have this double slash, space, capital first letter, no period

/*********************************************
The key exception to this rule is at the head
of module examples, where there's a box like
this one describing the example.
*********************************************/

// Functions and methods should be described above the function
function () {...}
```

###Curly braces
```js
// Use them.
if (callback) {
  callback();
} else {
  return;
}
```

###Module Imports
Module imports in any example files should follow this format.
```js
var tessel = require('tessel');
var relaylib = require('../'); // Replace '../' with 'relay-mono' in your own code

var relay = relaylib.use(tessel.port['A']);  
```

###READMEs
READMEs for Tessel should follow the the format outlined below.

####Titles
````
#Title
````

####Headers
```
###Header
```
Sub-headers should be one size down from the header above them.

####Bullets
* If you have
* Multiple pieces of separate information
* You can put them in bullets

###API Formatting
We will be using a npm module called marktype to format our API documentation. You can use marktype by running `npm install -g marktype` and then running `marktype convert README.md`. If you want to convert your README back to its original format run `marktype restore README.md`.

Pre-marktype, simply write your documentation like this:
```  
[#] new port.UART([idx[,options]])  
implements DuplexStream
```

The syntax does not have to be exact. Marktype will transform anything after [#] into our prefered API syntax.

It should now look like this:  
&#x20;<a href="#api-new-port-UART-idx-options-implements-DuplexStream" name="api-new-port-UART-idx-options-implements-DuplexStream">#</a> <i>new</i>&nbsp; port<b>.UART</b> ( [idx[,options]] )  
implements DuplexStream  

###References to Datasheets
Should be indented in a text block and linked.
>According to section 5.1.3 of the [datasheet](http://www.silabs.com/Support%20Documents/TechnicalDocs/Si7005.pdf )
    Fast mode reduces the total power consumed during a conversion or the average power consumed by the Si7005 when making periodic conversions. It also reduces the resolution of the measurements.

###Documentation Standards
Any official technical machine documentation should include the files specified in the Templates folder of this repository. 

###Content
Modules should follow the content format outlined in the `module_RM_template.md` file in this repo.

###Licensing Comments
This header goes at the top of all source files:
```.js
// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.
```

And anything we're making public domain (example code for modules) gets this one:
```.js
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/
