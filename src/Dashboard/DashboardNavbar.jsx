import '../Dashboard/Dashboard-Styles/Dashboard.css';
function DashboardNavbar(){
    return(
        <nav className="navbar">
          <div className="logo">Botiga</div>
          <div class="search-container">
    <input type="text" class="search-input" placeholder="Search..."/>
    <button class="search-btn">🔍</button>
</div>
          <div className="profile-section">
          <div className="avatar">👤 <h6>Merci</h6></div>
      
        </div>
         
        </nav>
      );
    }
export default DashboardNavbar;