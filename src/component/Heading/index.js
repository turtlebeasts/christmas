import React from 'react';
import Logo from './logo.jpg';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = props => (

  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Marry Christmas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/content">Contents</Nav.Link>
            <Nav.Link as={Link} to="/about">Dev</Nav.Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/content:1">2020</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/content:2">2021</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/content:3">2022</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/calendar">Calendar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/memes">
              Christmas memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default Heading;
