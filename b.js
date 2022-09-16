import a from './a'


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
      return !!!!!x
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

export class BadClass {
  async foo() {
    return 1
  }
}

export const badObject = {
  async f() {
    return 1
  },

  g: async function() {
    return 2
  },

  h: async () => 3
}

if (!!(1 + 2)) {
  // empty
}

export default 2
