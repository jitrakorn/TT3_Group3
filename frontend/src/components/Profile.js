import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import POST from "../Data/POST.json";
import POST_COMMENT from "../Data/POST_COMMENT.json";
import USER from "../Data/USER.json";
import LIKED_POST from "../Data/LIKED_POST.json";

const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        setPosts(POST);
        setComments(POST_COMMENT);
        setUsers(USER);
        setLikes(LIKED_POST);
    })

    return (
        <div >
            <h1>{users[0].Name}</h1>
            <b>Birhday: </b>{users[0].Birthday} ({users[0].Age} years old)<br/>
            <b>Email: </b>{users[0].Email}<br/>
            <b>Phone: </b>{users[0].Phone}<br/>
            <b>City: </b>{users[0].City}, {users[0].Country}

            <h1>My Posts</h1>
            Create Post button
            {posts.map(post => (
                <div style={postStyle}>
                    <h2> {post.Post_Title} </h2>
                    <span>Edit . Delete</span><br/>
                    <span> {post.Post_Description} </span> <br/>
                    {
                        post.Post_image.includes('format=mp4') ?
                        <video width ='100%' loop autoPlay muted>
                            <source src={post.Post_image} />  
                        </video> :
                        <img style={{width: '100%'}} src = {post.Post_image} />
                    } <br/>
                    

                    {likes.filter(like => like.Post_ID === post.Post_ID).length > 0 ?
                        <>
                            <span>Liked by </span>
                            {likes.filter(like => like.Post_ID === post.Post_ID).map((like, index, arr) => (
                                <span>
                                    {users.filter(user => user.User_ID === like.User_ID)[0].Name}{index === arr.length - 1 ? <span></span> : <span>, </span>}
                                </span>
                            ))}
                        </> :
                        <span>Be the first to like!</span>
                    }
                    
                    {comments.filter(comment => comment.Post_ID === post.Post_ID).map(comment => (
                        <div style={commentStyle}>
                            <b>{users.filter(user => user.User_ID === comment.User_ID)[0].Name}</b> <br/>
                            {comment.Comment} <br/>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};

const postStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #eee',
    boxShadow: '1px 5px 10px #9E9E9E',
    width: '800px'
}

const commentStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #eee',
}

export default Profile;
