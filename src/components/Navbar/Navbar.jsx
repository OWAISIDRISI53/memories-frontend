import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import getFirstName from "../../utils/getFirstname";
import logo from "../../assets/blogo.png";
import profileImage from "../../assets/profile.png";

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
    localStorage.removeItem("no_of_post");
    navigate("/login");
    window.location.reload();
  };

  if (!user) {
    return "";
  }

  return (
    // <header className="bg-white shadow py-3 px-3 sticky top-0 z-50">
    //   <nav className="py-2.5w-full z-20 border-b border-gray-200 ">
    //     <div className="container flex flex-wrap items-center justify-between mx-auto">
    //       <img src={logo} className="mr-3 w-1/2 md:w-48 md:h-10" alt="Logo" />
    //       <div className="flex md:order-2 items-center">
    //         {user ? (
    //           <Link
    //             to="/profile/me"
    //             className="flex items-center mx-3 gap-1 cursor-pointer"
    //           >
    //             <h5>{getFirstName(user.name)} </h5>
    //             <i className="text-gray-300 text-[8px] fa-solid fa-greater-than"></i>
    //             <i className="fa-solid fa-user"></i>
    //           </Link>
    //         ) : (
    //           <button
    //             type="button"
    //             // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
    //             className="primary-btn"
    //           >
    //             <Link to="/login"> Get started</Link>
    //           </button>
    //         )}

    //         <button
    //           data-collapse-toggle="navbar-sticky"
    //           type="button"
    //           className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    //           aria-controls="navbar-sticky"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             onClick={toggleNav}
    //             className="w-6 h-6"
    //             aria-hidden="true"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </button>
    //       </div>
    //       {/* Desktop navbar */}
    //       <div
    //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //         id="navbar-sticky"
    //       >
    //         <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
    //           <li>
    //             <Link
    //               to="/"
    //               className="block py-2 pl-3 pr-4  rounded md:p-0"
    //               aria-current="page"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/about"
    //               className="block py-2 pl-3 pr-4 rounded md:hover:text-gray-400 md:p-0"
    //             >
    //               About
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/contact"
    //               className="block py-2 pl-3 pr-4 rounded md:hover:text-gray-400 md:p-0"
    //             >
    //               Contact
    //             </Link>
    //           </li>
    //           <li>
    //             {!user ? (
    //               <Link
    //                 to="/login"
    //                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Login
    //               </Link>
    //             ) : (
    //               <div onClick={logoutHandler}>Logout</div>
    //             )}
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   {/* Mobile Navbar */}
    //   <div className={click ? "md:hidden transition duration-200" : "hidden"}>
    //     <div className=" py-2 flex flex-col gap-1">
    //       <Link
    //         className="block font-bold rounded-md border border-gray-900 px-3 py-2 hover:bg-blue-200"
    //         to="/"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         className="block font-bold rounded-md border border-gray-900 px-3 py-2 hover:bg-blue-200"
    //         to="/about"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         className="block font-bold rounded-md border border-gray-900 px-3 py-2 hover:bg-blue-200"
    //         to="/contact"
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //     <div className="flex py-2">
    //       <div className="primary-btn" onClick={logoutHandler}>
    //         Logout
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="bg-white shadow px-3 sticky top-0 z-50">
      <nav className="py-2.5 w-full z-20 border-b border-red-200 flex justify-between items-center px-3 md:px-9">
        <div className="logo">
          <img src={logo} className="mr-3 w-1/2 md:w-36" alt="Logo" />
        </div>

        <button className="menu-sec h-10 w-12 self-center" onClick={toggleNav}>
          <img
            className="w-9 h-9 md:h-9 md:w-9"
            src={profileImage}
            alt="user"
          />
        </button>
      </nav>

      <div className={click ? "transition duration-200" : "hidden"}>
        <div className="user-dash absolute bg-white right-8 py-2 px-6 md:py-4 md:px-8 text-center shadow rounded">
          <Link
            to="/profile/me"
            onClick={toggleNav}
            className="py-3 cursor-pointer font-bold"
          >
            View Profile
          </Link>
          <hr />
          <button
            onClick={logoutHandler}
            className="py-3 cursor-pointer font-bold text-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
