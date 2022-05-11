import './App.css';
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title name="Peter" type="bold" />
      <Title name="Steven" type="normal" />
      <Title name="Tony" />
    </div>
  );
}

export default App;
