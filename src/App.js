import './App.css';

// import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
// import Projects from './Components/Projects/Projects';
import Dataload from './Components/Dataload/Dataload';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div>
      <Router>
      <Header></Header>
         
         
         <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/home" element={ <Home/>} />
          <Route path="/contact" element={ <Contact/>} />       
          <Route path="/about" element={ <About/>} />
          <Route path="/skills" element={ <Skills/>} />
          <Route path="/projects" element={ <Dataload/>} />
          

          </Routes>

      </Router>

      <MessengerCustomerChat
    pageId="100665115792644"
    appId="696869337952772"
  />
     
  </div>
   
  );
}

export default App;
