import React , {useState,useEffect} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio , webPortfolio,mobilePortfolio,designPortfolio  } from '../../data';

import './portfolio.scss'
const Portfolio = () => {

    const [selected,setSelected] = useState("featured");
    const [Data,setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id:"web",
            title:"Web App",

        },
        {
            id:"design",
            title:"Design",

        },
        {
            id:"mobile",
            title:"Mobile App",

        },
    ];

    useEffect(()=>{

        switch(selected) {

             case "featured":
                setData(featuredPortfolio);
                break;
                case "web":
                setData(webPortfolio);
                break;
                case "mobile":
                setData(mobilePortfolio);
                break;
                case "design":
                setData(designPortfolio);
                break;
                default :
                setData(featuredPortfolio);

        }

    }, [selected]);
    return (
        <div className='portfolio' id="portfolio">
          <h1>Portfolio</h1>
          <ul>
              {list.map((item)=>(
                  <PortfolioList title = {item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                  />
              ))}
          </ul>
          <div className='container'>
             {Data.map((d)=>(
                 <div className='item'>
                 <img 
                 src={d.img}
                 alt="" 
                 />
                 <h3>{d.title}</h3>
             </div> 

             ))}
          </div>
        </div>
    )
}

export default Portfolio
