import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import logo from "../../assets/blogo.png";
import Spinner from "../../utils/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(null);
  const [click, setClick] = useState(false);

  const toggleBtn = () => {
    if (submitHandler) {
      setClick(!click);
    }
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://memories-backend-o1jt.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cred.email, password: cred.password }),
      }
    );

    const json = await response.json();
    setCred({ ...cred, json });
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("user", JSON.stringify(json.user));
      navigate("/");
      window.location.reload();
    } else {
      showAlert();
    }
  };

  const changeHandler = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="container w-11/12 my-8 mx-auto md:p-12 md:w-1/3 bg-white shadow px-7">
        {alert && <Alert color="red" error="Invalid email and password" />}
        <div className="my-4 text-center py-5 mx-6 sm:mx-8 ">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email..."
              required
              onChange={changeHandler}
              value={cred.email}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={changeHandler}
              value={cred.password}
              placeholder="Password..."
            />
          </div>

          <button
            onClick={toggleBtn}
            disabled={!cred.email || cred.password.length < 5}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-gray-500"
          >
            {!alert && !click && submitHandler ? "Login" : <Spinner />}
          </button>
        </form>

        <div className="my-3">
          Don't have an account?
          <Link
            to="/signup"
            variant="body2"
            className="font-bold text-blue-600"
          >
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
