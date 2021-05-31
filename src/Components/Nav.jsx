import React from 'react';
import {NavLink} from "react-router-dom";
// import "../Components/Css.css";
import "../index.css"

function Nav() {
    return (<>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
<img src={"https://cdn.shopify.com/s/files/1/0035/2990/0150/products/sig_white_bf6533c1-f737-46ee-9f05-2797aa029c38_grande.jpg?v=1527809171"}  alt =""  
activeClassName="menu_active" to ="/home"  
style={{width: "46px"
,  height: "46px",  border: "1px solid white",marginTop: "0px"
}}
className ="div-img"/>
</li>
<br/>
<li className="nav-item active">
<NavLink   exact activeClassName="menu_active" to ="/home"  className="nav-link" href="#" > TSM </NavLink>    
</li>
<li className="nav-item active">
 <NavLink  exact  activeClassName="menu_active" to ="/about"  className="nav-link" href="#" > About Us </NavLink>     
</li>
<li className="nav-item active">
 <NavLink  exact  activeClassName="menu_active" to ="/product"  className="nav-link" href="#" > Product </NavLink>     
</li>

<li className="nav-item">
<NavLink   exact activeClassName="menu_active" to ="/contact"  className="nav-link" href="#" > Contact Us </NavLink>  
</li>

<li className="nav-item">
<NavLink  exact activeClassName="menu_active"  to ="/login"  className="nav-link" href="#" > Login </NavLink>  
</li>
<li className="nav-item">
<NavLink  exact activeClassName="menu_active"  to ="/signup"  className="nav-link" href="#" > Signup </NavLink>  
</li>
</ul> 
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
    )
}
export default Nav;

