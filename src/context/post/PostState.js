import postContext from "./postContext";

import React, { useState } from 'react'

const PostState = (props) => {
    const host = 'https://memories-backend-o1jt.onrender.com'
    // const host = 'http://localhost:8000'
    const postInitial = []

    const [alert, setAlert] = useState(null)
    const [posts, setPosts] = useState(postInitial)

    const getPosts = async () => {
        const response = await fetch(`${host}/posts`)
        const json = await response.json()
        setPosts(json)

    }

    const addPost = async (name, title, message, tags, selectedFile) => {
        const response = await fetch(`${host}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({ name, title, message, tags, selectedFile })
        })
        const json = await response.json()
        console.log(json);
    }

    const deletePost = async (post) => {
        const response = await fetch(`${host}/posts/${post._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
        })
        const json = await response.json()
        console.log(json);
    }

    const likePost = async (post) => {
        const response = await fetch(`${host}/posts/${post._id}/likePost`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
        })
        const json = await response.json()
        console.log(json);
    }

    const getUserPost = async (post) => {
        const response = await fetch(`${host}/posts/userPost/${post.creator}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'auth-token': localStorage.getItem("token")
            },
        })
        const json = await response.json()
        return json.length
    }


    const showAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const user = JSON.parse(localStorage.getItem("user"));
    // const user = (localStorage.getItem("user"));
    // console.table(user);

    const defaultImage =
        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

    return (
        <postContext.Provider value={{ posts, getPosts, addPost, deletePost, likePost, user, defaultImage, showAlert, getUserPost }}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState