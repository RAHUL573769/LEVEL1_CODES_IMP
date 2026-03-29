import React from 'react';
import { Outlet } from 'react-router';
import ProFastLogo from '../shared/logo/logo';

const AuthLayout = () => {
    return (
        <div>
            <div className="p-12 bg-base-200">
                <div>
                    <ProFastLogo></ProFastLogo>
                </div>

                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>   <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    /></div>
                    <div className='flex-1'>

                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;