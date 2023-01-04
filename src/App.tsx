import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Programs from './pages/Programs/Programs';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import './assets/css/Main.css'
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
