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

###READMEs
READMEs should follow the format of our [docs](https://github.com/tessel/docs) page.

####Titles
````
#Title
````

####Headers
```
###Header
```
Sub-headers should be one size down from the header above them.

####API Formatting
We will be using a npm module called marktype to format our API documentation. You can use marktype by running `npm install -g marktype` and then running `marktype convert README.md`. If you want to convert your README back to its original format run `marktype restore README.md`.

Pre-marktype, simply write your documentation like this: 
`[#] new port.UART ( [idx[,options]] ) implements DuplexStream`

The syntax does not have to be exact. Marktype will transform anything after [#] into our prefered API syntax.

It should now look like this:

&#x20;<a href="#api-new-port-UART-idx-options-implements-DuplexStream" name="api-new-port-UART-idx-options-implements-DuplexStream">#</a> <i>new</i>&nbsp; port<b>.UART</b> ( [idx[,options]] ) implements DuplexStream  

####Content
Modules should have links to their forums posted at the bottom, directly above the License information.
