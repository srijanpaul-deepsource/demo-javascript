import cp from "child_process"
import { execFile } from 'child_process'
// JS-0233
const symbol = new Symbol()
const mysymbols = new Symbol(new Symbol([new Symbol()], (1, 2, 3, new Symbol())));

const o = { x: 1 }
const p = { y: 2 }

// Commnet comment comment
// JS-0084
o.__proto__ = p
o["__proto__"] = p["__proto__"]
o["__proto__"] = p["__proto__"].__proto__
o.__proto__ = p.__proto__

console.log(o.__proto__, p.__proto__)
console.log(Object.getPrototypeOf(o.__proto__))
console.log(Object.setPrototypeOf(p.__proto__, p))

class F {
  constructor() {
    super(1)
  }
}

new F()

const { exec } = require('cp')

const bar = 'bar'
cp.exec('foo' + bar)
const xs = "..." + "something"
cp.cxecFile(xs)
exec('foo' + bar)
execFile('foo' + bar)

const helmet = require('helmet')
helmet({
  contentSecurityPolicy: {
    directives: {
      frameAncestors: 'none'
    }
  }
})