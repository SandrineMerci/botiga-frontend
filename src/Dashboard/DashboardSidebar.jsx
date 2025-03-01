import React from "react";
import { MdContactPhone } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

function DashboardSidebar(){
return(

       <div className="sidebar">
  
       
       
        <ul className="board-list">
          <li>Customers</li>
          <li>Vendors</li>
          <li><FaShopify /> Shop</li>
          <li><FaBloggerB /> Blog</li>
          <li><MdContactPhone /> Contact</li>
          <li><MdOutlineProductionQuantityLimits /> HomeProduct</li>
        </ul>
    </div>
)
}
export default DashboardSidebar;