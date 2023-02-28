import './App.css';
import Header from "./compoment/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./page/home/home";
import LoginEmploy from "./page/employer/login";
import RegisterEmploy from "./page/employer/register";
import Footer from "./compoment/Footer";
import LoginUser from "./page/user/login";
import RegisterUser from "./page/user/register";
import Search from "./page/post/search";
import AddBlog from "./page/post/Add";
function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="home" element={<Home/>}></Route>
            <Route path="login" element={<LoginEmploy/>}></Route>
            <Route path="register" element={<RegisterEmploy/>}></Route>
            <Route path="add" element={<AddBlog/>}></Route>
            <Route path="users/login" element={<LoginUser/>}></Route>
            <Route path="users/register" element={<RegisterUser/>}></Route>
            <Route path="/jobs/search" element={<Search/>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;
