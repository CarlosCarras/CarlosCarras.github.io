import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
    const [isDarkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Navbar darkmode={isDarkMode}/>
                <Routes>
                    <Route exact path="/" element={<Home darkmode={isDarkMode}/>} />   
                    <Route exact path="/Resume" element={<Resume/>} />   
                    {/* Add other routes here */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
                <Footer/>
            </div>
        </Router>
  );
}

export default App;
