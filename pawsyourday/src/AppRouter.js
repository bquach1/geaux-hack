import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './screens/landing';
import Exercise from './screens/exercise';
import Alarm from './screens/alarm';
  
function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/landing' component={<Landing />} />
        <Route exact path='/exercise' component={<Exercise />} />
        <Route exact path='/alarm' component={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}
  
export default AppRouter;
