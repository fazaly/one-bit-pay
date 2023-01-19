import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import signin from '../../images/signin.jpg'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userEmail, setUserEmail] = useState('');
    const { signIn, passwordReset } = useContext(AuthContext);
    const [signinError, setSigninError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (data) => {

        const email = data.email
        const password = data.password;

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
        // navigate(from, { replace: true });
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handlePasswordReset = () => {
        passwordReset(userEmail)
        .then(() => {
            toast.success('Password Reset Email sent. Please Check Your Email')
        })
        .catch( error => {
            console.log("error:", error)
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center hidden lg:block">
                    <img src={signin} alt="" />
                </div>
                <div className='bg-[#5966FF] p-28 rounded-tr-3xl rounded-br-3xl'>
                    <div className="card flex-shrink-0 w-full shadow-2xl ">
                        <form onSubmit={handleSubmit(handleSignIn)} className="card-body rounded-xl bg-white">
                            <h4 className='text-black font-semibold text-center text-2xl'>SIGN IN</h4>
                            <div className="form-control">
                                <input {...register("email", {
                                    required: "Email is required"
                                })}
                                    onBlur={handleEmailBlur}
                                    type="text"
                                    name="email"
                                    placeholder="Email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                            </div>

                            <div className="form-control">
                                <input {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password is Wrong' }
                                })}
                                    type="password"
                                    name="password"
                                    placeholder="Password" className="input input-bordered" />
                                    {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                                <label className="label">
                                    <button onClick={handlePasswordReset} className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>



                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-black">Sign In</button>
                                {signinError && <p className='text-red-500'>{signinError}</p>}
                            </div>
                            <p className='text-xs text-center'>New to OneBitPay?
                            <Link className='text-[#5966FF] font-semibold' to='/signUp'>&nbsp;Sign Up</Link></p>
                        </form>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;