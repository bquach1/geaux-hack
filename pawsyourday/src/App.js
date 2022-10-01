import React from 'react';
import './App.css';
import './components/css/landing.css';
import './components/css/exercise.css';
import AppRouter from './AppRouter';
import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
import Exercise from './screens/exercise';
  
function App() {
  return (
    <div className='App'>
      {/* <AppRouter />
      <LandingPage /> */}
      <Exercise />
    </div>
  );
}
  
export default App;
