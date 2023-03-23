import React, {useEffect, useState} from 'react';
import s from './Posts.module.scss'
import axios from "axios";

const Posts = () => {

    const [posts, setPosts] = useState(null)
    useEffect(() => {

        axios.get('https://reqres.in/api/users',{
        })
            .then(response => response.data.data)
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
                            <div className={s.postItemTitle}>{p.first_name}</div>
                            <div className={s.postItemBody}>{p.last_name}</div>
                        </div>
                        <button onClick={() => removePost(p.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;