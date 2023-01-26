import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import signup from "../../images/signUp.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { createUser, user, setUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleSignUp = (info) => {
    setLoading(true);
    const name = info.name;
    const email = info.email;
    const password = info.password;
    const confirm = info.confirm;

    setSignupError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userData = {
          name,
          userEmail: email,
          password,
          confirmPass: confirm,
          balance: 10000,
          accountType: "user",
          isAgent: false,
          isAdmin: false,
        };

         //Here save a user to database after register
        fetch("http://localhost:5000/addUser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUser(user);
            toast.success("SIGN UP SUCCESS ✔");
            setLoading(false);
            navigate("/");
            console.log(user);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.error(err.message);
        setSignupError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen relative">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center hidden lg:block">
          <img src={signup} alt="" className="w-[450px]" />
          <h1 className="text-3xl font-semibold text-[#5966FF]">
            To Access All Features <br /> Please{" "}
            <span className="text-5xl font-bold">SIGN UP</span>
          </h1>
        </div>
        <div className="bg-[#5966FF] p-28">
          <div className="card flex-shrink-0 w-full shadow-2xl ">
            <form
              onSubmit={handleSubmit(handleSignUp)}
              className="card-body space-y-2 rounded-[14px] bg-white"
            >
              <h4 className="text-black font-bold mb-4 text-center text-2xl">
                SIGN UP
              </h4>
              <div className="form-control">
                <input
                  {...register("name", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered border-black"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered border-black"
                />
              </div>
              <div className="form-control">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be in 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered border-black"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered border-black"
                  {...register("confirm", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirm && <p>{errors.confirm.message}</p>}
              </div>
              <div className="form-control ">
                <button type="submit" className="btn bg-black">
                  {loading ? <ButtonSpinner /> : "SIGN UP"}
                </button>
                {signupError && <p className="text-red-500">{signupError}</p>}
              </div>
              <p className="text-xs text-center mt-4">
                Already have an account?{" "}
                <Link className="text-[#5966FF] font-semibold" to="/login">
                  &nbsp;SIGN IN
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="tabs rotate-90 absolute top-1/2 left-0">
        <Link to={"/login"} className="tab tab-bordered font-semibold">
          SIGN IN
        </Link>
        <Link
          to={"/signUp"}
          className="tab tab-bordered font-semibold tab-active"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
};
export default Signup;
