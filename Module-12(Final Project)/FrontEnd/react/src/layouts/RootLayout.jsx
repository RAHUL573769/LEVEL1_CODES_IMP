
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import Fooyter from '../pages/shared/Fooyter';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fooyter></Fooyter>
        </div>
    );
};

export default RootLayout;