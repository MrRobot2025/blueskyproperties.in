import { Container, Row, Col} from "react-bootstrap";
import man from "../../static/images/man.gif";
import building from "../../static/images/building.gif";
import "../../components/HeroSection/Hero.css";
import Login from "../Login/login";
import Signup from "../signup/signup";
import "./Hero.css";
import Jobs from "../jobs/jobs";
import { useState ,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contact from "../Contact/contact";



const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 990) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  

  return (
    <>
      <Container fluid>
        
        <Row className='background'>
          {!isMobile?
          <Col md='6' className='size'>
            <img className="p-5" src={building} alt="" />
          </Col>
          :null
          }
          <Col md='5' className='my-auto'>
          <Routes>
                 <Route exact path='/' element={<Login/>}></Route>
                 <Route exact path='/login' element={<Login/>}></Route>
                 <Route exact path='/signup' element={<Signup/>}></Route>
                 <Route exact path='/contact' element={<Contact/>}></Route>
          </Routes>
            
          </Col>
        </Row>


      </Container>
    </>
  );
}

export default Hero;