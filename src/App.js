import React from 'react';
import HomeApp from "./Components/App/home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import TajMobile from './Components/App/TajMobile';
import Services from "./Components/App/Services";
import ContactUs from "./Components/App/ContactUs";
import TivShoppers from './Components/App/TiveShoppers';
import PclEnergy from './Components/App/PclEnergy';
import Siic from './Components/App/Siic';
import Resulta from "./Components/App/Resulta";
import Bowen from './Components/App/EasyBowen';


function App() {
  const hist = useHistory()
  return (
    <Router hist={hist}>
      <Switch>
        <Route exact path="/" component={HomeApp} />
        <Route exact path="/about-me" component={TajMobile} />
        <Route exact path="/resume" component={TivShoppers} />
        <Route exact path="/contact-me" component={PclEnergy} />
        <Route exact path="/blog" component={Siic} />
        <Route exact path="/projects" component={Bowen} />
      </Switch>
    </Router>
  );
}
    
 
export default App;
