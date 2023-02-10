import React, { useContext, useState } from "react";
import postContext from "../../context/post/postContext";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const context = useContext(postContext);
  const { addPost, getPosts } = context;
  const user = JSON.parse(localStorage.getItem("user"));
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, message, tags, selectedFile } = postData;
    addPost(user.name, title, message, tags, selectedFile);
    navigate("/");
    getPosts();
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  return (
    <div className="container w-[80%] md:w-[50%] mx-auto my-3">
      <h2 className="text-center text-2xl">Creating a Memory</h2>
      <form className="my-5" onSubmit={submitHandler}>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            name="title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            value={postData.message}
            name="message"
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message..."
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tags
          </label>
          <input
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
            value={postData.tags}
            name="tags"
            type="text"
            placeholder="Tags (coma separated)"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <FileBase
            value={postData.selectedFile}
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            aria-describedby="user_avatar_help"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mb-2 w-1/2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
