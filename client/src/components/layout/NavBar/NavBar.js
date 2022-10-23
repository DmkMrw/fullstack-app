import React from 'react';
import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsCart, BsSearch } from 'react-icons/bs';

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className={styles.root}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="./images/logo.jpg"
            alt="logo"
            className="img-fluid"
            width={'250px'}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
        className='d-flex justify-content-end'>
          <Nav className="px-5 my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Offert</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/guns">Guns</NavDropdown.Item>
              <NavDropdown.Item href="/rifles">Rifles</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Row>
            <Col className="col-8">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary">
                  <BsSearch />
                </Button>
              </Form>
            </Col>
            <Col className="col-4">
              <Button variant="outline-secondary">
                <BsCart />
              </Button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;