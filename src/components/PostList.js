import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts && posts.map((post, index) => (
                <PostItem number={index + 1} deletePost={deletePost} key={post.id} post={post}/>
            ))}
        </div>
    );
};

export default PostList;