import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import signup from '../../images/signup2.png'

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const phone = form.phone.value;
        const nid = form.nid.value;
        const address = form.address.value;

        setSignupError('');
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message)
                setSignupError(err.message)
            })

        console.log(name, email, password, confirm, phone, nid, address);
        navigate('/');
        
        const users = {
            name,
            userEmail: email,
            password,
            confirmPass: confirm,
            phone,
            nid,
            address
        }

        fetch('https://one-bit-pay-server.vercel.app/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center hidden lg:block">
                    <img src={signup} alt="" />
                </div>
                <div className='bg-[#5966FF] p-28 rounded-tr-3xl rounded-br-3xl'>
                    <div className="card flex-shrink-0 w-full shadow-2xl ">
                        <form onSubmit={handleSignUp} className="card-body rounded-xl bg-white">
                            <h4 className='text-black font-semibold text-center text-2xl'>SIGN UP</h4>
                            <div className="form-control">
                                <input type="text"
                                    name="fullname"
                                    placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    name="email"
                                    placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    name="phone"
                                    placeholder="Phone Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    name="nid"
                                    placeholder="NID Code" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    name="address"
                                    placeholder="Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password"
                                    name="password"
                                    placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password"
                                    name="confirm"
                                    placeholder="Confirm Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-black">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-red-600'>{signupError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;