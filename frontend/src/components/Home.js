import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import POST from "../Data/POST.json";
import POST_COMMENT from "../Data/POST_COMMENT.json";
import USER from "../Data/USER.json";
import LIKED_POST from "../Data/LIKED_POST.json";

const Home = () => {
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
            <h1>All Posts</h1>
            {posts.map(post => (
                <div style={postStyle}>
                    <h2> {post.Post_Title} </h2>
                    <span> {post.Post_Description} </span> <br/>
                    <img style={{width: '750px'}} src = {post.Post_image} /><br/>

                    <span>Liked by </span>
                    {likes.filter(like => like.Post_ID === post.Post_ID).map((like, index) => (
                        <span>{users.filter(user => user.User_ID === like.User_ID)[0].Name}, </span>
                    ))}
                    
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

export default Home;
