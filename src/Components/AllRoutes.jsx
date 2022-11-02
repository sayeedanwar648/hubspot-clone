import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";



export default function AllRouts(){

    return(

        <>
        <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
        </div>
      


        </>
    )
}