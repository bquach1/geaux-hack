import React from 'react';
import ReactSlider from 'react-slider';
import Slider from '../components/slider';
  
const Landing = () => {
  return (
    <div class="wrapper">
      <h1 class="title">Paws Your Day!</h1>
      <div class="flex-container">
        <div class="exercise-section">
            <h1 class="title">Exercise for You</h1>
        </div>
        <div class="general-section">
            <Slider />
        </div>
        <div class="sleep-section">
            <h1 class="title">Your Sleep Schedule</h1>
        </div>
      </div>
    </div>
  );
};
  
export default Landing;
