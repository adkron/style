Technical Machine Style Guide
=====
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
