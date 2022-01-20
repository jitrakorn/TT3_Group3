import React, {Component, useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Route, useParams} from 'react-router-dom'
import POST from "../Data/POST.json";
import { useNavigate } from "react-router-dom";


const EditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    function deletePost(){
       // Delete Post
        navigate("/", { replace: true });
    }
    function edit() {
        //submit post to database
    }
    let p_id = postId == null ? 1 : postId
    const [post,setPost] = useState([]);
    useEffect(() => {
        setPost(POST[p_id])
    })


    return (
        <div className="col-xs-1" align="center">
            <h1>Edit Post</h1>
            <br/>
            <input type="url" id="url" value={post['Post_image']} />
            <br/>
            <br/>
            <textarea type="text" id="content" rows={10} cols={50} id="content" value={post['Post_Description']}/>
            <br/>
            <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={edit}>Edit Post</button>
                <button className="btn btn-primary" onClick={deletePost}>Delete Post</button>

            </div>

        </div>

    )

};

export default EditPost;

