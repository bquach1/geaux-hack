import React from 'react';
import {ArrowLeft} from 'react-feather';
import { NavigationType, useNavigate } from "react-router-dom";
  
const Alarm = () => {
  let navigate = useNavigate();
  return (
    <div class="wrapper">
        <ArrowLeft class="navigation-arrow" onClick={() => {{(navigate('/landing'))}}}/>
      <h1>Alarm clock page.</h1>
    </div>
  );
};
  
export default Alarm;
