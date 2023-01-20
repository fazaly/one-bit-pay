import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import signup from '../../images/signup2.png';
import { useForm } from "react-hook-form";

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const handleSignUp = (info) => {
        const name = info.name;
        const email = info.email;
        const password = info.password;
        const confirm = info.confirm;

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

        console.log(name, email, password, confirm);
        navigate('/');

        const users = {
            name,
            userEmail: email,
            password,
            confirmPass: confirm,
            balance: 10000,
            accountType: "user"
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
                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body rounded-xl bg-white">
                            <h4 className='text-black font-semibold text-center text-2xl'>SIGN UP</h4>
                            <div className="form-control">
                                <input {...register("name", {
                                    required: "Full Name is required"
                                })}
                                    type="text"
                                    placeholder="Full Name" className="input input-bordered"
                                />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control">
                                <input {...register("email", {
                                    required: "Email is required"
                                })}
                                    type="text"
                                    placeholder="Email" className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <input {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be in 6 characters or longer" }
                                })}
                                    type="password"
                                    placeholder="Password" className="input input-bordered"
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="form-control">
                                <input type="password"
                                    placeholder="Confirm Password" className="input input-bordered"
                                    {...register("confirm", {
                                        validate: value =>
                                            value === password.current || "The passwords do not match"
                                    })}

                                />
                                {errors.confirm && <p>{errors.confirm.message}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-black" >Sign Up</button>
                                {
                                    signupError && <p className='text-red-500'>{signupError}</p>
                                }
                            </div>
                            <p className='text-xs text-center'>Already have an account? <Link className='text-[#5966FF] font-semibold' to='/login'>&nbsp;Login Here</Link></p>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;