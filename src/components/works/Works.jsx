import React from 'react'
import { useState } from 'react'
import './works.scss'
const Works = () => {

    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id:"1",
            icon:"assets/mobile.png",
            title:"Web Application",
            desc:"this is a project made by loussif chiheb for knowledge and training goals",
            img:"assets/web.jfif",
        },
        {
            id:"2",
            icon:"assets/mobile.png",
            title:"Mobile Application",
            desc:"this is a project made by loussif chiheb for knowledge and training goals",
            img:"assets/mobile.jfif",
        },
        {
            id:"3",
            icon:"assets/mobile.png",
            title:"Web Design",
            desc:"this is a project made by loussif chiheb for knowledge and training goals",
            img:"assets/design.jfif",
        }
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2)
        :  setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);

    };
    return (
        <div className='works' id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(

                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""></img>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                  {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>                    
                </div>
                ))}
                 
            </div>
            <img src="assets/arrow.png" alt ="" className="arrow left" onClick={()=>handleClick("left")}></img>
            <img src="assets/arrow.png" alt ="" className="arrow right" onClick={()=>handleClick("right")}></img>
        </div>
    )
}

export default Works
