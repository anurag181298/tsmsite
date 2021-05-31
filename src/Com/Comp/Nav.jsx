
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import "../Comp/nav.css";

function nav() {
    return ( <>


<ReactBootStrap.Navbar bg="primary" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">
    <img
        src="https://wallpaperaccess.com/full/345330.jpg"
          width="30"
          height="30"
          className="d"
          alt-imgsrc="../img/logo.png"
         />
        </ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Services</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">login</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Signup</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
    
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>
  

    </>
        
      )
     
  }
  
  export default nav;

   