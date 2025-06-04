import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase/firebase.init";
import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "sign out user",
          showConfirmButton: false,
          timer: 2500,
        });
        console.log("log out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="mr-2 text-xl">
            Artifacts
          </Link>
          {/* theme toggle */}
          <label className="toggle text-base-content">
            <input type="checkbox" value="dark" className="theme-controller" />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
            {user ? <></> : <></>}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              {user?.photoURL ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="cursor-pointer m-1">
                    <img
                      className="size-9 rounded-full mr-2"
                      src={user?.photoURL}
                      alt="user photo"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm"
                  >
                    <li>
                      <p>{user.displayName}</p>
                    </li>
                    <li>
                      <NavLink to="/myArtifacts">My Artifacts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/likedArtifacts">Liked Artifacts</NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className="btn">
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="cursor-pointer m-1">
                    <FaRegUser className="size-8  mr-2" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm"
                  >
                    <li>
                      <p>{user.displayName}</p>
                    </li>
                    <li>
                      <NavLink to="/myArtifacts">My Artifacts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/likedArtifacts">Liked Artifacts</NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className="btn">
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn">
                LogOut
              </button>
            </>
          ) : (
            <>
              <NavLink className="btn" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
