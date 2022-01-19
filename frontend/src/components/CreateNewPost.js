import React, { Component , useState} from "react";

const CreatePost = () => {
    const [selectedFile, setSelectedFile] = useState();
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleSubmission = () => {
    };

    return(
        <div>
            <h1>New Post</h1>
            <div className='parent'>
                <div className='child inline-block-child'>
                    <img src="public/logo192.png" alt="profile_pic" width="50" height="50"/>
                </div>
                <div className='child inline-block-child'>
                    <h3>Username</h3>
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