import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(null);

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
    <div className="md:h-full w-full h-3/4 flex justify-center items-center">
      <div className="container w-11/12 mx-4 my-8 md:mx-auto sm:mx-auto md:p-12 md:w-1/2 bg-white shadow px-4">
        {alert && <Alert color="red" error="Invalid email and password" />}
        <div className="my-4 text-center py-3">
          <div className="icon">
            <i className="fa-2xl fa-solid fa-user-lock"></i>
          </div>
          <h2 className="text-3xl">Login</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
              onChange={changeHandler}
              value={cred.email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={changeHandler}
              value={cred.password}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
        <div className="my-3">
          <Link to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
