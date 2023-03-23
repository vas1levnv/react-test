import Auth from "./components/Auth";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import useToken from "./useToken";

function App() {
    const {token, setToken} = useToken()

    if (!token) {
        return <Auth setToken={setToken}/>
    }

    return (
        <BrowserRouter>
            <div className="App container">
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                {/*    <Route path='/auth' element={<Auth setToken={setToken}/>}/>*/}
                    <Route path='/posts' element={<Posts/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
