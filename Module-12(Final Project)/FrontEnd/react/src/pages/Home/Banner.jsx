import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/Zap-shift-Resources-main/assets/banner/banner1.png"
const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={banner1 } />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                         <img src={banner1 } />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                      <img src={banner1 } />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;