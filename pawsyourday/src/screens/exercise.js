import React from 'react';
import Slider from '../components/sliders/slider'
  
const Exercise = () => {
  return (
    <div class="exercise">
      <h1 class="title">Geaux Exercise!</h1>
      <h2>Please rate the intensity of your day.</h2>
      <Slider />
    </div>
  );
};
  
export default Exercise;
