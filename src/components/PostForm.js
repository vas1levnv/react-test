import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({body: '', title: ''})
    }

    return (
        <form>
            <MyInput type="text"
                     value={post.title}
                     onChange={event => setPost({...post, title: event.target.value})}
                     placeholder="Название поста"/>
            <MyInput type="text"
                     value={post.body}
                     onChange={event => setPost({...post, body: event.target.value})}
                     placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;