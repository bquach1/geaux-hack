import React from 'react';
import ReactSlider from 'react-slider';
import Slider from '../components/sliders/slider';

var exerciseVal = 5;
var sleepVal = 10;

const Landing = () => {
  return (
    <div class="wrapper">
      <h1 class="title">Paws Your Day</h1>
      <div class="flex-container">

        <div class="exercise-section">
            <h1 class="subtitle">Exercise for You</h1>
                <div>           
                    {(exerciseVal >= 5 && exerciseVal < 8) && <h2>You've been working out regularly.</h2>}  
                    {exerciseVal < 5 && <h2>You've been working out less than average.</h2>}   
                    {exerciseVal >= 8 && <h2>You've been super active!</h2>}
                </div>
                {/* <div class="slider">
                    <Slider />
                </div> */}
        </div>

        <div class="general-section">

        </div>

        <div class="sleep-section">
            <h1 class="subtitle">Your Sleep Schedule</h1>
                <div>
                    {(sleepVal < 5) && <h2>You've been sleeping less than normal.</h2>}  
                    {(sleepVal >= 5 && sleepVal < 7) && <h2>You've been sleeping okay.</h2>}   
                    {sleepVal >= 7 && <h2>You've been sleeping a good amount!</h2>}
                </div>
        </div>

      </div>
    </div>
  );
};
  
export default Landing;
