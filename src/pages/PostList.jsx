import React, { useEffect, useState } from 'react'

const PostList = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetchPostData();
    })

    const fetchPostData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const json = await data.json();
        setPostData(json);
    }

    return (
        <>
            <div>PostList</div>
            <div>
                {postData?.map((post) => (
                    <React.Fragment key={post?.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </React.Fragment>
                ))
                }
            </div >
        </>
    )
}

export default PostList