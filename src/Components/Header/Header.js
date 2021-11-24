import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
            
        <main classNameName="header">

            {/* <Navbar variant="dark">
                <Container>
                    <Navbar.Brand classNameName="logo"><Link to="/home">Portfo<span>lio.</span></Link></Navbar.Brand>
                    <Nav >

                        <ul classNameName="menu">
                        <li><Link to="/home" className="menu-btn">Home</Link></li>
                        <li><Link to="/about" className="menu-btn">About</Link></li>
                        <li><Link to="/projects" className="menu-btn">Projects</Link></li>
                        <li><Link to="/skills" className="menu-btn">Skills</Link></li>
                        <li><Link to="/contact" className="menu-btn">Contact</Link></li>
                        </ul>  
                    </Nav>
                </Container>

            </Navbar>  */}






<Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>

  <Navbar.Brand className="logo"><Link to="/home">Portfo<span>lio.</span></Link></Navbar.Brand>



  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>

    <Nav >
      <Nav.Link ><Link to="/home" className="menu-btn">Home</Link></Nav.Link>
      <Nav.Link><Link to="/about" className="menu-btn">About</Link> </Nav.Link>
      <Nav.Link ><Link to="/projects" className="menu-btn">Projects</Link></Nav.Link>
      <Nav.Link ><Link to="/skills" className="menu-btn">Skills</Link></Nav.Link>
      <Nav.Link ><Link to="/contact" className="menu-btn">Contact</Link></Nav.Link>
    </Nav>

  </Navbar.Collapse>

  </Container>
</Navbar>
















            </main>

        
    );
};

export default Header;










