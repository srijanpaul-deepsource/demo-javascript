import logo from "./logo.svg";
import "./App.css";

const onClick1 = (e) => console.log(e)

function App() {
  const onClick2 = (e) => console.log(e)
  return (
    <div>
      <button onClick={onClick1}/>
      <button onClick={onClick2}/>
      <button onClick={(e) => console.log(e)}/>
    </div>
  );
}

class YourComponent extends React.Component {
  render() {
    let x = <Foo a a />
    let iframe = <iframe src="" frameborder="0"></iframe>

    return <>hello</>
  }
}

class Foo extends Component {
  getSnapshotBeforeUpdate(prevProps, nextProps){}
  render() {
    return <div> single quote: '</div>
  }
}

const f = new Function('a', 'b', 'return a + b')

export default App;
