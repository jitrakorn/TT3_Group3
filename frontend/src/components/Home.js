import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        api.get(`/getPost`).then(res => {
            setPosts(res.data);
        });
        api.get(`/getLikes`).then(res => {
            setLikes(res.data);
        });
        api.get(`/getComments`).then(res => {
            setComments(res.data);
        })
    }, [])

    return (
        <div >
            <h1>All Posts</h1>
            Welcome, user!&nbsp;
            <Link to="/profile">View Profile</Link>&nbsp;|&nbsp;
            <Link to="/createPost">Create Post</Link>
            {posts.map(post => (
                <div style={postStyle}>
                    <h2> {post[1]} </h2>
                    <span> {post[2]} </span> <br />
                    {
                        post[3].includes('format=mp4') ?
                            <video width='100%' loop autoPlay muted>
                                <source src={post[3]} />
                            </video> :
                            <img style={{ width: '100%' }} src={post[3]} />
                    } <br />

                    {likes.filter(like => like[0] === post[0]).length > 0 ?
                        <>
                            <span>Liked by </span>
                            {likes.filter(like => like[0] === post[0]).map((like, index, arr) => (
                                <span>
                                    {like[1]}{index === arr.length - 1 ? <span></span> : <span>, </span>}
                                </span>
                            ))}
                        </> :
                        <span>Be the first to like!</span>
                    }

                    {comments.filter(comment => comment[0] === post[0]).map(comment => (
                        <div style={commentStyle}>
                            <b>{comment[2]}</b> <br />
                            {comment[1]} <br />
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
    border: '1px solid #eee'
}

export default Home;
