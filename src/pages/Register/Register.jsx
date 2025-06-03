import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="">
      <div className="hero bg-base-200 min-h-[calc(100vh-284px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold">Register now!</h1>

                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />

                <label className="label">photoURL </label>
                <input
                  type="url"
                  name="photoURL "
                  className="input"
                  placeholder="photoURL "
                />

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
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button className="btn btn-neutral mt-4">Login</button>
                <p>Already have an account? please <Link to="/login" className="text-blue-600 underline">Login</Link></p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
