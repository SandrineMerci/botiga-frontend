import "../styles/Vendors.css";
import { IoFilter } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { AiTwotoneAppstore } from "react-icons/ai";
import ve1 from "../assets/ve1.webp";
import ve2 from "../assets/ve2.webp";
import ve3 from "../assets/ve3.webp";
import ve4 from "../assets/ve4.webp";
import ve5 from "../assets/ve5.webp";
import ve6 from "../assets/ve6.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";


function Vendors() {
    return (
        <section>
            <h1 className="storeHeader">Store List</h1>
            <div className="all">
                <div className="horBar">
                    <p>Total stores showing: 6</p> 

                    {/* Updated Filter Button with Icon */}
                    <div className="filterBtn">
                        <button><IoFilter className="filterIcon" /> Filter</button>
                    </div>  

                    <div>
                        <span>Sort By:</span>
                        <span className="dropdown"> 
                            <select>
                                <option>Most Recent</option>
                                <option>Most Popular</option>
                                <option>Random</option>
                            </select>   
                        </span>
                        <span > <AiTwotoneAppstore className="app" /><HiMenu className="menu"/> </span>
                    </div> 
                </div> 
            </div>
            {/* sctions */}

            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src={ve1} alt="Card image cap"/>
                
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 2, 2025</small></p>
                <h5 className="card-title">Fusce suscipit risus tempor, blandit urna at, laoreet ex</h5> <br/><br/>
                <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ve2} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 4, 2025</small></p>
                  <h5 className="card-title">Fusce suscipit risus tempor, blandit urna at, laoreet ex</h5> <br/><br/>
                  <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ve3} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 14, 2025</small></p>
                  <h5 className="card-title">Pellentesque varius, diam vitae mattis luctus, mi mi cursus</h5> <br/><br/>
                  <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
            </div>
            {/* section 2 */}

            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src={ve4} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 2, 2025</small></p>
                  <h5 className="card-title">Sed magna dui, dignissim id felis vitae, consectetur</h5> <br/><br/>
                  <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ve5} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 4, 2025</small></p>
                  <h5 className="card-title">Fusce suscipit risus tempor, blandit urna at, laoreet ex</h5> <br/><br/>
                  <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ve6} alt="Card image cap"/>
                <div className="card-body">
                <p className="card-text"><small className="text-muted">Feb 14, 2025</small></p>
                  <h5 className="card-title">Pellentesque varius, diam vitae mattis luctus, mi mi cursus</h5> <br/><br/>
                  <IoIosArrowDroprightCircle  className="arrowIcon"/>
                </div>
              </div>
            </div>
        </section>
    );
}

export default Vendors;