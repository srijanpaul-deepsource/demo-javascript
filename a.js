import b from './b'

import cp from 'child_process'

const foo = {}
const bar = foo?.foobar
cp.exec('foo' + bar)
const xs = '...' + 'something'
cp.cxecFile(xs)
