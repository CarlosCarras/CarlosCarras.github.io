import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import NavBar from "./components/Navbar/Navbar";
import Resume from "./views/Resume/Resume";
import ContactMe from "./views/ContactMe/ContactMe";
import Gallery from "./views/Gallery/Gallery";
import HowItsMade from "./views/HowItsMade/HowItsMade";
import FAQ from "./views/FAQ/FAQ";
import Projects from "./views/Projects/Projects";
import MountingBracket from "./views/Projects/ProjectListings/MountingBracket";
import SwampHacksWebsite from "./views/Projects/ProjectListings/SwampHacksWebsite";
import PCBuild from "./views/Projects/ProjectListings/PCBuild";
import MAX from "./views/Projects/ProjectListings/MAX";
import Bioprinter from "./views/Projects/ProjectListings/Bioprinter";
import MIPS from "./views/Projects/ProjectListings/MIPS";
import FourYearPlan from "./views/FourYearPlan/FourYearPlan";
import ASB2023 from "./views/Conferences/ASB2023/ASB2023";
import Footer from "./components/Footer/Footer";
import './assets/Theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/"><Redirect to="/Home" /></Route>
        <Route exact path="/Resume" component={Resume}></Route>
        <Route exact path="/ContactMe" component={ContactMe}></Route>
        <Route exact path="/Gallery" component={Gallery}></Route>
        <Route exact path="/HowItsMade" component={HowItsMade}></Route>
        <Route exact path="/Projects" component={Projects}></Route>
        <Route exact path="/Q&A" component={FAQ}></Route>
        <Route exact path="/Projects/PCBuild" component={PCBuild}></Route>
        <Route exact path="/Projects/MountingBracket" component={MountingBracket}></Route>
        <Route exact path="/Projects/SwampHacksWebsite" component={SwampHacksWebsite}></Route>
        <Route exact path="/Projects/Bioprinter" component={Bioprinter}></Route>
        <Route exact path="/Projects/MIPS" component={MIPS}></Route>
        <Route exact path="/Projects/MAX" component={MAX}></Route>
        <Route exact path="/FourYearPlan" component={FourYearPlan}></Route>
        <Route exact path="/ASB2023" component={ASB2023}></Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
