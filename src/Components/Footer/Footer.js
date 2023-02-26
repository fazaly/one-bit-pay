import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../.././images/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#181818] text-white">
                <div>
                    <img src={logo} alt='logo' className='w-40' />
                    <p className='font-semibold text-md'>
                    The easiest way to  payment with all.
                    </p>
                </div>
                <div>
                    <span className="footer-title text-[#5966FF] opacity-100">Services</span>
                    <a className="link link-hover">Add Money</a>
                    <a className="link link-hover">Send Money</a>
                    <a className="link link-hover">Cash Out</a>
                </div>
                <div>
                    <span className="footer-title text-[#5966FF] opacity-100">Pages</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <Link to={'/blog'} className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title text-[#5966FF] opacity-100">Legal</span>
                    <Link to="/terms" className="link link-hover">Terms of use</Link>
                    <Link to={'/cookie'} className='link link-hover'>Cookie Policy</Link>
                </div>
                {/* <div>
                    <span className="text-3xl font-semibold text-[#00AAFF]">Let's Join With Us !</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-[#00AAFF] absolute top-0 right-0 rounded-l-none border-0">Subscribe</button>
                        </div>
                    </div>
                </div> */}
            </footer>
            <footer className="footer footer-center p-4 bg-[#141414] text-base-content">
                <div>
                    <p className='text-[#FFF] font-light'>Copyright © 2023 - All right reserved by OneBitPay team.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;