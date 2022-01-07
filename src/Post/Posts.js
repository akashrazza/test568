import React from 'react';
import PostSchema from './PostSchema';
import classes from './Post.module.css';
import CreatePost from './createPost';

function Posts(){
    return(
        <div className={classes.postLayout}>
            <CreatePost />
            <PostSchema />
            <PostSchema />
            <PostSchema />
            <PostSchema />
            <PostSchema />
            <PostSchema />
            <PostSchema />
            <PostSchema />
        </div>

    )
}
export default Posts;