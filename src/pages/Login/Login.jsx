import React from "react";
import LottieLogin from "../../assets/lotties/lotti-json.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Login = () => {

  
  return (
    <div className=" bg-base-200 min-h-[calc(100vh-284px)]">
      <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
        <div>
          <Lottie
            style={{ width: "300px" }}
            animationData={LottieLogin}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
          <div className="card-body">
            <fieldset className="fieldset">
              <h1 className="sm:text-5xl text-3xl font-bold">Login now!</h1>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              Don't have an account? please{" "}
              <Link to="/register" className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
