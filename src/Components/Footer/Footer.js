import React from 'react';
import logo from '../.././images/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} alt='logo' className='w-52' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Add Money</a>
                    <a className="link link-hover">Send Money</a>
                    <a className="link link-hover">Cash Out</a>
                    <a className="link link-hover">Payment</a>
                    <a className="link link-hover">Mobile Recharge</a>
                </div>
                <div>
                    <span className="footer-title">Pages</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
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
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by OneBitPay</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;