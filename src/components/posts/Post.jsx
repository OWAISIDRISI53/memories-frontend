import moment from "moment/moment";
import React, { useContext, useEffect } from "react";
import postContext from "../../context/post/postContext";
// import Alert from "../Alert";
// import Loader from "../Loader";

const Post = ({ post }) => {
  const context = useContext(postContext);
  const {
    getPosts,
    deletePost,
    defaultImage,
    showAlert,
    likePost,
    getUserPost,
  } = context;

  const user = JSON.parse(localStorage.getItem("user"));

  const postDeleteHandler = () => {
    deletePost(post);
    getPosts();
  };

  const likeHandler = () => {
    likePost(post);
    getPosts();
  };

  // useEffect(() => {(

  // )
  //   const noPost = getUserPost(post);
  //   console.log(noPost);
  // }, []);

  const Likes = () => {
    if (user && post.likes.length > 0) {
      return post.likes.find((like) => like === user._id) ? (
        <>
          {/* <i className="text-xl fa-regular fa-thumbs-up"></i> */}
          <i className="fa-solid fa-thumbs-up"></i>
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <i className="text-xl fa-regular fa-thumbs-up"></i> &nbsp;
          {post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    if (user === null) {
      return (
        <>
          <i className="text-xl fa-regular fa-thumbs-up"></i> &nbsp;
          {post.likes.length} Like{" "}
        </>
      );
    }
    return (
      <>
        <i className="text-xl fa-regular fa-thumbs-up"></i> &nbsp;Like
      </>
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
        <div className="relative">
          <span className="absolute bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 left-1 top-1 z-20">
            New
          </span>

          <img
            className="h-48 w-full"
            src={post.selectedFile || defaultImage}
            alt="post"
          />

          <div className="overlay absolute w-full h-full top-0 bg-[rgba(0,0,0,0.5)]"></div>

          <div className="overlay-text absolute top-5 left-5 text-white">
            <div className="name text-xl">{post.name}</div>
            <div className="text-sm ">{moment(post.createdAt).fromNow()}</div>
          </div>
        </div>

        <div className="p-5">
          <div className=" py-2 flex text-gray-400">
            {post.tags.map((tag) => `#${tag} `)}
          </div>
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">{post.message}</p>
          <div className="flex justify-around">
            <button className="text-[#1976d2]" onClick={likeHandler}>
              <Likes />
            </button>

            {user !== null && user._id === post.creator && (
              <button className="text-[#1976d2]" onClick={postDeleteHandler}>
                <i className="text-xl fa-solid fa-trash"></i> Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
