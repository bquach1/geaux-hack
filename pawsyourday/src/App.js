import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import AlarmPage from './screens/alarm';
import LandingPage from './screens/landing';
  
function App() {
  return (
    <div className='App'>
      {/* <AppRouter /> */}
      <LandingPage />
    </div>
  );
}
  
export default App;
