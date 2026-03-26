import image1 from "../../../../../../../Zap-shift-Resources-main/Zap-shift-Resources-main/assets/banner/banner1.png"
import image2 from "../../../../../../../Zap-shift-Resources-main/Zap-shift-Resources-main/assets/banner/banner2.png"
import image3 from "../../../../../../../Zap-shift-Resources-main/Zap-shift-Resources-main/assets/banner/banner3.png"


import React from 'react';
import AwesomeSlider from '@rcaferati/react-awesome-slider';
import '@rcaferati/react-awesome-slider/styles.css';

export default function Example() {
  return (
    <AwesomeSlider>
      <div data-src={image1} />
          <div data-src={ image2} />
      <div data-src={image3} />
    </AwesomeSlider>
  );
}