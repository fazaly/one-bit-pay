import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ButtonSpinner from "../../Components/ButtonSpinner/ButtonSpinner";
import { AuthContext } from "../../context/AuthProvider";
import signin from "../../images/LoginPage.svg";
import { setCurrentUser } from "../../features/api/courrentUserSlice";
import { loginUser } from "../../features/api/authSlice";
import background from "../../././images/LoginBorder.png";
import "./Login.css";
import loginImage from "../../././images/loginImage.png";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, isSuccess } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userEmail, setUserEmail] = useState("");
  const { passwordReset } = useContext(AuthContext);
  const [signinError, setSigninError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (!isLoading && isSuccess) {
      navigate("/");
      toast.success("Login success", { id: "logon" });
    } else if (isError) {
      toast.error(error, { id: "logon" });
    }
  }, [isError, error, isSuccess, isLoading, navigate]);

  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;

    dispatch(loginUser({ email, password }));
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

  const loginStyle = {
    backgroundImage: `url(${background})`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center">
        <div
          style={loginStyle}
          className="w-7/12 h-screen bg-[#181818] flex justify-center items-center"
        >
          <div id="image-container" className="w-96 h-4/6 rounded-xl flex flex-col justify-center items-center">
            <img src={loginImage} alt="" className="w-72" />
            <div className="relative">
              <h1 className="text-white font-semibold text-xl">To Access All Features <br/> Please</h1>
              <span className="text-3xl text-white font-bold absolute right-9 top-7">SIGN IN</span>
            </div>
          </div>
        </div>
        <div className="w-5/12 h-screen bg-[#FFF]"></div>
      </div>
    </div>
  );
};

export default Login;
