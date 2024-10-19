import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Lang from "./Lang";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { isLoading, data } = useFetch("https://restcountries.com/v3.1/all");

  return (
    <header>
      <div className="header-top d-none d-lg-block bg-white">
        <div className="container-fluid row align-items-center">
          <div className="social_icon col-md-4">
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
          <div className="slogan col-md-4">
            <p className="slogan_content text-muted text-center">
              It&apos;s time to Grow with Najat Solutions BD
            </p>
          </div>
          <div className="col-md-4  d-flex justify-content-end">
            {isLoading && (
              <img
                className="loader"
                src={"../../../public/images/loader.gif"}
              />
            )}
            <Form.Select className="border-0 lang-select">
              {data &&
                data.map((country) => (
                  <option key={country.name.common} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
            </Form.Select>

            <Lang />
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-default">
        <Container>
          <NavLink className="d-flex navbar-brand  align-items-center text-decoration-none ">
            <img
              className="logo-img"
              src="/images/najat logo.png"
              alt="Najat solution BD logo"
            />
            <span className="logo">Najat Solution BD</span>
          </NavLink>
          {/* toggle button */}
          <Navbar.Toggle
            onClick={() => setToggle(!toggle)}
            className="my-3 my-md-0"
            aria-controls="basic-navbar-nav"
          >
            {toggle ? <AiOutlineClose /> : <FaBars />}
          </Navbar.Toggle>
          {/* toggle button */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link" to={"/about"}>
                About Us
              </NavLink>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  IT Solutions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Web Design & Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Graphics Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  E-learning
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to={"/blog"}>
                Blog
              </NavLink>
              <NavLink className="nav-link" to={"careers"}>
                Careers
              </NavLink>
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
