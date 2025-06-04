import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import lottieRegister from "../../assets/lotties/lottie-register.json";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // password REGEX
  // const isValidPassword = (password) => {
  //   const upperCase = /[A-Z]/.test(password);
  //   const lowerCase = /[a-z]/.test(password);
  //   const isLengthValid = password.length >= 6;
  //   return upperCase && lowerCase && isLengthValid;
  // };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    // const formData = new FormData(form);
    // const { email, password, ...restFormData } = Object.fromEntries(
    //   formData.entries()
    // );

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("form submitted :", name, photoURL, email, password);

    // if (!isValidPassword(password)) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Invalid Password",
    //     text: "Password must have at least 6 characters, one uppercase and one lowercase letter.!",
    //   });
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: errorMessage || "Something went wrong. Please try again.",
          timer: 8000,
        });
      });
  };
  return (
    <div className="">
      <div className=" bg-base-200 min-h-[calc(100vh-284px)]">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
          <div>
            <Lottie
              style={{ width: "300px" }}
              animationData={lottieRegister}
              loop={true}
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <h1 className="sm:text-5xl text-3xl font-bold">
                  Register now!
                </h1>

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
                  name="photoURL"
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
                <button className="btn btn-neutral mt-4">Register now</button>
                <p>
                  Already have an account? please{" "}
                  <Link to="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
