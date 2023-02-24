import './App.css';
import Header from "./compoment/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./page/home/home";
import LoginEmploy from "./page/employer/login";
import RegisterEmploy from "./page/employer/register";
import Footer from "./compoment/Footer";
import Logout from "./page/employer/logout";
import LoginUser from "./page/user/login";
import RegisterUser from "./page/user/register";
function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<LoginEmploy/>}/>
            <Route path="users/login" element={<LoginUser/>}/>
            <Route path="users/register" element={<RegisterUser/>}/>
            <Route path="register" element={<RegisterEmploy/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
