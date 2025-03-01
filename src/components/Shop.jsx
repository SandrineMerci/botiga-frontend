//import React from "react";
import "../styles/Shop.css";
import wallpaper from "../assets/shoppic.webp";
import dress1 from "../assets/dress1.webp"
import dress2 from "../assets/dress2.webp"
import dress3 from "../assets/dress3.webp"
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";



const Shop = () => {
  const cards = [
    {
      profileImage:wallpaper,
      image: dress1,
      cardTitle: "Toyota Corolla",
      cardContent: "$39.00 – $79.00",
      Button:"Shop Now"
    }, 
       
    {
      image: dress2,
      cardTitle: "Ford Mustang",
      cardContent: "$22.00 – $55.00",
      Button:"Shop Now"
    },
    {
      image: dress3,
      cardTitle: "Tesla Model 3",
      cardContent: "400$",
      Button:"Shop Now"
    },
   
  ];

 
  const cards3=[{
    profileImage:wallpaper
  }];

  return (

    <section className="Holder">
<div>
 

{cards3.map((cardData, index) => (
        <div className="profile-container" key={index}>
          
            <h1 className="shopheader">Shop</h1>
            <img src={cardData.profileImage} alt="" className="profileimage" />
         
        
            {/* <FaArrowRightLong className="icon" /> */}
          </div>
      
      ))}  <br /><br /> <br /><br />

</div>
<div className="rowcontent">
    
    <h5>Categories</h5>
   <span>Body Lotion11 product</span> <br /> 
  <span>Computer Gadget33 products</span> <br />
  <span>Electronics55 products </span> <br />
  <span>Fashion33 products </span><br />
  <span>General11 product </span> <br />
   <span>Shoes22 products </span><br />
   <span>Sports33 products </span><br />
   <span>Watch11 product </span><br />
    <span>Woman Clothes3 </span>
    <br></br>

    <hr></hr>
    <h5>Color</h5>
    <div className="circleicons">
    <FaCircle className="redcircle"/>  <FaCircle className="purplecirle" />
    </div> <br></br>
    <hr></hr>
    <h5>Rating</h5>
    <div className="circleicons">
    <FaStar className="star" />   <FaStar className="star" />    <FaStar className="star" />
    <FaStar className="star" />    <FaStar className="star" /> 
    <FaStar className="star" />
    </div>
    <div className="circleicons">
    <FaStar className="star" />   <FaStar className="star" />    <FaStar className="star" />
    <FaStar className="star" />    <FaStar className="star" /> 
    <FaRegStar/>
    </div>  <br></br>
    <hr></hr>
    <h5>Price</h5>


</div>
  

    
    {cards.map((cardData, index) => (
      <div className="card-container" key={index}>
          <div>
              <img src={cardData.image} alt="Card visual" className="image" />
          </div>
  
          {/* Image Description Below the Image */}
          <div className="text-1">{cardData.cardTitle}</div>
          <div className="text-2">{cardData.cardContent}</div>
  
          {/* Stars Below the Image */}
          <div className="iconcontainer">
              <FaStar className="star" /> <FaStar className="star" /> <FaStar className="star" />
              <FaStar className="star" /> <FaStar className="star" /> 
          </div>
  
          {/* Color Options */}
          <div className="circleicons">
              <FaCircle className="redcircle"/>  <FaCircle className="purplecircle" />
          </div>
      </div>
  ))}
  
        
    

     
    <div>
  {/* <button className="rounded-btn">See More</button> */}
      </div>  
    </section>
  );
};

export default Shop;