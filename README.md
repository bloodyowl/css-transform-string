# css-transform-string

[![Build Status](https://travis-ci.org/bloodyowl/css-transform-string.svg?branch=1.0.0)](https://travis-ci.org/bloodyowl/css-transform-string)

[![browser support](https://ci.testling.com/bloodyowl/css-transform-string.png)](https://ci.testling.com/bloodyowl/css-transform-string)

a small helper to ease the construction of the css `transform` property value

## install

```sh
$ npm install bloody-csstransformstring
```

## require

```javascript
var CSSTransformString = require("bloody-csstransformstring")
```

## api

### CSSTransformString(object[, object2…]) > string

builds a string for the CSS `transform` property.

if `object` is `null`, returns `"none"`.
`object` can be :

- a string of CSS transforms (e.g. `scale(2) translateX(10%)`)
- an object of CSS transforms (e.g. `{scale:2, translateX:"10px", translate: ["50%", "50%"]}`)
- `null`, in which case the argument is ignored

## example

```javascript
var transformString = CSSTransformString(
  {scale : 2, rotate : "5deg"},
  {translateY : "-15px"},
  {translate : ["-50%", "-50%"]}
)
// => "scale(2) rotate(5deg) translateY(-15px) translate(-50%,-50%)"
```
