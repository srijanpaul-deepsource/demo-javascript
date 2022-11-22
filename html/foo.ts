// (function deleteComment() {
//   document.querySelector(".actionBar-action--delete").click();
//   setTimeout(() => {
//     document.querySelector(".button--icon--delete").click();
//   }, 500)
// })();

import { Inject, Fubar, Fu } from "foo";

// doc
export default class Foo {
  // doc
  constructor(@Inject(Fubar) private readonly fu: Fu) {
    this.f()
  }

  // doc
  f() {
    return this.fu;
  }
}
