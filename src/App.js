import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;