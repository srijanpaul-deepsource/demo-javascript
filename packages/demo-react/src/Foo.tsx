import Bar from './Not-Bar'


export default function Foo() {
  return <div>Foo</div>
}

function Baz(props) {
  const x  = <Hello className='foo' />
  return <div {...props}></div>
}
