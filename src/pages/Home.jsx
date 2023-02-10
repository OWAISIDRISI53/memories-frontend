import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../components/posts/Posts";
import postContext from "../context/post/postContext";

const Home = () => {
  const navigate = useNavigate();
  const context = useContext(postContext);
  const { getPosts } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getPosts();
    if (!user) {
      navigate("/login");
      Location.reload();
    }
  }, []);

  return (
    <div className="">
      {/* <Spinner /> */}

      <Posts />
    </div>
  );
};

export default Home;
