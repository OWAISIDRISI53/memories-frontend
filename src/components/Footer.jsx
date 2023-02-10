import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [click, setClick] = useState(false);
  const toggleDrawer = () => {
    setClick(!click);
  };

  return (
    <footer className="bg-white fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadowdark:bg-gray-800 h-16 py-2 rounded-md">
      {/* Bottom Footer */}
      <div className="icons flex justify-around mx-auto w-auto">
        <Link to="/" className="icon text-gray-700 text-center cursor-pointer">
          <i className="fa-solid fa-house"></i>
          <h6 className="py-1 text-sm">Home</h6>
        </Link>
        <div className="icon text-gray-700 self-center w-1/5 text-center">
          <i
            onClick={toggleDrawer}
            className="fa-2xl fa-solid fa-circle-plus"
          ></i>
        </div>

        <div className="icon text-gray-700  text-center cursor-pointer">
          <i className="fa-solid fa-bookmark"></i>
          <h6 className="py-1 text-sm">Bookmark</h6>
        </div>
      </div>

      {/*  Drawer Section */}
      <div
        className={
          click
            ? "drawer absolute bottom-0 left-0 w-full z-30 rounded-t-md"
            : "-bottom-56"
        }
      >
        <div className="py-5 text-gray-200 bg-gray-800">
          <div className="head flex justify-between items-center mb-5 px-6">
            <div className="title italic tracking-wide">Create</div>
            <div className="icon cursor-pointer">
              <i
                onClick={toggleDrawer}
                className="fa fa-2xl fa-light fa-xmark"
              ></i>
            </div>
          </div>

          <Link to="/addpost" className="list" onClick={toggleDrawer}>
            <div className="item flex px-5 gap-5 items-center hover:bg-slate-900 py-1">
              <div className="icon bg-gray-600 p-2.5 rounded-full">
                <i className="fa-2xl fa-sharp fa-solid fa-pen-to-square"></i>
              </div>
              <div className="name">Create a Post</div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
