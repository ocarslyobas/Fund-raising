import React from 'react';
import Navheaders from "./Pages/Landing/Navheaders";
import Displayslideimg from "./Pages/Landing/Displayslideimg";
import About from './Pages/About/AboutHeader';
import Contactsetup from './Pages/contact/Contactsetup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Landing/Footer';
import Home from './Pages/Landing/Home';
import Contact from './Pages/contact/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {
  return    <BrowserRouter>
                <Navheaders/>
                <Routes>
                  <Route path='/' element = {<Home/>}/>
                  <Route path='/About' element = {<About/>}/>
                  <Route path='/Contact' element = {<Contact/>}/>
                </Routes>
                <Footer/>
           </BrowserRouter>
}

export default App

