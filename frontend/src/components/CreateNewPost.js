import React, { Component , useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
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
        <div>
            <div class="col-xs-1" align="center">
                <div class="col-xs-1" align="center">
                    <h1>New Post</h1>
                </div>

                <div className="col-xs-1" align="center">
                    <img src={dp_url} alt="profile_pic" width="80" height="80"/>
                </div>
                <div className="col-xs-1" align="center">
                    <h3>{Username}</h3>
                </div>

            <div className="col-xs-1" align="center">

                <h3>Please enter url for image</h3>
                <input type="url" id="imagePath"/>
            </div>
            <br/>
            <div className="col-xs-1" align="center">
                <textarea type="text" id="content" rows={10} cols={50} placeholder="Please enter your content"/>
            </div>
                <div className="col-xs-1" align="center">
            <button onClick={handleSubmission}>Submit</button>
                </div>

        </div>
        </div>
    )
};
export default CreatePost;