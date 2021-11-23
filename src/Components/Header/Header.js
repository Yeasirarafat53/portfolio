import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
            
        <main className="header">

            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand className="logo"><Link to="/home">Portfo<span>lio.</span></Link></Navbar.Brand>
                    <Nav >

                        <ul className="menu">
                        <li><Link to="/home" class="menu-btn">Home</Link></li>
                        <li><Link to="/about" class="menu-btn">About</Link></li>
                        <li><Link to="/projects" class="menu-btn">Projects</Link></li>
                        <li><Link to="/skills" class="menu-btn">Skills</Link></li>
                        <li><Link to="/contact" class="menu-btn">Contact</Link></li>
                        </ul>  
                    </Nav>
                </Container>

            </Navbar> 

            </main>

        
    );
};

export default Header;










