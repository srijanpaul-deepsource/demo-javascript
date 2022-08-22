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

const cp = require("child_process")
const { exec } = require("child_process")

const proc = "foobar"
cp.exec(proc) // unsafe

cp.exec("ls") // safe

cp.execFile(proc) // unsafe

exec("fubar") // safe
exec("./" + proc)  // unsafe

export async function f(x) {
  return async function g() {
    return async function h() {
      return x
    }
  }
}

export async function f2(xs) {
  const ys = []
  for await (const x of xs) {
    ys.push(x)
  }
  return ys
}


export default 2
