import React, { useContext } from "react";
import LottieLogin from "../../assets/lotties/lotti-json.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("from signin page", email, password);

    logInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
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
            <form onSubmit={handleSignIn} className="fieldset">
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
            </form>
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
