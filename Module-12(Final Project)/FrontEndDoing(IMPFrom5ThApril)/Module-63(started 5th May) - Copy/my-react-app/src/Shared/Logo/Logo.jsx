import React from 'react';
import img from '../../Zap-shift-Resources/assets/logo.png'
const Logo = () => {
    return (
        <div className='flex item items-end'>
            <img src={img}></img>
            <h3 className='text-3xl font-bold text-p'>Zap Shift</h3>
        </div>
    );
};

export default Logo;