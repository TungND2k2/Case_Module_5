import './App.css';
import Header from "./compoment/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./page/home/home";
import LoginEmploy from "./page/employer/login";
import RegisterEmploy from "./page/employer/register";
import Footer from "./compoment/Footer";
import Logout from "./page/employer/logout";
import ListPost from "./page/post/listPost";
import LoginUser from "./page/user/login";
import RegisterUser from "./page/user/register";
import AddPosts from "./page/post/addPost";
function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="home" element={<Home/>}></Route>
            <Route path="add-post" element={<AddPosts/>}></Route>
            <Route path="login" element={<LoginEmploy/>}></Route>
            <Route path="register" element={<RegisterEmploy/>}></Route>
            <Route path="users/login" element={<LoginUser/>}></Route>
            <Route path="users/edit/:id" element={<EditUser/>}></Route>
            <Route path="users/register" element={<RegisterUser/>}></Route>
            <Route path="jobs" element={<ListPost/>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;
