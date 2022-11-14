const vm = require('vm')
module.exports = { foo: 1 }
console.log("helddooo")

module.exports = { bar: 2 }

const app = require('express')()
app.get('/foo', (req, res) => {
  vm.run(req.params.foo);
});

foo()
bar?.foo()
bar?.foo
bar.foo
