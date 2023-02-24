import './App.css';
import Header from "./compoment/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./page/home/home";
import LoginEmploy from "./page/employer/login";
import RegisterEmploy from "./page/employer/register";
import Footer from "./compoment/Footer";
import Logout from "./page/employer/logout";
import ListPost from "./page/post/listPost";
function App() {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="home" element={<Home/>}></Route>
            <Route path="login" element={<LoginEmploy/>}></Route>
            <Route path="register" element={<RegisterEmploy/>}></Route>
            <Route path="jobs" element={<ListPost/>}></Route>
        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;
