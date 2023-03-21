import React, {useEffect, useState} from 'react';
import s from './Posts.module.scss'

const Posts = () => {

    const [posts, setPosts] = useState(null)
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => response.json())
            .then(response => setPosts(response))
    }, [])

    const removePost = (p) => {
        setPosts(posts.filter((post) => post.id !== p))
    }


    return (
        <div className='mt-5'>
            <div className='posts-list'>
                {posts && posts.map(p => (
                    <div className={s.postItem} key={p.id}>
                        <div>{p.id}</div>
                        <div>
                            <div className={s.postItemTitle}>{p.title}</div>
                            <div className={s.postItemBody}>{p.body}</div>
                        </div>
                        <button onClick={() => removePost(p.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;