import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
