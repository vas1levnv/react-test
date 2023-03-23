import React, {useEffect, useState} from 'react';
import s from './Posts.module.scss'

const Posts = () => {

    const [posts, setPosts] = useState(null)
    const perPage = 3
    const pages = []
    const [currentPage, setCurrentPage] = useState('1')
    const [totalUsers, setTotalUsers] = useState('')

    const url = `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`

    const fetchPosts = async () => {
        const data = await fetch(url)
        const json = await data.json();
        setTotalUsers(json.total_pages)
        setPosts(json.data)
    }

    useEffect(() => {
        fetchPosts()
            .catch(console.error)

    }, [])

    if (totalUsers) {
        for (let i = 1; totalUsers + 1 > i; i++) {
            pages.push(i)
        }
    }

    const removePost = (p) => {
        setPosts(posts.filter((post) => post.id !== p))
    }

    const onPageItem = (e) => {
        console.log(e.target.innerText)
        setCurrentPage(e.target.innerText)
        fetchPosts().catch()
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* <li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {pages && pages.map(page => (
                        <li key={page} onClick={onPageItem} className="page-item"><span
                            className="page-link">{page}</span></li>
                    ))}

                    {/* <li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
        </div>
    );
};

export default Posts;