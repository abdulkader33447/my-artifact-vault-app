import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { FaExclamationTriangle } from "react-icons/fa"; // react-icons

const Error = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[calc(100vh-13px)] flex flex-col items-center justify-center px-4 text-center">
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>

      <div className="flex flex-col items-center mb-4 text-success">
        <FaExclamationTriangle size={60} />
        <h1 className="text-6xl font-extrabold mt-2">404</h1>
      </div>

      <h2 className="text-2xl font-semibold">Oops! Page not found</h2>

      {user ? (
        <p className="mt-3">
          Sorry,{" "}
          <span className="font-semibold text-success">{user.displayName}</span>
          , the page you are looking for doesn’t exist.
        </p>
      ) : (
        <p className="mt-3">You seem lost. Let’s get you back home safely.</p>
      )}

      <Link
        to="/"
        className="btn btn-outline btn-success mt-5 hover:text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-700"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Error;
