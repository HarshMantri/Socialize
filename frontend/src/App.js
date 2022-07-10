import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Feed from "./components/feed/Feed";
import Navbar from "./components/layout/Navbar";
import PostDetail from "./components/posts/PostDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddPost from "./components/posts/AddPost";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route path="/post/:id" element={<PostDetail />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/addpost" element={<AddPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
