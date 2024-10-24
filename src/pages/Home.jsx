import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { Nav } from "react-bootstrap";
import Hero from "../components/Hero";
import OurCompany from "../components/OurCompany";
import Team from "../components/Team";
import ClientsReview from "../components/ClientsReview";
import Blogs from "../components/Blogs";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Home | Najat Solution BD";
  });
  return (
    <div className="bg-default">
      <Hero />
      <section className="offer-section">
        <div>
          <marquee direction="left" className="offers  px-2">
            <div className="mx-auto mx-lg-0 offer d-flex gap-3 offer align-items-center ">
              <div className="ps-4">
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>
              <div className="d-none d-md-block">
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>

              <div className="d-none d-lg-block">
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>
              <div className="d-none d-lg-block">
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>
            </div>
          </marquee>
        </div>
      </section>
      <section className="why-choose section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">CASE STUDIES</span>
            <h2>Why We Are the Top Choice?</h2>
            <p>
              "IT service providers work closely with clients, ensuring seamless
              operations."IT service providers work closely with clients,
              ensuring seamless operations.
            </p>
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 rounded">
                <div className="card-body">
                  <p className="card-text mb-2">Feature-01</p>
                  <h4 className="card-title">
                    Highly Expert Team <br /> Members
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  className="card-card-img-bottom p-3"
                  src="images/why_choose/why_choose 1.png"
                  alt="Title"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="card border-0 rounded">
                <div className="card-body">
                  <p className="card-text mb-2">Feature-02</p>
                  <h4 className="card-title">
                    Fastest Customer <br /> Service
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  className="card-card-img-bottom p-3"
                  src="images/why_choose/why_choose 2.png"
                  alt="Title"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto mx-lg-0">
              <div className="card border-0 rounded">
                <div className="card-body">
                  <p className="card-text mb-2">Feature-03</p>
                  <h4 className="card-title">
                    Competitive Pricing <br /> For Service
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  className="card-card-img-bottom p-3"
                  src="images/why_choose/why_choose 3.png"
                  alt="Title"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-feature-section section-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/app-feature.png"
                alt="application features images"
              />
            </div>
            <div className="col-lg-6  mt-5 mt-lg-0">
              <div className="section-title">
                <span className="before">MORE ABOUT OUR COMPANY</span>
                <h2>Our Application Features.</h2>
                <p>
                  IT service providers work closely with clients work clients to
                  understand their unique needs and develop customized
                </p>
                <ul>
                  <li>Amazing communication.</li>
                  <li>Best trending designing experience.</li>
                  <li>Email & Live chat.</li>
                </ul>
                <button className="btn btn-primary ">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-features section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">OUR FEATURES</span>
            <h2>Awesome Features</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div className="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div className="card-body p-0">
                  <h4 className="card-title ms-0">Technology Solution</h4>
                  <p className="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div className="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div className="card-body p-0">
                  <h4 className="card-title ms-0">IT Management Service</h4>
                  <p className="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div className="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div className="card-body p-0">
                  <h4 className="card-title ms-0">
                    Website & Mobile App Design
                  </h4>
                  <p className="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div className="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div className="card-body p-0">
                  <h4 className="card-title ms-0">Data Tracking Security</h4>
                  <p className="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <OurCompany />
      <ClientsReview />
      <section className="have-any-question section-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title">
                <span className="before">HAVE ANY QUESTION</span>
                <h2>We're Here to Help!</h2>
                <p>
                  If you have any questions, feel free to reach out. Whether
                  it's a query about our services or just general information,
                  we're ready to assist you.
                </p>
              </div>
              <div className="flow-social">
                <h4>Follow Us</h4>
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

                <a href="www.google.map.com">Get Google Map Directions</a>
              </div>
            </div>
            <div className="col-lg-7 mt-3 mt-lg-0">
              <div className="contact-form">
                <div className="  contact-box">
                  <h4 className="mb-2 white-yelow-text">
                    Fill The Contact Form
                  </h4>
                  <p className="white-yelow-text">
                    Feel free to contact with us, we don't spam your email
                  </p>
                  <form className="mt-4">
                    <div className="row mb-2">
                      <div className="col-lg-6">
                        <label className="white-yelow-text" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="form-control white-yelow-text form-control-lg"
                          type="text"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="white-yelow-text" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          className="form-control white-yelow-text form-control-lg"
                          type="tel"
                          name="phone"
                          id="phone"
                        />
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-lg-6">
                        <label className="white-yelow-text" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="form-control white-yelow-text form-control-lg"
                          type="email"
                          name="email"
                          id="email"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="white-yelow-text" htmlFor="url">
                          Website URL
                        </label>
                        <input
                          className="form-control white-yelow-text form-control-lg"
                          type="url"
                          name="url"
                          id="url"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="white-yelow-text" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg white-yelow-text"
                        name="message"
                        id="message"
                      ></textarea>
                    </div>
                    <input
                      className="btn btn-lg btn-primary mt-5"
                      type="submit"
                      value="Request a Quote"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogs />
    </div>
  );
};

export default Home;
