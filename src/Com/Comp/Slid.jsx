import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React ,{useState} from 'react';
import "../Comp/Slid.css";

function Slid() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const mystyle = {
    color: "white",
  //   width: "80rem",
  // height: "50rem",
    padding: "2px",
    paddingLeft:"5rem",
    fontFamily: "Arial"}

  return (
    <ReactBootStrap.Carousel activeIndex={index} onSelect={handleSelect}>
      <ReactBootStrap.Carousel.Item style={mystyle}>
        <img 
          className="d-block"
          src="https://wallpaperaccess.com/full/345330.jpg"
          alt="First slide"
        />
      </ReactBootStrap.Carousel.Item>

      <ReactBootStrap.Carousel.Item   style={mystyle}>
        <img
          className="d-block"
          src="https://wallpaperaccess.com/full/345330.jpg"
          alt="Second slide"
        />

        
      </ReactBootStrap.Carousel.Item>

      <ReactBootStrap.Carousel.Item  style={mystyle}>
        <img
          className="d-block"
          src="https://wallpaperaccess.com/full/345330.jpg"
          alt="Third slide"
        />

        {/* <ReactBootStrap.Carousel.Caption>
          <h3>Third slide label</h3>
        </ReactBootStrap.Carousel.Caption> */}
      </ReactBootStrap.Carousel.Item>
    </ReactBootStrap.Carousel>
  );
}

export default Slid;
