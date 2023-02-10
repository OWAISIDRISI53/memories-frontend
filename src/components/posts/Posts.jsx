import React, { useContext } from "react";
import postContext from "../../context/post/postContext";
import Loader from "../Loader";
import Post from "./Post";

const Posts = () => {
  const context = useContext(postContext);
  const { posts } = context;

  return (
    <div className="container mx-auto py-12 px-4 grid md:grid-cols-3 gap-3">
      {!posts.length ? (
        <Loader />
      ) : (
        posts.map((post) => {
          return (
            <div key={post._id}>
              <Post post={post} />
              {/* <Loader /> */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Posts;
