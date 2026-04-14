
import useAuth from '../../hooks/useAuth';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router';

const Navbar = () => {


    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut().then(data=>{console.log(data)}).catch(error=>{console.log(error)})
    }
    const navItems = <>
   <NavLink to='/coverage'>Coverage</NavLink>



    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        <Logo></Logo>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<button onClick={handleLogout}>LogOut</button>:<Link to='/login'>Login</Link>
              }
                </div>
                <div>
        <Link to='/beRider'>            <button >Be a Rider</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;