import './App.css'
import {Routes, Route} from "react-router-dom";

import Api from "./pages/Api.jsx";
import Post from "./pages/Post.jsx";
import Layout from "./pages/Layout.jsx";
import Menu from "./pages/Menu.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route path= "post" element={<Post/>}/>
                <Route path= "api" element={<Api/>}/>
                <Route index element={<Menu/>} />

                <Route path="*" element={<div>Ошибка 404</div>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
