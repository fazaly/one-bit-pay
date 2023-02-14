import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../.././images/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth, logoutUser } from '../../features/api/authSlice';


const Navbar = () => {
    const email = useSelector(state => state.auth.email)
    const dispatch = useDispatch();
    // const email = useSelector((state) => state.auth.email);

    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(logoutUser());

        });
    }

    const menuItems = <>
        <li className='font-semibold mr-5'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-5'><Link to='/about'>About</Link></li>
        <li><Link to='/blog' className='font-semibold mr-5'>Blog</Link></li>
        {
            email ?
                <>
                    <li> <Link to='/dashboard' className='font-semibold mr-5' >Dashboard</Link></li>
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
        <div id='navbar' className="navbar bg-[#181818] text-[#fff] fixed z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[#181818]">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    {/* <img src={logo} alt='' className='w-36 btn bg-transparent border-0' /> */}
                    <h1 className="text-lg font-semibold text-[#5966FF] ml-8">OneBitPay</h1>
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