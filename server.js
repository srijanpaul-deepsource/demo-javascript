import unknownVar from "unknown-module";

const vm = require("vm");
module.exports = { foo: 1 };
console.log("helddooo");

module.exports = { bar: 2 };

const app = require("express")();
app.get("/foo", (req, res) => {
  vm.run(req.params.foo);
});

foo();
bar?.foo();
bar?.foo;
bar.foo;

print(`some ${unknownVar}`);

const stringVar = "hello";
print(`some ${stringVar}`);

const numVar = 12;
print(`some ${numVar}`);

const boolVar = true;
print(`some ${boolVar}`);

const fubar = { not: "a string" };
print(`some ${fubar}`);
