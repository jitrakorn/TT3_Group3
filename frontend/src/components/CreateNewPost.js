import React, { Component } from "react";
class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    render() {
        return (
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
                <div className='parent'>
                    <div className='child inline-block-child-flex'>
                        <img src={this.state.image} height={200} width={200} />
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                    </div>
                    <div className='child inline-block-child-flex'>
                        <textarea type={"text"} rows={10} cols={50}/>
                    </div>
                </div>

            </div>

        );
    }
}
export default CreatePost;