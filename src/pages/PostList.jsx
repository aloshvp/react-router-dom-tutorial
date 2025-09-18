import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard';

const PostList = () => {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPostData();
    }, [])

    const fetchPostData = async () => {
        setLoading(true);
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const json = await data.json();
            setPostData(json);
        }
        catch (err) {
            console.log("error" + err)
        }
        setLoading(false);
    }

    if (loading) return <p>Loading</p>

    return (
        <>
            <div>PostList</div>
            <div>
                {loading ? <p>Loading</p>
                    : (
                        postData?.map((post) => (
                            <div key={post?.id}>
                                <PostCard post={post} />
                            </div>
                        ))
                    )
                }
            </div >
        </>
    )
}

export default PostList