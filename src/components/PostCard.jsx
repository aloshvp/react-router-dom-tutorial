import React from 'react'

const PostCard = ({ post }) => {
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </ >
    )
}

export default PostCard