import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';
import n from "./Navbar.module.css"
import { ChevronDownIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


// The default icon size is 1em (16px)


// Use the `boxSize` prop to change the icon size


// Use the `color` prop to change the icon color


// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     Text,
//     // MenuItemOption,
//     // MenuGroup,
//     // MenuOptionGroup,
//     // MenuDivider,
//     Button,
//   } from '@chakra-ui/react'
//   import { ChevronDownIcon} from '@chakra-ui/icons'


// const Menufunction=()=>{
//     return(
//         <>
//         <Menu>
//   <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
//     Actions
//   </MenuButton>
//   <MenuList>
//     <MenuItem>Download</MenuItem>
//     <MenuItem>Create a Copy</MenuItem>
//     <MenuItem>Mark as Draft</MenuItem>
//     <MenuItem>Delete</MenuItem>
//     <MenuItem>Attend a Workshop</MenuItem>
//   </MenuList>
// </Menu>

//         </>
//     )


// }












const Navbar = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <>
        <header className={`active ${show && 'hidden'}`}>
            

            <div className={n.main_div}>

                
                <div className={n.second_div}>
                    <div className={n.final_div}>
                        <img className={n.drop} src="https://cdn-icons-png.flaticon.com/128/2195/2195798.png" alt="globe" />
                        <p className={n.drop}>English</p>
                        <ChevronDownIcon/>
                        <div>
                        <div className={n.dropdown_content}>
                            <div className={n.content}>
                            
                            <div className={n.para}>
                            <p >日本語</p>
                            </div>
                          
                            <div className={n.para}>
                            <p >Deutsch</p>
                            </div>
                            
                            <div className={n.para}>
                            <p>English</p>
                            </div>
                            
                            <div className={n.para}><p>Español</p></div>
                           
                            <div className={n.para}> <p>Português</p></div>
                            
                            <div className={n.para}> <p>Français</p></div>

                            </div>
                    
      
    </div>

                        </div>
                      


                    </div>
                    <div style={{justifyContent:"space-between"}} className={n.final_div}>
                    <img className={n.drop} src="https://cdn-icons-png.flaticon.com/512/8089/8089114.png" alt="globe" />
                        <p className={n.drop}>Contact Sales</p>

                    </div>
                </div>

                <div className={n.second_div2} >
                    {/* <div className={n.final_div}> */}
                        <img className={n.drop} src="https://cdn-icons-png.flaticon.com/512/758/758784.png" alt="search icon" />
                    {/* </div> */}
                    {/* <div className={n.final_div}> */}
                    <Link to="/Login" className={n.drop}>Login</Link>

                    {/* </div> */}
                    {/* <div className={n.final_div}> */}
                    <p className={n.drop}>Customer Support</p>
                    {/* </div> */}
                    <div className={n.final_div}>
                    <p className={n.drop}>About</p> 
                    <div style={{marginLeft:"-50px"}}>
                    <ChevronDownIcon/>
                    <div>
                        <div className={n.dropdown_content2}>
                            <div className={n.content}>
                            
                            <div className={n.para2}>
                            <p >About Us</p>
                            </div>
                          
                            <div className={n.para2}>
                            <p >Carrers</p>
                            </div>
                            
                            <div className={n.para2}>
                            <p>Contact Us</p>
                            </div>
                            
                            <div className={n.para2}><p>Invester Relation</p></div>
                           
                            <div className={n.para2}> <p>Management Teams</p></div>
                            

                            </div>
                    
      
    </div>

                        </div>
                    </div>

                    </div>

                </div>




            </div>
            
        </header>
        {/* <div style={{marginTop:"70px"}}><NavbarAll/></div> */}
        
        
        </>
    )
}
export default Navbar