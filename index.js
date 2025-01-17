import cp from "child_process";
import { execFile } from "child_process";
import helmet, { hsts } from "helmet";
import exp, { static as stat } from "express";
import lib from "libxmljs";

// JS-0233
const symbol = new Symbol();
const mysymbols = new Symbol(
  new Symbol([new Symbol()], (1, 2, 3, new Symbol()))
);

const o = { x: 1 };
const p = { y: 2 };

// Commnet comment comment
// JS-0084
o.__proto__ = p;
o["__proto__"] = p["__proto__"];
o["__proto__"] = p["__proto__"].__proto__;
o.__proto__ = p.__proto__;

console.log(o.__proto__, p.__proto__);
console.log(Object.getPrototypeOf(o.__proto__));
console.log(Object.setPrototypeOf(p.__proto__, p));

class F {
  constructor() {}
}

new F();

const { exec } = require("cp");

const bar = "bar";
cp.exec("foo" + bar);
const xs = "..." + "something";
cp.cxecFile(xs);
exec("foo" + bar);
execFile("foo" + bar);

const app = exp();
app.use(hsts({ includeSubdomains: false })); // 1002 -

const app2 = exp();
app2.use(hsts({ includeSubdomains: false })); // 1002 -

app.use(helmet.dnsPrefetchControl({ allow: true })); // 1003

express.use(stat("public", { dotfiles: "allow" })); // d020 -

const h = require("helmet");
h({ noSniff: false }); // 1001 -

lib.parseXmlString("", { noent: true }); // d022

Buffer([1, 2, 3]); // d026
new Buffer([1, 2, 3]);
new Buffer(10);

helmet.contentSecurityPolicy({ directives: { frameAncestors: "none" } }); // d024
const { contentSecurityPolicy } = require("helmet");
const foo = 1;
contentSecurityPolicy({ directives: { frameAncestors: "none", foo } });

const div = document.getElementById("foo");

fetch("foo").then((res) => (div.innerHTML = res.data.foo));

window.postMessage("secret message for the parent");

// In NodeJS
const password = `${basePassword}-${Math.random() * 1000}`
// In the browser
const formData = getUserInput();
formData.password += Math.random();
