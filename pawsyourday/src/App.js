import React, { useState, useEffect, Button } from 'react';
import './App.css';

import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
import ExercisePage from './screens/exercise';
  
function App() {

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <div className='App'>
      <LandingPage />
      <ExercisePage />
      <AlarmPage />
    </div>
  );
}
  
export default App;
