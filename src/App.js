import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Signup/Login";
import Services from "./Components/Servivces";
// import User from "./Components/User";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Product from "./Components/Product";


function App() {
 
  return (<> 
  <Nav />

  <Switch>
    {/* <Redirect to="/"/> */}
    <Route   exact  path="/home"  component={Home} />
    <Route   exact  path="/about"  component ={()=> <About /> }  />
    <Route   exact  path="/product"  component ={Product}  />
    <Route   exact  path="/contact"  component ={Contact}  />
    <Route   exact  path="/signup"  component ={Signup}  />
    <Route   exact  path="/login"  component ={Login}  />
    <Route   exact  path="/services"  component ={Services}  />
    {/* <Route   exact  path="/user"  component ={User}  /> */}
    {/* <Route   exact  path="/user/:fname/:lname"  component ={User}  /> */}
    <Route   exact   component ={Error}  />
  </Switch>
  {/* <About />
  <Contact /> */}
    </>
    )
}

export default App;

