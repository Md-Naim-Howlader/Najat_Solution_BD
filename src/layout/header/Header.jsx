import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

import Countries from "../../components/Countries";
import Languages from "../../components/Languages";

const Header = () => {
  const { toggle, setToggle } = useContext(Context);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
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
            <Countries />
            <Languages />
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-default navigation">
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

              <NavDropdown id="basic-nav-dropdown" title="Services">
                <NavLink className="dropdown-item mb-2" to={"/services"}>
                  IT Solutions
                </NavLink>
                <NavLink className="dropdown-item mb-2" to={"/services"}>
                  Web Design & Development
                </NavLink>
                <NavLink className="dropdown-item mb-2" to={"/services"}>
                  Digital Marketing
                </NavLink>
                <NavLink className="dropdown-item mb-2" to={"/services"}>
                  Graphics Design
                </NavLink>
                <NavLink className="dropdown-item mb-2" to={"/services"}>
                  E-learning
                </NavLink>
              </NavDropdown>
              <NavLink className="nav-link" to={"/blog"}>
                Blogs
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
