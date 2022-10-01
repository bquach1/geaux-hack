import ReactSlider from "react-slider";
import '../css/sliders.css';

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};

export default Slider;
