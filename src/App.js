import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <SayMyName nome="Ivan" />
      <Pessoa nome="Ivan" idade="26" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
