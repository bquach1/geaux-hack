import React, { useState, useEffect, Button } from 'react';
import './App.css';
import { Routes, Route, useNavigate, BrowserRouter} from 'react-router-dom';

import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
import ExercisePage from './screens/exercise';
  
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/exercise' element={<ExercisePage />} />
            <Route path='/alarm' element={<AlarmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;
