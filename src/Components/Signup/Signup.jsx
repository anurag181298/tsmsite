import React from 'react';
import "./signup.css";

function Signup() {
    return (
       <>
       <div className="container1">
<div className="row1">
    <form action="/register" method="POST" />
<div className="form1">
    <h1>Signup Form</h1>
    <input type="text" name="name" className="form-control" placeholder="Name"   /> <br/>
<input type="text" name="email" className="form-control" placeholder="Email"  />    <br/>
<input type="text" name="phone" className="form-control" placeholder="Phone"  />    <br/>
        <input type="text" name="password" className="form-control" placeholder="Password"  />    <br/> 
        <input type="text" name="cpassword" className="form-control" placeholder="CurrentPassword"  />     <br/>
        <input type="text" name="age" className="form-control" placeholder="Age"  />     <br/>
        <button type="submit" className="btnRegister" value="Register">Register</button>     <button className="login-btn">Login</button>   <br/>
         </div>
</div>
</div>
    </>
 
    )
}

export default Signup;

