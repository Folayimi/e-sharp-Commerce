import React,{useEffect,useState} from 'react';
import './landingPage.css';
import {Tdata,advertData,sliderData} from './Data/pageData';
import {motion} from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'heroicons-react';
import {
    bloomingVariants,
    Appear,
    graduallyAppear,
    InfromLeft,
    slowAppearance,
    verySlowAppearance,
    bloomingbuttonVariants,
    slideLeftVariants,
    slideRightVariants
} from './Variants/Variants'

const LandingPage = () =>{
    const [variant,setVariant] = useState(slowAppearance);
    const [autoSlide,setAutoSlide] = useState(true);
    const [moveRight,setMoveRight] = useState(false);
    const [moveLeft,setMoveLeft] = useState(false);
    const [Id,setId] = useState(1);
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
                            Get Started
                        </motion.button>   
                    </motion.div>              
                    <motion.div className="move"
                        variants={slowAppearance}
                        onClick={()=>{
                            setMoveLeft(false);
                            setAutoSlide(false);   
                            setVariant(slideRightVariants);                         
                            setMoveRight(true); 
                            if(Id>1){
                                setId(Id-1);
                            }              
                            else{
                                setId(sliderData.length)
                            }                                                                                     
                        }}
                    >
                        <ChevronLeft/>
                    </motion.div>                                          
                        {
                            sliderData.map((slides)=>{
                                return <Slider {...slides} key={slides.id} 
                                    variant={variant} setVariant={setVariant}
                                    sliderData={sliderData} Id={Id} 
                                    setId={setId} autoSlide={autoSlide}
                                    moveRight={moveRight} setMoveRight={setMoveRight}
                                    moveLeft={moveLeft} setMoveLeft={setMoveLeft}
                                    setAutoSlide={setAutoSlide}
                                />
                            })                            
                        }      
                    <motion.div className="move"
                        variants={slowAppearance}
                        onClick={()=>{
                            setMoveRight(false);
                            setAutoSlide(false);    
                            setVariant(slideLeftVariants);                        
                            setMoveLeft(true);
                            if(Id<sliderData.length){
                                setId(Id+1);
                            }
                            else{
                                setId(1)
                            }                            
                        }}
                    >
                        <ChevronRight />
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

const Slider = (
    {id,variant,setVariant,sliderData,Id,setId,autoSlide,setAutoSlide,
    moveLeft,setMoveLeft,moveRight,setMoveRight}
)=>{    
    const slide = sliderData.find((content)=>content.id===parseInt(Id))  
    useEffect(()=>{                         
        var timer1;        
        if(autoSlide){ 
            clearTimeout(timer1)           
            setVariant(slideLeftVariants); 
            setMoveLeft(false)
            setMoveRight(false)            
            timer1 =setTimeout(()=>{   
                if(Id<sliderData.length){                    
                    setId(Id+1);                    
                }  
                else{                                       
                    setId(1);
                }                                                           
            },8000)                                               
        }           
        else{
            if(moveRight || moveLeft){ 
                clearTimeout(timer1);                
                setAutoSlide(true);                                                                                              
            }                       
        }    
    },[Id,autoSlide])
    return(
        <>
            {
                (Id===id) && 
                <motion.div className="section2"
                    variants={variant}
                    initial="hidden" 
                    animate="visible"
                    exit="exit"
                >            
                    <div className="text">
                        <p>{slide.description}</p>
                    </div>
                    <div className="Image">                    
                        <img src={slide.img} alt="hrs" />
                    </div>            
                </motion.div>
            }                
        </>
    )  
}

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

