import React, { Component , useState} from "react";

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

            <h1>New Post</h1>
            <div className='parent'>
                <div className='child inline-block-child'>
                    <img src={dp_url} alt="profile_pic" width="50" height="50"/>
                </div>
                <div className='child inline-block-child'>
                    <h3>{Username}</h3>
                </div>
            </div>

            <div>
                <div className='child inline-block-child'>

                    <h3>Please enter url for image</h3>
                    <input type="url" id="imagePath"/>
                </div>
                <div className='child inline-block-child'>
                    <textarea type="text" id="content" rows={10} cols={50} placeholder="Please enter your content"/>
                </div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
};
export default CreatePost;