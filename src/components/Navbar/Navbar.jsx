import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoImg from "../../assets/memoriesLogo.png";
import getFirstName from "../../utils/getFirstname";
// import LogoText from "../../assets/memoriesText.png";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [click, setClick] = useState(false);
  // const user = localStorage.getItem("user");

  const toggleNav = () => {
    setClick(!click);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  if (!user) {
    return "";
  }

  return (
    <header className="bg-gray-800 py-3 px-3 text-white sticky top-0 z-50">
      <nav className="py-2.5 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              // src="https://flowbite.com/docs/images/logo.svg"
              src={LogoImg}
              className="h-6 mr-3 sm:h-12"
              alt="Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Memories
            </span>
          </a>
          <div className="flex md:order-2 items-center">
            {user ? (
              <Link
                to="/profile/me"
                className="flex items-center mx-3 gap-1 cursor-pointer"
              >
                <h5>{getFirstName(user.name)} </h5>
                <i className="text-gray-300 text-[8px] fa-solid fa-greater-than"></i>
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : (
              <button
                type="button"
                // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                className="primary-btn"
              >
                <Link to="/login"> Get started</Link>
              </button>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={toggleNav}
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop navbar */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                {!user ? (
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Login
                  </Link>
                ) : (
                  <div onClick={logoutHandler}>Logout</div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <div className={click ? "md:hidden transition duration-200" : "hidden"}>
        <div className=" py-2 flex flex-col gap-1">
          <Link
            className="block rounded-md bg-gray-900 px-3 py-2 text-white hover:text-gray-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block rounded-md bg-gray-900 px-3 py-2 text-white hover:text-gray-200"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block rounded-md bg-gray-900 px-3 py-2 text-white hover:text-gray-200"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex py-2">
          <div className="primary-btn" onClick={logoutHandler}>
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
