import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/landing.js'
import ExercisePage from './screens/exercise.js'
import AlarmClockPage from './screens/alarmClock.js'
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={LandingPage} />
        <Route path='/exercise' component={ExercisePage} />
        <Route path='/alarm' component={AlarmClockPage} />
      </Routes>
    </Router>
  );
}
  
export default App;
