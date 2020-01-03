import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import "../styles/navbar.scss";

function NavbarComponent() {
    return (
        <>
        <div className="header">
            <div className="header-1">
                <div classNmae="logo">
                    <Link to="/"><Image src={require("../images/logo.svg")}></Image></Link>
                    <Link className="signin-link signin">Sign In</Link>
                    <div className="contact-number signin">(833) 724-3467</div>
                </div>
            </div>
            <div className="header-2">
                <Navbar bg="" expand="lg" className="navbar">
                    <Navbar.Brand className="navbrand" href="#home"><Image src={require("../images/logo.svg")}></Image></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/" className="nav-link">HOME</Nav.Link>
                    <Nav.Link href="#home" className="nav-link">FILE A CLAIM</Nav.Link>
                    <Nav.Link href="#home" className="nav-link">GET FREE QUOTE</Nav.Link>
                    <Nav.Link href="#home" className="nav-link">FAQS</Nav.Link>
                    <Nav.Link href="#" className="nav-link">BLOG</Nav.Link>
                    <Nav.Link href="#" className="nav-link last-link">SIGN IN</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        
</>
    )
}

export default NavbarComponent
