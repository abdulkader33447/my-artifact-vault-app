import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Error = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className='my-15 min-h-[calc(100vh-405px)]'>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        {user ? (
          <p className="mt-4">
            Sorry,{" "}
            <span className="text-lg font-semibold">{user.displayName}</span>,
            the page you're looking for doesn't exist.
          </p>
        ) : (
          <p className="mt-4">You seem lost. Please go back to the homepage.</p>
        )}
        <button>
          <Link
            to="/"
            className="btn my-10 border-none shadow-none "
          >
            Go to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error;