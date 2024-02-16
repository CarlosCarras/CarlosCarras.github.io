import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Resume from './views/Resume/Resume';
import Footer from './components/Footer/Footer';
import NotFound from './views/NotFound/NotFound';
import Gallery from './views/Gallery/Gallery';
import Contact from './views/Contact/Contact';
import Coursework from './views/Coursework/Coursework';
import Extras from './views/Extras/Extras';
import GTAudition from './views/Extras/views/GTAudition/GTAudition';
import ASB2023 from './views/Extras/views/ASB2023/ASB2023';
import Projects from './views/Projects/Projects';
import ProjectEntryTemplate from './views/Projects/ProjectEntryTemplate/ProjectEntryTemplate';
import Max from './views/Projects/ProjectEntries/Max';
import PC1 from './views/Projects/ProjectEntries/PC1';
import Swamphacks from './views/Projects/ProjectEntries/Swamphacks';
import MoutingBracket from './views/Projects/ProjectEntries/MountingBracket';
import Bioprinter from './views/Projects/ProjectEntries/Bioprinter';
import PumpController from './views/Projects/ProjectEntries/PumpController';

function App() {
    const [isDarkMode, setDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem('darkMode')) || false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    return (
        <Router>
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Navbar darkmode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
                <Routes>
                    <Route exact path="/" element={<Home darkmode={isDarkMode}/>} />   
                    <Route exact path="/resume" element={<Resume/>} />  
                    <Route exact path="/projects" element={<Projects/>} />  
                    <Route exact path="/coursework" element={<Coursework/>} /> 
                    <Route exact path="/contact" element={<Contact/>} /> 
                    <Route exact path="/gallery" element={<Gallery/>} /> 
                    <Route exact path="/extras" element={<Extras/>} />
                    <Route exact path="/extras/gtaudition" element={<GTAudition/>} />  
                    <Route exact path="/extras/asb2023" element={<ASB2023/>} />  
                    <Route exact path={Max.href} element={<ProjectEntryTemplate data={Max}/>}/>  
                    <Route exact path={PC1.href} element={<ProjectEntryTemplate data={PC1}/>}/>  
                    <Route exact path={Swamphacks.href} element={<ProjectEntryTemplate data={Swamphacks}/>}/> 
                    <Route exact path={MoutingBracket.href} element={<ProjectEntryTemplate data={MoutingBracket}/>}/>  
                    <Route exact path={Bioprinter.href} element={<ProjectEntryTemplate data={Bioprinter}/>}/>  
                    <Route exact path={PumpController.href} element={<ProjectEntryTemplate data={PumpController}/>}/>
                    {/* Add other routes here */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
  );
}

export default App;
