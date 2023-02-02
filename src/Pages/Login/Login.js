import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { AuthContext } from "../../context/AuthProvider";
import signin from "../../images/LoginPage.svg";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const { signIn, passwordReset, user, setUser } = useContext(AuthContext);
  const [signinError, setSigninError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;

    setSigninError("");
    setLoading(true);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        setLoading(false);
        navigate('/dashboard');
        toast.success("SignUp Success ✔");
      })
      .catch((err) => {
        console.error(err.message);
        setSigninError(err.message);
        setLoading(false);
        toast.error(err.message);
      });
    // navigate(from, { replace: true });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handlePasswordReset = () => {
    passwordReset(userEmail)
      .then(() => {
        toast.success("Password Reset Email sent. Please Check Your Email");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <div className="hero min-h-screen relative">
      <div className="hero-content to">
        <div className="text-center hidden lg:block">
          <img src={signin} alt="" className="w-[500px]" />
          <h1 className="text-3xl font-semibold text-[#5966FF]">
            To Access All Features <br /> Please{" "}
            <span className="text-5xl font-bold">SIGN IN</span>
          </h1>
        </div>
        <div className="bg-[#5966FF] lg:min-w-[500px] min-w-[380px] min-h-screen flex justify-center items-center">
          <div className="card flex-shrink-0  shadow-2xl ">
            <form
              onSubmit={handleSubmit(handleSignIn)}
              className="card-body space-y-2 rounded-xl bg-white"
            >
              <h4 className="text-black font-bold text-center text-2xl mb-2">
                SIGN IN
              </h4>
              <div className="form-control">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  onBlur={handleEmailBlur}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-black"
                />
                {errors.email && (
                  <p className="text-red-500" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password is Wrong" },
                  })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered border-black"
                />
                {errors.password && (
                  <p className="text-red-500" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <label className="label">
                  <button
                    onClick={handlePasswordReset}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>

              <div className="form-control">
                <button type="submit" className="btn bg-black">
                  {
                    loading ? <ButtonSpinner/> : "SIGN IN"
                  }
                </button>
                {signinError && <p className="text-red-500">{signinError}</p>}
              </div>
              <p className="text-xs text-center">
                New to OneBitPay?
                <Link className="text-[#5966FF] font-semibold" to="/signUp">
                  &nbsp;SIGN UP
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="tabs rotate-90 absolute top-1/2 left-0">
        <Link
          to={"/login"}
          className="tab tab-bordered  font-semibold tab-active"
        >
          SIGN IN
        </Link>
        <Link
          to={"/signUp"}
          className="tab tab-bordered font-semibold"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Login;
