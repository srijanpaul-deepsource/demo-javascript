// JS-0233
const symbol = Symbol()
const mysymbols = Symbol(Symbol([Symbol()], 1, 2, 3, Symbol()));

const o = { x: 1 }
const p = { y: 2 }

// Commnet comment comment
// JS-0084
o.__proto__ = p
console.log(o.__proto__, p.__proto__)
console.log(Object.getPrototypeOf(o.__proto__))
console.log(Object.setPrototypeOf(p.__proto__, p))
o["__proto__"] = p["__proto__"]
o["__proto__"] = p["__proto__"].__proto__
o.__proto__ = p.__proto__
