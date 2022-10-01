import React, { useState, useEffect } from 'react';
import Slider from '../components/sliders/slider';
import { ChevronUp, ChevronDown, ThumbsDown, ThumbsUp } from 'react-feather';
import '../components/css/landing.css';


const Landing = () => {
  const [exerciseVal, setExerciseVal] = useState(0);
  const [sleepVal, setSleepVal] = useState(0);
  var healthVal = (exerciseVal + sleepVal) / 2;

  return (
    <div class="wrapper">
      <h1 class="title">Paws Your Day</h1>
      <div class="flex-container">

        <div class="exercise-section">
            <h1 class="subtitle">Exercise for You</h1>
                <div>           
                    {(exerciseVal >= 5 && exerciseVal < 8) && <h2 class="text">You've been working out regularly.</h2>}  
                    {exerciseVal < 5 && <h2 class="text">You've been working out less.</h2>}   
                    {exerciseVal >= 8 && <h2 class="text">You've been super active!</h2>}
                </div>
            <button onClick={() => console.log("exercise")}>See More Exercise Options</button>
        </div>

        <div class="general-section">
            <div class="rate-bar">
                <h1>Your current status:</h1>
                    {(healthVal < 5) && <h2 class="text">Poor.</h2>} 
                    {(healthVal >= 5 && (healthVal < 9)) && <h2 class="text">Okay.</h2>} 
                    {(healthVal >= 9) && <h2 class="text">Great!</h2>} 
                <div class="flex-container">            

                    <div class="column-container">
                        <h1>Rate Physical Activity (/10)</h1>
                            <ChevronUp id="upIcon" onClick={() => (exerciseVal >= 10) ? setExerciseVal(10) : setExerciseVal(exerciseVal + 1)}/>
                            <ChevronDown id="downIcon" onClick={() => (exerciseVal <= 0) ? setExerciseVal(0) : setExerciseVal(exerciseVal - 1)}/>
                            <h1>{exerciseVal}</h1>
                            {exerciseVal < 5 && <ThumbsDown  id="thumbsDown"/>}
                            {exerciseVal > 4 && <ThumbsUp id="thumbsUp"/>}
                    </div>
                    
                    <div class="column-container">
                        <h1>Hours of Sleep Last Night? (/12)</h1>
                            <ChevronUp id="upIcon" onClick={() => (sleepVal >= 12) ? setSleepVal(12) : setSleepVal(sleepVal + 1)}/>
                            <ChevronDown id="downIcon" onClick={() => (sleepVal <= 0) ? setSleepVal(0) : setSleepVal(sleepVal - 1)}/>
                            <h1>{sleepVal}</h1>
                            {sleepVal < 6 && <ThumbsDown  id="thumbsDown"/>}
                            {sleepVal > 5 && <ThumbsUp id="thumbsUp"/>}
                    </div>
                </div>
                
            </div>
        </div>

        <div class="sleep-section">
            <h1 class="subtitle">Sleep Schedule</h1>
                <div>
                    {(sleepVal < 6) && <h2 class="text">You've been sleeping less than normal.</h2>}  
                    {(sleepVal >= 6 && sleepVal < 8) && <h2 class="text">You've been sleeping okay.</h2>}   
                    {sleepVal >= 8 && <h2 class="text">You've been sleeping a good amount!</h2>}
                </div>
            <button>See More Sleep Options</button>
        </div>

      </div>
    </div>
  );
};
  
export default Landing;
