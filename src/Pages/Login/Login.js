import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import signin from '../../images/signin.jpg'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [signinError, setSigninError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setSigninError('');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err.message)
                setSigninError(err.message)
            })
        console.log(email, password);
        form.reset();
        navigate(from, {replace: true});
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center hidden lg:block">
                    <img src={signin} alt="" />
                </div>
                <div className='bg-[#5966FF] p-28 rounded-tr-3xl rounded-br-3xl'>
                    <div className="card flex-shrink-0 w-full shadow-2xl ">
                        <form onSubmit={handleSignIn} className="card-body rounded-xl bg-white">
                            <h4 className='text-black font-semibold text-center text-2xl'>SIGN IN</h4>
                            <div className="form-control">
                                <input type="text" 
                                name="email"
                                placeholder="Email" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control">
                                <input type="password"
                                name="password"
                                placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    {/* <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link> */}
                                </label>
                            </div>
                            
                                
                            
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-black">Sign In</button>
                            </div>
                        </form>
                        <p className='text-red-600'>{signinError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;