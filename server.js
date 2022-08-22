const vm = require('vm')
module.exports = { foo: 1 }
console.log('helddooo')

module.exports = { bar: 2 }

const app = require('express')()
app.get('/foo', (req, res) => {
  vm.run(req.params.foo)
})

const cp = require('child_process')
const { exec } = require('child_process')

const proc = 'foobar'
cp.exec(proc) // unsafe

cp.exec('ls') // safe

cp.execFile(proc) // unsafe

exec('fubar') // safe
exec('./' + proc) // unsafe
