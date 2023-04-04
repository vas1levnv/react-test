import './styles/App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";


function App() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/posts'}>Посты</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
