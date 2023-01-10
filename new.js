import x from './does-not-exist'

const buf = new Buffer("fubar")

const r = new RegExp('[a-Z][A-z0-9]')
const r2 = /[A-zF-a0-9]+/g

export { x, buf, r, r2 }
