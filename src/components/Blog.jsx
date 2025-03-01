import '../styles/Blog.css';
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

function Blog(){
    return(
      <section className="blogSection">
        <h1 className="header1">Blog</h1>
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={blog1} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 2, 2025</small></p>
      <h5 className="card-title">Sed magna dui, dignissim id felis vitae, consectetur</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
         <a className="readMore">Read More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={blog2} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 4, 2025</small></p>
      <h5 className="card-title">Fusce suscipit risus tempor, blandit urna at, laoreet ex</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
      <a className="readMore">Read More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={blog3} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 14, 2025</small></p>
      <h5 className="card-title">Pellentesque varius, diam vitae mattis luctus, mi mi cursus</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
      <a className="readMore">Read More</a>
    </div>
  </div>
</div>

{/* second section */}

<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={blog4} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 2, 2025</small></p>
      <h5 className="card-title">Sed magna dui, dignissim id felis vitae, consectetur</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
         <a className="readMore">Read More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={blog5} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 4, 2025</small></p>
      <h5 className="card-title">Fusce suscipit risus tempor, blandit urna at, laoreet ex</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
      <a className="readMore">Read More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={blog6} alt="Card image cap"/>
    <div className="card-body">
    <p className="card-text"><small className="text-muted">Feb 14, 2025</small></p>
      <h5 className="card-title">Pellentesque varius, diam vitae mattis luctus, mi mi cursus</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit […]</p>
      <a className="readMore">Read More</a>
    </div>
  </div>
</div>

      </section>
    )
}

export default  Blog