import React from 'react';
import './App.css';
import './components/css/landing.css';
import './components/css/exercise.css';
import './components/css/sliders.css';
import AppRouter from './AppRouter';
import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
import ExercisePage from './screens/exercise';
  
function App() {
  return (
    <div className='App'>
      <AppRouter />
      <LandingPage />
      <ExercisePage />
      <AlarmPage />
    </div>
  );
}
  
export default App;
