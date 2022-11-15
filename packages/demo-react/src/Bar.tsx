import Foo from './Foo'

const d = <div autoFocus={false} />
const accessKey =  <div accessKey="h" />
const lang = <html lang="foo" />

if (Meteor.isCordova) {
  Template.foo.created = function () {}
}


export default Foo