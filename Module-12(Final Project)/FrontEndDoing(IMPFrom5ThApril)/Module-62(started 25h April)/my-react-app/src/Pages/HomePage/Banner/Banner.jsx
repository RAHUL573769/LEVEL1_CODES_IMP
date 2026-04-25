"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../Zap-shift-Resources/assets/banner/banner1.png"
import img2 from "../../../Zap-shift-Resources/assets/banner/banner2.png"

import img3 from "../../../Zap-shift-Resources/assets/banner/banner3.png"
const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={img1} />
                <p className="legend">Slide 1</p>
            </div>

            <div>
                <img src={img2} />
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Slide 2</p>
            </div>
        </Carousel>
    );
};

export default Banner;