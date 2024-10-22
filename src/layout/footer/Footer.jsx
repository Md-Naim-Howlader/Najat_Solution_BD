import { Nav } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="section-pt bg-default">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 ">
            <h4 className="footer-title">About Us</h4>
            <div className="mt-20">
              <p className="mb-0">
                An IT consultancy can help you assess your technology needs and
                develop a technology strategy that aligns your business
              </p>
            </div>
            <div className="mt-20">
              <Nav>
                <Nav.Link className="p-0" href="www.facebook.com">
                  <FaFacebook className="social-icon" />
                </Nav.Link>
                <Nav.Link className="p-0 ms-3" href="www.twiterX.com">
                  <FaXTwitter className="social-icon" />
                </Nav.Link>
                <Nav.Link className="p-0 ms-3" href="www.instagram.com">
                  <FaInstagram className="social-icon" />
                </Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mt-5  mt-md-0">
            <h4 className="footer-title">Link</h4>
            <Nav className="footer-link mt-20 d-flex flex-column">
              <Nav.Link className="ps-0 text-start d-block">About Us</Nav.Link>
              <Nav.Link className="p-0" href="">
                Our Mission
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Meet the Teams
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Our Projects
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
          <div className="col-lg-2 col-md-6 mt-5 mt-lg-0">
            <h4 className="footer-title">Link</h4>
            <Nav className="footer-link mt-20 d-flex flex-column">
              <Nav.Link className="ps-0 text-start d-block">About Us</Nav.Link>
              <Nav.Link className="p-0" href="">
                Our Mission
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Meet the Teams
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Our Projects
              </Nav.Link>
              <Nav.Link className="p-0" href="">
                Contact Us
              </Nav.Link>
            </Nav>
          </div>

          <div className="col-lg-5 col-md-6 mt-5 mt-lg-0">
            <h4 className="footer-title">Recent Posts</h4>
            <div className="posts mt-20">
              <div className="post d-flex">
                <img src="images/footer/footer-1.png" alt="footer post" />
                <div className="post-info ms-3 mt-1">
                  <div className="date">
                    <span className="text-primary">
                      {" "}
                      <FaCalendarAlt />
                    </span>
                    <span className="ms-2 d-d-inline-block">June 4, 2023</span>
                  </div>
                  <h4 className="mt-3">
                    Your Business Safe Ensure High Availability.
                  </h4>
                </div>
              </div>
              <div className="post d-flex mt-3">
                <img src="images/footer/footer-2.png" alt="footer post" />
                <div className="post-info ms-3 mt-1">
                  <div className="date">
                    <span className="text-primary">
                      {" "}
                      <FaCalendarAlt />
                    </span>
                    <span className="ms-2 d-d-inline-block">June 4, 2023</span>
                  </div>
                  <h4 className="mt-3">
                    Data Backup and Recovery Best Practices Small
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-white">
        <p className="lead text-center pb-0 mb-0">
          Copyright &copy; 2024
          <a className="text-primary px-2" href="#">
            Najat Solution BD
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
