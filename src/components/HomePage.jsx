import React from "react";


import "../styles/Home2.css";
import img1 from "../assets/image1.jpg.webp";
import img2 from "../assets/image2.jpg.webp";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export const ProductList= [
    {
        id: 1,
        image: img1,
        cardTitle:'oil',
    },
    {
        id: 2,
        image: img2,
        cardTitle:'sugar',
    }
]
function HomePage(){
    const navigation = useNavigate();

    const handleNavigate = (id) => {
        navigation(`/singlecard/${id}`)
    }
    return(
        <div>
            <div>
        {ProductList.map((item) =>(
            <div>
                <div><img src={item.image} alt="Card Image" /></div>
                <div>{item.cardTitle}</div>
                <button type='button' className='button1' onClick={()=>handleNavigate(item.id)}>
                    View</button>
                
            </div>
        ))}
            </div>
        </div>
    )
}
export default HomePage;