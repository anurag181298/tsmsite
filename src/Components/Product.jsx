import React from 'react';
import "../Components/Signup/product.css";
import Img from "../Img/img.jpg"

 function Product() {
    return (
        <>
     <div class="card" style={{width: "18rem", marginTop:"3rem"}} > <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h1 class="card-title">Card title</h1>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}

export default Product;

// https://api.themoviedb.org/3/movie/550?api_key=19f84e11932abbc79e6d83f82d6d1045