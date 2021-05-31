import React, { useState } from 'react';
import "./Grid.css"
import Menu from "./Menu";

function Grid() {
const [item, setItems] = useState(Menu);
  // const onChange=()=>{
  //   fileSelectHandler = 
  // }
  return (<>

<div className="menu-items container-fluid mt-5">
  <div className="row">
   <div className="col-11 mx-auto">
     <div className="row my-5">

       {
         item.map((el) => {
          const {id,name, image, price}= el;
          return( 
            <div className="item1 col-14 col-md-6 col-lg-6 col-xl-4">
            <div className="row Item-inside">
   
              <div className="col-12 col-, d-12 col-lg-4 img-div">
              < img src="https://wallpaperaccess.com/full/345330.jpg"
             alt-imgsrc="../img/logo.png"
             
             ></img> </div>
   
             <div className="col1">
               <div className="main-title"><h1>Product-Price</h1>
              
               <button type="submit" className="button">Add Product</button></div>
             </div>
             {/* <div className="col-12 col-, d-12 ">
            
             </div> */}
            </div>
          </div>
          )
         })
        }
          
        
     </div>
     </div> 
  </div>
</div>
   </>
  );

}

export default Grid;




