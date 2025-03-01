import "../styles/Home2.css";
import img1 from "../assets/image1.jpg.webp";
import img2 from "../assets/image2.jpg.webp";
import img3 from "../assets/image3.jpg.webp";
import img4 from "../assets/image4.jpg.webp";
import img5 from "../assets/image5.jpg.webp";
import img6 from "../assets/image6.jpg.webp";

import img7 from "../assets/image7.webp";
import img8 from "../assets/image8.webp";
import img9 from "../assets/image9.webp";

import ve1 from "../assets/ve1.webp";
import ve2 from "../assets/ve2.webp";
import ve3 from "../assets/ve3.webp";
import ve4 from "../assets/ve4.webp";
import ve5 from "../assets/ve5.webp";
import ve6 from "../assets/ve6.webp";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

import img10 from "../assets/image10.webp";
import img11 from "../assets/image11.webp";
import img12 from "../assets/image12.webp";

import img13 from "../assets/ins1.webp";
import img14 from "../assets/ins2.webp";
import img15 from "../assets/ins3.webp";
import img16 from "../assets/ins4.webp";
import img17 from "../assets/ins5.webp";
import img18 from "../assets/ins6.webp";


import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Home = () => {
  const cards = [
    {
      id:1,
      image: img1,
      cardTitle: "Body Lotion",
      cardContent: "350$",
      Button: "Shop Now",
    },
    {
      id:2,
      image: img2,
      cardTitle: "Sports",
      cardContent: "200$",
      Button: "Shop Now",
    },
    {
      id:3,
      image: img3,
      cardTitle: "Computer Gadget",
      cardContent: "400$",
      Button: "Shop Now",
    },
    {
      id:4,
      image: img4,
      cardTitle: "Electronics",
      cardContent: "400$",
      Button: "Shop Now",
    },
    {
      id:5,
      image: img5,
      cardTitle: "Watch",
      cardContent: "400$",
      Button: "Shop Now",
    },
    {
      id:6,
      image: img6,
      cardTitle: "Woman Clothes",
      cardContent: "400$",
      Button: "Shop Now",
    },
  ];
  
  const cards2 = [
    {
      id:7,
      image: img7,
      cardTitle: "All In One Bottle",
      cardContent: "$22.00 – $55.00",
    },
    {
      id:8,
      image: img8,
      cardTitle: "Amazon Alexa",
      cardContent: "$49.00 – $69.00",
      
    },
    {
      id:9,
      image: img9,
      cardTitle: "Headset Gamer Legion",
      cardContent: "$22.00 – $55.00",
      
    },
    
  ];
  const cards3 = [
    {
      id:10,
      image: ve1,
      cardTitle: "Santa Monica's Store",
      cardContent: "New York, NY",
    },
    {
      id:11,
      image: ve2,
      cardTitle: "Josh Doe's Store",
      cardContent: "New York, NY",
      
    },
    {
      id:12,
      image: ve3,
      cardTitle: "Digital Good's Store",
      cardContent: "New York, NY",
      
    },
    
    
  ];
  const cards4 = [
    {
      id:13,
      image: ve4,
      cardTitle: "Jessica's Store",
      cardContent: "New York, NY",
      
    },
    {
      id:14,
      image: ve5,
      cardTitle: "The Glass Store",
      cardContent: "New York, NY",
      
    },
    {
      id:15,
      image: ve6,
      cardTitle: "John Doe's Store",
      cardContent: "New York, NY",
      
    },
  ];
  const cards5 = [
    {
      image: icon1,
    },
    {
      image: icon2,  
    },
    {
      image: icon3, 
    },
  ];
  const cards6 = [
    {
      image: img7,
      cardTitle: "All In One Bottle",
      cardContent: "$22.00 – $55.00",
    },
    {
      image: img8,
      cardTitle: "Amazon Alexa",
      cardContent: "$49.00 – $69.00",
      
    },
    {
      image: img9,
      cardTitle: "Headset Gamer Legion",
      cardContent: "$22.00 – $55.00",
      
    },
    
  ];
  const cards7 = [
    {
      image: img10,
      cardTitle: "All In One Bottle",
      cardContent: "$22.00 – $55.00",
    },
    {
      image: img11,
      cardTitle: "Amazon Alexa",
      cardContent: "$49.00 – $69.00",
      
    },
    {
      image: img12,
      cardTitle: "Headset Gamer Legion",
      cardContent: "$22.00 – $55.00",
      
    },
    
  ];
  const cards8 = [
    {
      image: img13,
    },
    {
      image: img14, 
    },
    {
      image: img15,
    },
    {
      image: img16,
    },
    {
      image: img17,
    },
    {
      image: img18,
    },
    
  ];
  const navigation = useNavigate();

    const handleNavigate = (id) => {
        navigation(`/SinglePage/${id}`)
    }

  return (
    <section className="Holder2">
      <div className="row-content">
        <div>
          <span>Electronics</span> <br />
          <span>Computer Gadget</span> <br />
          <span>Fashion </span> <br />
          <span>Body Lotion </span>
          <br />
          <span>Sports </span> <br />
          <span>Woman Clothes</span>
          <br />
          <span>Shoes </span>
          <br />
          <span>Watches </span>
          <br />
        </div>

        <div className="header2">
          <h1>Explore our latest and</h1>
          <h1>greatest electronics</h1>
          <button className="shopbtn"> Shop Now </button>
        </div>
      </div>

      <h1 className="header3">Popular Categories</h1>
      <div className="card-container-row">
        {cards.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="image" />
              <div>{cardData.cardTitle} </div>
              <button type='button' className='button1' onClick={()=>handleNavigate(cardData.id)}>
                    View</button>
            </div>
          </div>
          
        ))}
      </div>
      <h1 className="header3">New Arrival Products</h1>
      <div className="card-container-row">
        {cards2.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="image" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div><i>{cardData.cardContent} </i></div>
              <FaStar className="star"/>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star"/>
              <FaStar className="star" />

              <div className="circle">
              <FaCircle />
              <FaCircle />
              <FaCircle />
              <FaCircle />
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <button className="vendors"> Shop Now</button>
      <div>
      <h1 className="header3">Our Vendor List</h1>
        <div className="card-container-row">
        {cards3.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="image" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div>{cardData.cardContent}</div>
              <div className="arrow">
              <IoIosArrowDroprightCircle />
              </div>
            </div>
          </div>
          
        ))}

      </div>
      </div>
      <div className="card-container-row">
        {cards4.map((cardData, index) => (
          <div className="card-container2" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="image" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div><i>{cardData.cardContent} </i></div>
              <div className="arrow">
              <IoIosArrowDroprightCircle />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div/>
      <button className="vendors">  See all Vendors</button>
      <h1 className="header3">Why People Choose Us</h1>
      <div className="card-container-row">
        {cards5.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="imgcard" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div><h5>Easy Returns</h5>
              <p>Our return policy is simple and that is why customers love our shop.</p>
              </div>
              <div/>
            </div>
            <div/>
          </div>
          
        ))}
      <div/>
      <h1 className="header3">New Arrival Products</h1>
      <div className="card-container-row">
        {cards2.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="image" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div><i>{cardData.cardContent} </i></div>
              <FaStar className="star"/>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star"/>
              <FaStar className="star" />

              <div className="circle">
              <FaCircle />
              <FaCircle />
              <FaCircle />
              <FaCircle />
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div className="card-container-row">
        {cards7.map((cardData, index) => (
          <div className="card-container5" key={index}>
            <div className="card-container5">
              <img src={cardData.image} alt="Card visual" className="imgcard" />
              <div><b>{cardData.cardTitle}</b> </div>
              <div>{cardData.cardContent} </div>
              <FaStar className="star"/>
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star"/>
              <FaStar className="star" />

              <div className="circle2">
              <FaCircle />
              <FaCircle />
              <FaCircle />
              <FaCircle />
              </div>
              <div/>
            </div>
            <div/>
          </div>
          
        ))}
        
      <div/>
      </div>
      </div>
      <div/>
      <button className="vendors">  View All Products</button>
      <h1 className="header3">Follow us on @instagram</h1>
      <div className="card-container-row">
        {cards8.map((cardData, index) => (
          <div className="card-container1" key={index}>
            <div className="card-container2">
              <img src={cardData.image} alt="Card visual" className="imgcard" />
              <div/>
            </div>
            <div/>
          </div>
          
        ))}
      </div>
      

      
      
      <div>
        {/* <button className="rounded-btn">See More</button> */}
      </div>
    </section>
    
  );
};

export default Home;