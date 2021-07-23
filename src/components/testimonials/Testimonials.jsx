import React from 'react'
import './testimonials.scss'
const Testimonials = () => {

   const  data = [
        {
            id:1,
            name:"Tom Durden",
            title:"Ceo of Lama",
            img:"assets/ceo.jfif",
            icon:"assets/youtube.png",
            desc:"loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master",
        },
        {
            id:2,
            name:"Bill Gates",
            title:"Microsoft Ceo",
            img:"assets/bill.jfif",
            icon:"https://img.flaticon.com/icons/png/512/906/906309.png",
            desc:"loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master",
            featured:true,
        },
        {
            id:3,
            name:"Elon Musk",
            title:"Ceo of Tesla",
            img:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
            icon:"https://ih1.redbubble.net/image.1093588980.4380/fposter,small,wall_texture,product,750x1000.jpg",
            desc:"loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master loussif chiheb is now training to be a React master",
        },
    ];
    return (
        <div className='testimonials' id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=> (

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={"assets/arrow.png"} alt="" className="left"/>
                        <img src={d.img} alt="" className="user" />
                        <img src={d.icon} alt="" className="right"/>                        
                    </div>
                    <div className="center">
                        {d.desc}</div>
                        
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
