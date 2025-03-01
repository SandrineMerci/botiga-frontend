import Sidebar from "./DashboardSidebar";
import Navbar from "./DashboardNavbar";
import { Outlet } from "react-router-dom";


function DashboardLayout(){
    return (
        
        <div className="Main-outlet">
        <div className="SideBar-Element">
       <Sidebar />
       </div>
       <div className="NavandDashboard">
       <div className="NavBarDashboard"><Navbar />  </div>
       <div><Outlet /></div>
       </div> 
   </div>

    )
}
export default DashboardLayout;