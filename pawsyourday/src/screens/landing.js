import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import Slider from '../components/sliders/slider';
import { ChevronUp, ChevronDown } from 'react-feather';

var exerciseVal = 5;
var sleepVal = 10;

const Landing = () => {
  const [dayVal, setDayVal] = useState(0);

  return (
    <div class="wrapper">
      <h1 class="title">Paws Your Day</h1>
      <div class="flex-container">

        <div class="exercise-section">
            <h1 class="subtitle">Exercise for You</h1>
                <div>           
                    {(dayVal >= 5 && dayVal < 8) && <h2>You've been working out regularly.</h2>}  
                    {dayVal < 5 && <h2>You've been working out less than average.</h2>}   
                    {dayVal >= 8 && <h2>You've been super active!</h2>}
                </div>
                {/* <div class="slider">
                    <Slider />
                </div> */}
        </div>

        <div class="rate-bar">
            <h1>Rate Your Day out of 10!</h1>
            <ChevronUp onClick={() => (dayVal >= 10) ? setDayVal(10) : setDayVal(dayVal + 1)}/>
            <ChevronDown onClick={() => (dayVal <= 0) ? setDayVal(0) : setDayVal(dayVal - 1)}/>
            <h1>{dayVal}</h1>
        </div>

        <div class="general-section">

        </div>

        <div class="sleep-section">
            <h1 class="subtitle">Sleep Schedule</h1>
                <div>
                    {(dayVal < 5) && <h2>You've been sleeping less than normal.</h2>}  
                    {(dayVal >= 5 && dayVal < 7) && <h2>You've been sleeping okay.</h2>}   
                    {dayVal >= 7 && <h2>You've been sleeping a good amount!</h2>}
                </div>
        </div>

      </div>
    </div>
  );
};
  
export default Landing;
