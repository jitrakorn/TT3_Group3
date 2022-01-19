import React, { Component , useState} from "react";

const CreatePost = (props) => {

    const Username = "Username"
    const dp_url = "https://www.iconfinder.com/icons/2426035/login_user_id_ui_avatar_account_people_icon"
    if (props.data !== "" || props.data != null)  {
        //
    }


    const handleSubmission = () => {
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
                <div>
                    <h3>Please enter url for image</h3>
                    <input type="url" id="imagePath"/>
                </div>
                <div className='child inline-block-child-flex'>
                    <textarea type="text" id="content" rows={10} cols={50} placeholder="Please enter your content"/>
                </div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )
};
export default CreatePost;