import React from 'react';
import './landingPage.css';
import img2 from './Images/img7.jfif';
import {Tdata} from './Data/pageData';

const LandingPage = () =>{
    return(
        <>
            <div className="heroSection">
                <div className="Image">
                    <img src={img2} alt="hrs" />
                </div>                
            </div>            
            <div className="topItems">
                <div className="topic">
                    <p>Top Selling Items</p>
                </div>
                <div className="Items">
                {
                    Tdata.map((items)=>{
                        return <TItem {...items} key={items.id}/>
                    })
                }
                </div>                
            </div>
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