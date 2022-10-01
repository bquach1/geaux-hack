import React from 'react';
import Slider from '../components/sliders/slider';
import '../components/css/exercise.css';
import Squats from '../components/images/squats.png';
import { ArrowLeft } from 'react-feather';
import { NavigationType, useNavigate } from "react-router-dom";
  
const Exercise = () => {
  let navigate = useNavigate();
  return (
    <div class="exercise">
      <ArrowLeft onClick={() => {{(navigate('/landing'))}}}/>
      <h1 class="title">Geaux Exercise!</h1>
      <div>
        <h2>Please rate the intensity of your day.</h2>
        <Slider />
      </div>
    </div>
  );
};
  
export default Exercise;
