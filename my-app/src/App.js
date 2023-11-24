
import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';



export default function App() {
  return (
    <>
      <Navbar title="Textutils" abouttext="About Us " button="Search" home="Home" />

     <div className='container'>
        <Textform heading="Enter the Text to analyz bellow" />
  </div> 



    </>
  )
}


