import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
function App(){
   const [size,setSize] = useState(window.innerWidth);
   const [onMobile,setOnMobile] = useState(false);
   const [logIn,setLogIn] = useState(false);
   useEffect(()=>{
      window.addEventListener('resize',()=>{
         setSize(window.innerWidth);
      });
      window.removeEventListener('resize',()=>{
         setSize(window.innerWidth);
      })
      if(size<=670){
         setOnMobile(true);
      }
      else if (size>670){
         setOnMobile(false);
      }
   },[size]);
     
   return (
         <>
            <Router>
               <AnimatePresence exitBeforeEnter>
               <Navbar onMobile={onMobile} logIn={logIn}/>            
               <Routes>
                  <Route exact path="/" element={<LandingPage onMobile={onMobile}/>}/>                                   
               </Routes>
               <Footer/>
               </AnimatePresence>
            </Router>
         </>
      )
   }

export default App;