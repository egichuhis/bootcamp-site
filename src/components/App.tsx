import React from 'react';
import './App.css';
import Navbar from './navbar'; 
import Showcase from './showcase';
import Newsletter from './newsletter';
import Boxes from './boxes';
import Learn from './learn';
import Accordion from './accordion';
import Instructors from './instructors';
import Contact from './contact';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <Accordion />
      <Instructors />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
