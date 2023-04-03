import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'},
        {id: 4, title: 'Javascript4', body: 'Description'},
        {id: 5, title: 'Javascript5', body: 'Description'},
    ])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length ?
                <PostList posts={posts} deletePost={deletePost} title={'Список постов'}/>
                : <h1 style={{textAlign: "center"}}>Постов пока нет</h1>
            }
        </div>
    )
}

export default App;
