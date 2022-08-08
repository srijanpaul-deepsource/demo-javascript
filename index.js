// JS-0233
const symbol = new Symbol()
const mysymbols = new Symbol(new Symbol([new Symbol()], (1, 2, 3, new Symbol())));

const o = { x: 1 }
const p = { y: 2 }

// Commnet comment comment
// JS-0084
Object.setPrototypeOf(o, p)
console.log(Object.getPrototypeOf(o), Object.getPrototypeOf(p))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(o)))
console.log(Object.setPrototypeOf(Object.getPrototypeOf(p), p))
Object.setPrototypeOf(o, Object.getPrototypeOf(p))
Object.setPrototypeOf(o, Object.getPrototypeOf(Object.getPrototypeOf(p)))
Object.setPrototypeOf(o, Object.getPrototypeOf(p))
