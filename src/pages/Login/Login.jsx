import React, { useContext } from "react";
import LottieLogin from "../../assets/lotties/lotti-json.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  // password REGEX
  const isValidPassword = (password) => {
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;
    return upperCase && lowerCase && isLengthValid;
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("from signin page", email, password);

    if (!isValidPassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must have at least 6 characters, one uppercase and one lowercase letter.!",
      });
      return;
    }

    logInUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(`${location.state ? location.state : "/"}`);
        // console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password",
          timer: 8000,
        });
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/");
        // console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" min-h-[calc(100vh-284px)] ">
      <Helmet>
        <title>login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto ">
        <div>
          <Lottie
            style={{ width: "300px" }}
            animationData={LottieLogin}
            loop={true}
          />
        </div>
        <div className="card bg-[#00bf8312] w-full max-w-sm shrink-0 shadow-2xl shadow-[#00bf835d] mt-10">
          <div className="card-body ">
            <form onSubmit={handleSignIn} className="fieldset">
              <h1 className="sm:text-5xl text-3xl font-bold">Login now!</h1>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-outline btn-success mt-4">
                Login
              </button>
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-success "
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
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
