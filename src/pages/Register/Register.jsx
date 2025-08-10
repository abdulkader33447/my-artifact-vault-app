import Lottie from "lottie-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import lottieRegister from "../../assets/lotties/lottie-register.json";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  // console.log("sdf", user);

  const navigate = useNavigate();

  // password REGEX
  const isValidPassword = (password) => {
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;
    return upperCase && lowerCase && isLengthValid;
  };

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

    // console.log("form submitted :", name, photoURL, email, password);

    if (!isValidPassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must have at least 6 characters, one uppercase and one lowercase letter.!",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateProfile(newUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Successful",
              showConfirmButton: false,
              timer: 2500,
            });
            navigate("/");
          })
          .catch((err) => {
            console.error("Failed to update profile:", err);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: errorMessage || "Something went wrong. Please try again.",
          timer: 8000,
        });
      });
  };
  return (
    <div className="">
      <Helmet>
        <title>register</title>
      </Helmet>
      <div className="  min-h-[calc(100vh-284px)]">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto ">
          <div>
            <Lottie
              style={{ width: "300px" }}
              animationData={lottieRegister}
              loop={true}
            />
          </div>
          <div className="card bg-[#00bf8312] w-full max-w-sm shrink-0 shadow-2xl shadow-[#00bf835d] mt-5">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <h1 className="sm:text-5xl text-3xl font-bold">
                  Register now!
                </h1>

                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                  placeholder="Name"
                />

                <label className="label">photoURL </label>
                <input
                  type="url"
                  name="photoURL"
                  className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                  placeholder="photoURL "
                />

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
                {/* <div>
                  <a className="link link-hover">Forgot password?</a>
                </div> */}
                <button className="btn btn-outline btn-success mt-4 transform duration-600">
                  Register now
                </button>
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
