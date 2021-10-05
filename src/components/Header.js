import React, { Component } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fav">Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
