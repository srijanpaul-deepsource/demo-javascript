import logo from './logo.svg'
import './App.css'

const onClick1 = (e) => console.log(e)

function App () {
  const onClick2 = (e) => console.log(e)
  return (
    <div>
      <button onClick={onClick1} />
      <button onClick={onClick2} />
      <button onClick={(e) => console.log(e)} />
    </div>
  )
}

class YourComponent extends React.Component {
  render () {
    const x = <Foo a a />
    const iframe = <iframe src='' frameborder='0' />

    return <>hello</>
  }
}

class Foo extends Component {
  getSnapshotBeforeUpdate (prevProps, nextProps) { }
  render () {
    const x = (
      <div className='absolute bottom-0' w='full'>
        <Footer isDarkMode={darkMode.value} toggleDarkMode={darkMode.toggle} />
      </div>
    )
    return <div> single quote: '</div>
  }
}

const f = new Function('a', 'b', 'return a + b')

export default App
