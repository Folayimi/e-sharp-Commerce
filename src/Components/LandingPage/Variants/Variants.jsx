export const bloomingVariants = {
    visible:{
        scale:1.05,
        transition:{
            yoyo:Infinity,
            duration:.7
        }
    }
}
export const Appear={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{                                
            staggerChildren:3
        }
    }
}
export const graduallyAppear = {
    hidden:{            
        opacity:0,
    },
    visible:{            
        opacity:1,
        transition:{
            duration:2
        }
    }
}
export const InfromLeft={
    hidden:{
        opacity:0,
        x:'-100vw'
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:3,
            duration:3.5                                    
        }
    }
}
export const slowAppearance={
    hidden:{
        opacity:0,        
    },
    visible:{
        opacity:1,        
        transition:{
            delay:4,
            duration:2
        }        
    }
}
export const verySlowAppearance = {
    hidden:{            
        opacity:0,
    },
    visible:{            
        opacity:1,
        transition:{
            delay:7,
            duration:1.5
        }
    }
}
export const bloomingbuttonVariants ={
    hover:{
        scale:1.1,
        opacity:1,
        cursor:'pointer',                
        transition:{
            yoyo:Infinity,
            duration:.3
        }
    }
}

export const slideLeftVariants = {
    hidden:{
        opacity:0,
        x:'35vw'        
    },
    visible:{
        opacity:1,
        x:0,        
        transition:{
            duration:.8
        }
    }    
}

export const slideRightVariants = {
    hidden:{
        opacity:0,
        x:'-25vw'        
    },
    visible:{
        opacity:1,
        x:0,        
        transition:{
            duration:.8
        }
    }    
}