import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false);
    return (
        <>
        <header className='header'>
            <div className='container d_flex'>
            <div className='logo'>
                <h1>OneBitPay</h1>
            </div>

            <div className='navlink'>
                <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                    <li>
                        <Link href="/home">home</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>
                    <li>
                        <Link href="/login">login</Link>
                    </li>
                    <li>
                        <Link href="/SignUp">Sign up</Link>
                    </li>
                </ul>

                <button className='toggle' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                </button>
            </div>
            </div>
        </header>
        </>
    );
};

export default Navbar;