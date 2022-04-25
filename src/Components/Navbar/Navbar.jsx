import React from 'react';
import './navBar.css';
import logo from "./logo.png";
import {motion} from 'framer-motion';
// import {Search, X, Home} from 'heroicons-react';

const logoVariants = {
    hidden:{
        opacity:0,        
    },
    visible:{
        opacity:1,        
        transition:{            
            duration:1.5,
            delay:3        
        }
    }
}
const headerVariants = {
    hidden:{
        opacity:0,
        y:'-100vh'
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            stiffness:100,
            mass:.5,
            damping:4,                               
            delay:1.5
        }
    }
}
const Navbar = ({onMobile,logIn})=>{                                           
    return(
        <>           
            {
                logIn ?
                <div></div>
                :                
                <motion.div className="header"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="brandName"
                        variants={logoVariants}
                    >
                        <img src={logo} alt="logo"></img>
                    </motion.div>
                    <div className="navigator"                        
                    >
                        <div className="navBtn"                            
                        >
                            <p>Home</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>About</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>Shop</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>Gallery</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>Blog</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>Contact</p>
                            <div className="navBar"/>
                        </div>
                        <div className="navBtn"                            
                        >
                            <p>LogIn</p>
                            <div className="navBar"/>
                        </div>
                    </div>
                </motion.div>
            }
        </>
    )
};
export default Navbar;