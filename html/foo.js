// (function deleteComment() {
//   document.querySelector(".actionBar-action--delete").click();
//   setTimeout(() => {
//     document.querySelector(".button--icon--delete").click();
//   }, 500)
// })();

import x from "x";

/**
 * @param x something
 * @returns the same thing
 */
function f(x_) {
  return x_;
}

f(`${x}`);
f(`${x.toString()}`);
f(`fubar ${123}`);
f(`fubar ${false}`);
f(`fubar ${{ x: 1 }}`);
f(`fubar ${{ x: 1 }.toString()}`);

const one = 1;
one = 2; // no-const-assign
one = 3; // no-const-assign

function g() {
  return 1;
}

const fs = require("fs");
fs.chmod("foo", "0o777");
