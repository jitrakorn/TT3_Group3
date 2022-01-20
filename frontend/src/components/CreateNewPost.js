import React, { Component , useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
import Button from "bootstrap/js/src/button";
const CreatePost = (props) => {

    let Username = "Username"
    let dp_url = "https://www.shareicon.net/data/128x128/2017/06/21/887406_man_512x512.png"
    if (props.data !== "" || props.data != null)  {
        //
    }


    const handleSubmission = () => {
        var url = document.getElementById("imagePath").value;
        var content = document.getElementById("content").value;
        console.log(url)
        console.log(content)
    };
    
    return(

            <div class="col-xs-1" align="center">

                <h1>New Post</h1>
                <img  src={dp_url} alt="profile_pic" width="80" height="80"/>
                <h3>{Username}</h3>
                <div>
                    <h3>Please enter url for image</h3>
                    <input type="url" id="imagePath"/>
                </div>
                <br/>
                <textarea type="text" id="content" rows={10} cols={50} placeholder="Please enter your content"/>
                <div>
                 <button onClick={handleSubmission} className= "btn btn-primary">Submit</button>
                </div>
                <br/>
                <Link to="/"  className="btn btn-primary">
                   Home
                </Link>
        </div>
    )
};
export default CreatePost;