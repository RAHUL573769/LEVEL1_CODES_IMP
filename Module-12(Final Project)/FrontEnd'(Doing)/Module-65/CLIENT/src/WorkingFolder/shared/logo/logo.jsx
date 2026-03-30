import React from 'react';
import logo from "../../../assets/Zap-shift-Resources-main/assets/logo.png"
import { Link } from 'react-router';
const ProFastLogo = () => {
    return (
        <div className='flex items-end'>
            <Link to='/'>  <img className='mb-2' src={logo} alt="" /></Link>
            <p className='text-3xl -ml-2'>ProFast</p>
        </div>
    );
};

export default ProFastLogo;