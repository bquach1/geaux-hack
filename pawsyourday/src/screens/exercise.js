import React from 'react';
import Slider from '../components/sliders/slider';
import Squats from '../components/images/squats.png';
  
const Exercise = () => {
  return (
    <div class="exercise">
      <h1 class="title">Geaux Exercise!</h1>
      <div>
        <h2>Please rate the intensity of your day.</h2>
        <Slider />
      </div>
      <img class="images" src={Squats} alt="squatting man" />
    </div>
  );
};
  
export default Exercise;
