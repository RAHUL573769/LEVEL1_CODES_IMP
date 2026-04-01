import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, NavLink } from 'react-router';
import ProFastLogo from '../logo/logo';

const Navbar = () => {

  const { user, logOut } = useAuth()
  const handleLogout = () => {
    logOut().then(data => console.log(data)).catch(error => console.log(error))
  }
  const navList = <>    <li><Link to='/coverage'>Coverage</Link></li>
    <li><Link to='/send'>Send Parcel</Link></li>
    {user &&
      <>
        <li><NavLink to='/orders'>Orders</NavLink></li>
        <li><NavLink to='/dashboard/myParcels'>Dashboard</NavLink></li>

      </>

    }

  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navList}
            </ul>
          </div>
          <ProFastLogo></ProFastLogo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? <>

            <button onClick={handleLogout} className="btn btn-primary">Logout</button>

          </> : <button className="btn btn-primary"><Link to='/login'>Login</Link></button>
          }
        </div>
      </div>



    </div>
  );
};

export default Navbar;