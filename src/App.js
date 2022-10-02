import React, { } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
import ExercisePage from './screens/exercise';
  
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/geaux-hack' element={<LandingPage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/exercise' element={<ExercisePage />} />
            <Route path='/alarm' element={<AlarmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;
