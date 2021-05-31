import React from 'react';
import "../Components/Signup/contact.css";


function Contact() {
    return (
      <div class="container4">
      <div class="col-sm-6">
    
      <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Name</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>    
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Number</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Message</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Message" />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    
    
    </div>
    </div>
    
    

 
    )
}



export default Contact;

{/* <img src="https://source.unsplash.com/random" class="card-img-top" alt="..." /> */}
  {/* <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a> */}



 