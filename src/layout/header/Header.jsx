import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header-top d-none d-lg-block bg-white">
        <div className="container-fluid">
          <div className="social_icon">
            <Nav>
              <Nav.Link
                href="https://web.facebook.com/najatsolutionsbd"
                className="text-dark fs-5"
              >
                <FaFacebook />
              </Nav.Link>
              <Nav.Link className="text-dark fs-5">
                <FaXTwitter />
              </Nav.Link>
              <Nav.Link className="text-dark fs-5">
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </div>
          <div className="slogan"></div>
          <div className="languges"></div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-default shadow">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              className="logo-img"
              src="/images/najat logo.png"
              alt="Najat solution BD logo"
            />
            <span className="logo">Najat Solution BD</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
