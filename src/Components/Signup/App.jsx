import React, { useState } from 'react';




const App = ()=>{

const [name , setName] = useState({
    name: "",
  email: "",
  phone : "",
  password : "",
  cpassword : "",
  age : ""
});
// const [email , setEmail] = useState("");
// const [fname , setFName] = useState();

  const InputEvent = (e) =>{
    console.log(e.target.value);
    console.log(e.target.name);

    // const value = e.target.value;
    // const name = e.target.name;

    const {value,name} =e.target;

    setName((preval)=>{
      if(name === "name"){
        return{
          name:value,
          email: preval.email,
          phone : preval.phone,
          password : preval.password,
          cpassword : preval.cpassword,
          age :preval.age
        } }
        else if (name === "email"){
          return{
            name: preval.name,
            email: value,
            phone : preval.phone,
            password : preval.password,
            cpassword : preval.cpassword,
            age :preval.age
          } }
          else if (name === "phone"){
            return{
   name:preval.name,
   email: preval.email,
   phone : value,
   password : preval.password,
   cpassword : preval.cpassword,
   age :preval.age} }
   
   else if (name === "password"){
     return{
       name:preval.name,
       email: preval.email,
       phone : preval.phone,
       password :  value,
       cpassword : preval.cpassword,
       age :preval.age} }
       else if (name === "cpassword"){
         return{
          name:preval.name,
          email: preval.email,
          phone : preval.phone,
          password : preval.password,
          cpassword : value,
          age :preval.age
  } }
  if(name === "age"){
    return{
      name: preval.name,
      email: preval.email,
      phone : preval.phone,
      password : preval.password,
      cpassword : preval.cpassword,
      age : value
    } }

    })
  
  }
  const onSubmits =(e) =>{
   e.preventDefault();
   alert("successful");
  }

 

  return(<> 
  <div className = "main_div">
  <h1 className="h"> Registration Form </h1>
  <p>{name.name},{name.email},{name.phone},{name.password},{name.cpassword}, {name.age}</p>
  {/* <form action="/register" method="POST"> */}
  <form action=""  onSubmit= {onSubmits}>
    <div className="form">
      <h2> Welcome <span> YO</span></h2>
  <input type="text" name="name"  placeholder="Name" id ="name"  onChange={InputEvent} value={name.name} /> 
   <input type="text" name="email"  placeholder="Email" id ="email"  onChange={InputEvent} value={name.email} />
  <input type="text" name="phone"  placeholder="Phone" id ="phone"  onChange={InputEvent}  value={name.phone} />
   <input type="text" name="password"  placeholder="Password" id ="password"  onChange={InputEvent} value={name.password} /> 
   <input type="text" name="cpassword"  placeholder="CurrentPassword" id ="cpassword"  onChange={InputEvent} value={name.cpassword} /> 
   <input type="text" name="age"  placeholder="Age" id ="age"  onChange={InputEvent} value={name.age} /> 
   <button  type="submit" >Signup</button>
   <button  type="submit" >Login</button>
  
  </div>
  </form>
  </div>
  </>);
}
export default App;

// style={{ backgroundColor: bg}}
// onChange={InputEvent}
// autoComplete="off"