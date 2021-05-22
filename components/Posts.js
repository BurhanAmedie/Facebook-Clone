import React from 'react'
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase'
import Post from './Post';

function Posts({ posts }) {
    const [ realtimePosts ] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );
        
    return (
        <div > 
            { 
            realtimePosts ?
            realtimePosts?.docs.map( (post) => (
                <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email= {post.data().email}
                postImage= { post.data().postImage}
                image ={post.data().image}
                timestamp ={post.data().timestamp}
                 />
            )) : 
            posts.map((post) => (
                <Post
                key={post.id}
                name={post.name}
                message={post.message}
                email= {post.email}
                postImage= { post.postImage}
                image ={post.image}
                timestamp ={post.timestamp}
                 />
            ))  }
            
        </div>
    )
}

export default Posts
