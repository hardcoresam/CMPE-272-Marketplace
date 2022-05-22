import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Button, Col, Image } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import { toast } from 'react-toastify';
import logo from '../images/logo.png';

export default function NavBar(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const adminLoggedIn = localStorage.getItem("adminLoggedIn");

    const handleLogout = (event) => {
        localStorage.removeItem("adminLoggedIn");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        toast.success('Logged out successfully!', { position: "top-center" });
        navigate("/home");
        window.location.reload();
    }

    const handleHomeClick = (event) => {
        navigate("/home");
    }
    const handleAboutClick = (event) => {
        navigate("/about");
    }
    const handleNewsClick = (event) => {
        navigate("/news");
    }
    const handleProductsClick = (event) => {
        navigate("/products");
    }
    const handleContactUsClick = (event) => {
        navigate("/contactus");
    }
    const handleLoginClick = (event) => {
        navigate("/login");
    }


    return (
        <Fragment>
            <Navbar bg="light" expand="lg" style={{ paddingLeft: "2rem" }}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Link className='logo' to="/home">
                            <Image src={logo} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleHomeClick(e)}>Home</Button>
                        <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleAboutClick(e)}>About</Button>
                        <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleProductsClick(e)}>Products</Button>
                        <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleNewsClick(e)}>News</Button>
                        <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleContactUsClick(e)}>Contact us</Button>

                        <NavDropdown style={{ fontSize: "1.5rem", marginLeft: "2rem", color: 'black' }} title="User">
                            <NavDropdown.Item ><Link className='user-profile-link' to="/createuser"><span>Create user</span></Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className='user-profile-link' to="/searchusers"><span>Search users</span></Link></NavDropdown.Item>
                        </NavDropdown>
                        
                        {adminLoggedIn && (
                            <>
                                <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleLogout(e)}>Log out</Button>
                            </>
                        )}

                        {!adminLoggedIn && (
                            <>
                                <Button style={{ fontSize: "1.5rem", marginLeft: "2rem" }} variant="light" onClick={(e) => handleLoginClick(e)}>Login</Button>
                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}