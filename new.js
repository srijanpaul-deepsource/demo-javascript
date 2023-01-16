import x from "./does-not-exist";

const buf = new Buffer("fubar");

const r = new RegExp("[a-Z][A-z0-9]");
const r2 = /[A-zF-a0-9]+/g;

const object = { a: 1, b: 2 };
let { a, b } = object;
a += 12;

const anotherObject = { c: 2, d: 4 };
let { c, d } = anotherObject; // JS-0242

x(b)
export { x, buf, r, r2, a, b, c };
