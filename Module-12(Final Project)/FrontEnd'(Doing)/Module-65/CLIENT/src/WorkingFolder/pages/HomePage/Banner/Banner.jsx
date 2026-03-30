import image1 from "../../../../assets/Zap-shift-Resources-main/assets/brands/amazon.png"
import image2 from "../../../../assets/Zap-shift-Resources-main/assets/brands/amazon.png"
import image3 from "../../../../assets/Zap-shift-Resources-main/assets/brands/amazon.png"
import React from 'react';
import AwesomeSlider from '@rcaferati/react-awesome-slider';
import '@rcaferati/react-awesome-slider/styles.css';

export default function Example() {
  return (
    <AwesomeSlider>
      <div data-src={image1} />
      <div data-src={image2} />
      <div data-src={image3} />
    </AwesomeSlider>
  );
}