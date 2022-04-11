import React from 'react';
// import Home from './Components/home';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
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
               <Navbar onMobile={onMobile} logIn={logIn}/>            
               <Routes>
                  <Route exact path="/" element={<LandingPage onMobile={onMobile}/>}/>                  
                  {/* <Route path="/home" element={<Home onMobile={onMobile}/>}/>                               */}
                  {/* <Route path="/categories/:name" element={<Category onMobile={onMobile}/>}/>
                  <Route path="/products/:name" element={<Product/>}/>
                  <Route path="/items/:name" element={<Item/>}/> */}
               </Routes>
               <Footer/>
            </Router>
         </>
      )
   }

export default App;