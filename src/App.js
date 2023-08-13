import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import bimage from './assets/sdDGgeneric.png';

function App() {
  return (
    <div className="App">
      <img className='image' src={bimage} alt="My image profile"/>
      <Nav/>     
    </div>
  );
}

export default App;
