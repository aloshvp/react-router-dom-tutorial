import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const PostComments = () => {

    const navigate = useNavigate();
    const { postId } = useParams();
    const [loader, setLoader] = useState(false);
    const [postComments, setPostComments] = useState([]);

    const fetchData = async () => {
        try {
            setLoader(true)
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const json = await data.json();
            setPostComments(json);
            // console.log(json)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoader(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loader) return <div>Loading</div>

    return (
        <div>

            <h1>Post Comments</h1>
            <div>
                {postComments?.map((comment) =>
                (
                    <p>
                        <b> {comment.email}</b>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </p>
                )
                )}
            </div >


            <button onClick={() => navigate(-1)}>Back</button>


        </div >
    )
}

export default PostComments;
