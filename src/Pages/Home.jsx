import NavbarAll from "../Components/BottomNav";
import Data from "../Components/Data";
import Footer from "../Components/Footer";
import Growing from "../Components/Growing";
import LearnMore from "../Components/LearnMore";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import Poster from "../Components/Poster";
import Service from "../Components/Service";




export default function Home(){
    return(
        <>
        
        <Navbar/>
      <div style={{marginTop:"75px"}}><NavbarAll/></div>
    <div><LearnMore/></div>
    <div><Poster/></div>
    <div><Service/></div>
    <div><Data/></div>
    <div><Logo/></div>
    <div><Growing/></div>
    <div><Footer/></div>
    
    
        </>
    )
}