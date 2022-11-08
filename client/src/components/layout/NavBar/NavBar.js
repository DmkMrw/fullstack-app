import React from 'react';
import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCart, BsSearch } from 'react-icons/bs';
import NavLink from 'react-bootstrap/esm/NavLink';


const NavBar = () => {
  return (
    <div className={styles.allContainer}>
      <Container>
        <Navbar collapseOnSelect expand="lg" className={styles.root}>
        <Navbar.Brand href="/" className='me-5'>
          <img
            src="./images/logo.jpg"
            alt="brand_logo"
            className="img-fluid"
            width={'200px'}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.NavbarFlex}>
          <Nav className='ms-5' >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/offer">Offer</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/guns">Guns</NavDropdown.Item>
              <NavDropdown.Item href="/rifles">Rifles</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 ms-4"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;