import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Profile from "./pages/Account/Profile";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";


function App() {
  const user = (localStorage.getItem("user"));

  return (
    <div className="bg-[rgb(240,242,245)]">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addpost" element={<Form />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/profile/me" element={<Profile />} />
        </Routes>
        {user && <Footer />}
      </Router>
    </div>

  )
}

export default App;
