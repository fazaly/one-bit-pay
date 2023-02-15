import React from 'react';

const Test = () => {
    return (
        <div>
            {/* <form
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
                    isError ? <ButtonSpinner /> : "SIGN IN"
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
            </form> */}
        </div>
    );
};

export default Test;