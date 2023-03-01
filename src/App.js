import React from 'react';
import HomeApp from "./Components/App/home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import AboutUs from "./Components/App/AboutUs";
import Services from "./Components/App/Services";
import ContactUs from "./Components/App/ContactUs";
import Resulta from "./Components/App/Resulta";


function App() {
  const hist = useHistory()
  return (
    <Router hist={hist}>
      <Switch>
        <Route exact path="/" component={HomeApp} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/resulta" component={Resulta} />
      </Switch>
    </Router>
  );
}
    
 
export default App;
