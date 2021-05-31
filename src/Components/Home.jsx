import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Components/Home/home.css"

 function Home() {
    return (
        <>

          <section id="header" className="container">
              <div className="container-fluid">
                 <div className="row2">
                     {/* <div className="col-10 mx-auto"> */}
                          
                         {/* <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> */}

                             <h5 style={{fontSize:"2.8rem", marginTop:"1rem"}}>Watch Movies With <span>   </span>
                             <strong>TSM</strong>  </h5>
                             <br/>
                             <h5 className="my-1" style={{fontSize:"2.5rem" , paddingTop:"2px"}}>We are providing 
                             <br/> latest movies !</h5>
                             
                             <div className="mt-3">
                                 <NavLink to="/home" className="btn-get-started">
                                     Get Started
                                 </NavLink>
       

                             </div>
                             <div className="col-lg-6 order-1 order-lg-2 header-img">                                 
                                
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://besthqwallpapers.com/Uploads/22-2-2019/81386/thumb2-4k-avengers-endgame-characters-2019-movie-avengers-4.jpg
      " className="img-fluid animated" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/24t2Yct.jpg"
     className="img-fluid animated" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.G8PYSdBlBtnMvrlcXHNubgHaEC?pid=ImgDet&rs=1" 
     className="img-fluid animated" alt="..." />
    </div>
  </div>
</div>
                             </div>

                         </div>
                     </div>
                 
                 </section> 
                
                </>
    )
}

export default Home;