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
    return <>hello</>
  }
}

export default App;
