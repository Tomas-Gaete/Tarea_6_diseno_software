//import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './contacto.css';
import Objetivos from "./Components/objetivos"
import Contacto from "./Components/contacto";
import Nav from "./Components/navbar";
import Hero from "./Components/Hero";
import Box from "./Components/box";
import Foot from "./Components/foot";
//import Calculator from "./Components/calculadora";
import Title from "./Components/Titulo";
/*function Expml(){
  return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  )
}*/
function App() {
  return (
    
    <div className="App">
    <Title/>
    <Nav/>
    <Hero/>
    <Box/>
    <Objetivos/>
    <Contacto/>
    <Foot/>
    </div>
  );
}
export default App;
