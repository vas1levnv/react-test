import React, {useEffect, useState} from 'react';
import s from './Posts.module.scss'

const Posts = () => {

    const [posts, setPosts] = useState(null)


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])


    return (
        <div className='mt-5'>
            <div className='posts-list'>
                {posts && posts.map(p => (
                    <div className={s.postItem} key={p.id}>
                        <div>{p.id}</div>
                        <div className={s.postItemTitle}>{p.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;