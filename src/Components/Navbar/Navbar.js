import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../.././images/logo.svg';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // // logOut
    const handleLogOut = () => {
        logOut()
            .then(result => {
                // const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error));
        
    }

    const menuItems = <>
        <li className='font-semibold mr-5'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-5'><Link to='/about'>About</Link></li>
        {
            user && user.email && <li className='font-semibold mr-5'><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/blog' className='font-semibold mr-5'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold mr-5'><Link to='/login'>Login</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar bg-[#ecf0f3] px-4 py-2 rounded-full w-11/12 mt-6  mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img src={logo} alt='' className='w-36 btn bg-transparent border-0' />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;