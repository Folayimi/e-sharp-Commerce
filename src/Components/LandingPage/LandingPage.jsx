import React from 'react';
import './landingPage.css';
import {Tdata,advertData} from './Data/pageData';
import happy2 from './Images/happy2.png';
import {motion} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'heroicons-react';
import {
    bloomingVariants,
    Appear,
    graduallyAppear,
    InfromLeft,
    slowAppearance,
    verySlowAppearance,
    bloomingbuttonVariants
} from './Variants/Variants'

const LandingPage = () =>{
    return(
        <>
        <motion.div className="container"
            variants={Appear}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="heroSection"
                variants={graduallyAppear}
            >
                <motion.div className="section"
                    variants={Appear}
                >
                    <motion.div className="section1"
                        variants={InfromLeft}
                    >
                        <p>Welcome To</p>
                        <div className="image">                            
                            <p>E</p>
                            <p>Sharp</p>
                        </div>                  
                        <h3>Be Bounded By No Limits</h3>   
                        <motion.button
                            variants={bloomingbuttonVariants}
                            whileHover="hover"
                        >
                            Learn More
                        </motion.button>   
                    </motion.div>
                    <motion.div className="section2"
                        variants={slowAppearance}
                    >
                        <div className="move">
                            <ChevronLeft/>
                        </div>                        
                        <div className="text">
                            <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Illo, suscipit aliquam 
                                maiores sapiente quaerat asperiores 
                                eligendi quibusdam ducimus minus accusantium 
                                provident! Molestias repellendus fuga facere
                            </p>
                        </div>
                        <div className="Image">                    
                            <img src={happy2} alt="hrs" />
                        </div>    
                        <div className="move">
                            <ChevronRight />
                        </div>                        
                    </motion.div>      
                </motion.div>      
                <div className="beneficiary">
                    <motion.p
                        variants={verySlowAppearance}
                    >Brought To You By Florinfix</motion.p>
                </div>
            </motion.div>            
            <motion.div className="topItems"
                variants={graduallyAppear}
            >
                <div className="topic">
                    <motion.p
                        variants={bloomingVariants}
                        animate="visible"
                    >Top Selling Items</motion.p>
                </div>
                <div className="Items">
                {
                    Tdata.map((items)=>{
                        return <TItem {...items} key={items.id}/>
                    })
                }
                </div>                
            </motion.div>
            <motion.div className="advert"
                variants={graduallyAppear}
            >
                {
                    advertData.map((adverts)=>{
                        return <Advert {...adverts} key={adverts.id}/>
                    })
                }
            </motion.div>
        </motion.div>
        </>
    )
}
export default LandingPage;

const TItem = ({img,type}) =>{
    return(
        <>
            <div className="Item">
                <div className="Image">
                    <img src={img} alt="img" />
                </div>
                <div className="type">
                    <p>{type}</p>
                </div>
            </div>
        </>
    )
}

const Advert = ({img,text})=>{
    return(
        <>
            <div className="advItem">
                <p>{text}</p>
                <div className="Image">
                    <img src={img} alt="img"/>
                </div>
            </div>
        </>
    )
}