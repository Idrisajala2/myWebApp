import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./components/pages/About"
import Detail from "./components/pages/Detail"
import Register from "./components/pages/Register"
import SignOut from "./components/pages/SignOut"
import Login from "./components/pages/Login"
import View from "./components/view/View"



function App() {
  return (
    <div>
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/signout" element={<SignOut/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/view" element={<View/>}/>
     <Route path="/detail/:id" element={<Detail/>}/>
   </Routes >
   </BrowserRouter>
    </div>
  );
} 

export default App;
