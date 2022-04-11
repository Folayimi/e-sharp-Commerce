import React, {useState,useEffect} from 'react';
import './navBar.css';
// import {Search, X, Home} from 'heroicons-react';
import { Link } from "react-router-dom";
const Navbar = ({onMobile,logIn})=>{            
    const [background,setBackground] = useState('rgba(0,0,0,0)')            
    document.addEventListener('scroll',()=>{        
        if(window.pageYOffset>140){
            setBackground("rgba(0,0,0,0.7)");            
        }
        else{
            setBackground("rgba(0,0,0,0)");            
        }
    });
    document.removeEventListener('scroll',()=>{
        if(window.pageYOffset>140){
            setBackground("rgba(0,0,0,0.9)");            
        }
        else{
            setBackground("rgba(0,0,0,0)");            
        }
    });              
    return(
        <>           
            {
                logIn ?
                <div></div>
                :
                <div className="header" style={{background:background}}>
                    <div className="brandName">
                        <p>e-sharp</p>
                    </div>
                    <div className="navigator">
                        <div className="about">
                            <p>About</p>
                            <div className="navBar"/>
                        </div>
                        <div className="logIn">
                            <p>LogIn</p>
                            <div className="navBar"/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};
export default Navbar;