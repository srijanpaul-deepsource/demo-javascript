import { format } from 'path'
import * as fs from 'fs' 

class S {}

new S()

function f() {
    "use strict";
    return 1
}

f()


let x = 1;
x = 2;
x = 3;


let y = []
y[1] = 2;
y[1] = 3;
console.log("hey")

y[2] = 3
y[2] = 2

if (y.length < 0) {
    //stuff
}

class Foo {
    bar() { return 123 }
    foo = () => this.bar()
}

const f = new Foo()
f.foo()

const foo = "foo"
const baz = 'baz'
var f = () => 'foo'
var g = () => f
var h = () => g
var i = () => h 
var j = () => i
var k = () => j
var l = () => k
var m = () => l
var n = () => m

console.log("HELLO!");
(() => {
    "use strict";
    return 1;
});

let x = 100;
let y = 20;

let x = do {
    if (x) {
        return 1;
    }
}
