import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

const App =() =>{
  return (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
  </>
  );
}
export default App;

