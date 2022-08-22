import b from './b'

const foo = {}
const bar = foo?.foobar

const cp = require('child_process')
const { exec } = require('child_process')

const proc = 'foobar'
cp.exec(proc) // unsafe

cp.exec('ls') // safe

cp.execFile(proc) // unsafe

exec('fubar') // safe
exec('./' + proc) // unsafe

export async function f (x) {
  return async function g () {
    return x + 2
  }
}

export async function f2 (xs) {
  const ys = []
  for await (const x of xs) {
    ys.push(x)
  }
  return ys
}

export default 2
