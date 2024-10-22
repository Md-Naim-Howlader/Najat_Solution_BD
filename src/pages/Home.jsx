import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

import { Nav } from "react-bootstrap";
const Home = () => {
  return (
    <div className="bg-default">
      <section className=" hero pb-4 pb-md-0">
        <div className="container">
          <div className="row align-align-items-end pt-5 gap-md-5">
            <div className="col-12 col-lg-6 position-relative order-2 order-md-1 mt-4 mt-md-0 ">
              <span className="welcome_msg-i"></span>
              <span className="welcomTxt">WELCOME TO OUR COMPANY</span>
              <h1 className="hero-heading">
                Clear Thinking <br /> Makes Bright Future!
              </h1>
              <p className="hero-para">
                The goal of IT services is to provide efficient and effective
                technology solutions that help businesses achieve their
                objectives.
              </p>
              <button className="explore-btn btn">Explore Now</button>
              <div className="start-project d-md-flex">
                <button className="btn-project">Start a Projects</button>
                <div className="call-us mt-4 mt-md-0">
                  <a
                    className="text-primary text-decoration-none"
                    href="tel:+1231234123"
                  >
                    Call Us: 123-1234 123
                  </a>
                  <p>For any question</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 position-relative order-1 order-md-2 ms-0 ms-md-4">
              <div className="triangle angle1">
                <img src="images/Polygon 1.png" alt="triangle" />
              </div>
              <div className="triangle angle2">
                <img src="images/Polygon 1.png" alt="triangle" />
              </div>
              <div className="hero-image">
                <img src="images/hero-bg.png" alt="hero image" />
              </div>
              <div className="triangle angle3">
                <img src="images/Polygon 1.png" alt="triangle" />
              </div>
              <div className="triangle angle4">
                <img src="images/Polygon 1.png" alt="triangle" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-section">
        <div>
          <marquee direction="left" className="offers  px-2">
            <div className="mx-auto mx-lg-0 offer d-flex offer align-items-center justify-content-between">
              <div className="ps-4">
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>
              <div>
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>

              <div>
                <img src="images/Vector.svg" alt="vector icon" />
                <span className="d-inline-block ms-2">
                  World IT Day Event: Save Up to 50%
                </span>
              </div>
              <div>
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
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="card border-0 rounded">
                <div class="card-body">
                  <p class="card-text mb-2">Feature-01</p>
                  <h4 class="card-title">
                    Highly Expert Team <br /> Members
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  class="card-card-img-bottom p-3"
                  src="images/why_choose/why_choose 1.png"
                  alt="Title"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="card border-0 rounded">
                <div class="card-body">
                  <p class="card-text mb-2">Feature-02</p>
                  <h4 class="card-title">
                    Fastest Customer <br /> Service
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  class="card-card-img-bottom p-3"
                  src="images/why_choose/why_choose 2.png"
                  alt="Title"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto mx-lg-0">
              <div class="card border-0 rounded">
                <div class="card-body">
                  <p class="card-text mb-2">Feature-03</p>
                  <h4 class="card-title">
                    Competitive Pricing <br /> For Service
                  </h4>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
                <img
                  class="card-card-img-bottom p-3"
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
              <div class="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div class="card-body p-0">
                  <h4 class="card-title ms-0">Technology Solution</h4>
                  <p class="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div class="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div class="card-body p-0">
                  <h4 class="card-title ms-0">IT Management Service</h4>
                  <p class="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div class="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div class="card-body p-0">
                  <h4 class="card-title ms-0">Website & Mobile App Design</h4>
                  <p class="card-text">
                    Developing a comprehensive IT strategy that aligns.
                  </p>
                  <a className="text-primary fs-4 mt-2" href="">
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 h-h-100">
              <div class="card border-0  rounded">
                <img src="images/idea.png" alt="idea icon" />
                <div class="card-body p-0">
                  <h4 class="card-title ms-0">Data Tracking Security</h4>
                  <p class="card-text">
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
      <section className="team-members section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">TEAM MEMBERS</span>
            <h2>Our Top Skilled Experts</h2>
          </div>
          <div className="row mt-5 mx-auto mx-lg-0">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img src="images/team-member.png" alt="team member" />
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img src="images/team-member.png" alt="team member" />
            </div>
            <div className="col-lg-4">
              <img src="images/team-member.png" alt="team member" />
            </div>
          </div>
        </div>
      </section>
      <section className="our-company section-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title">
                <span className="before">WELCOME TO OUR COMPANY</span>
                <h2>We provide Excellent IT services for your success</h2>
              </div>
              <div className="mt-5">
                <div>
                  <div className="progress-info d-flex justify-content-between">
                    <span>BUSINESS SECURITY</span>
                    <span>62%</span>
                  </div>
                  <div className="progres-bar ">
                    <div className="progres progress1"></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-info d-flex justify-content-between">
                    <span>CAREER DEVELOPMENT</span>
                    <span>88%</span>
                  </div>
                  <div className="progres-bar ">
                    <div className="progres progress2"></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-info d-flex justify-content-between">
                    <span>BUSINESS INOVATION</span>
                    <span>90%</span>
                  </div>
                  <div className="progres-bar ">
                    <div className="progres progress3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img
                className="h-100 w-100"
                src="images/our-company.png"
                alt="our company image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="clients-review section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">Clients Review</span>
            <h2>People talk about us</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 mx-auto">
              <img src="images/clients-review/Image 1.png" alt="client image" />
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className="middle-client">
                <img
                  src="images/clients-review/Ellipse 2.png"
                  alt="client image"
                />
                <div className="client-info">
                  <h3>"Elit penatibus curae aucto"</h3>
                  <p>
                    Sem a penatibus varius dui nostra vehicula gravida congue,
                    potenti etiam erat justo faucibUS fusce quis nulla eu,
                    dignissim eget posuere blandit curabitur porta inceptos.
                    Inceptos faucibus fringilla pharetra mi suscipit curabitu
                  </p>
                  <div className="client-bio">
                    <h4>Selina khan</h4>
                    <h4>Designer at (Montan_Agency)</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mx-auto d-none d-lg-block client-small-imgs mt-4 mt-lg-0">
              <div className="small-img-1">
                <img
                  src="images/clients-review/girls-laptop.png"
                  alt="client image"
                />
              </div>

              <div className="small-img-2">
                <img
                  src="images/clients-review/girls-look-sky.png"
                  alt="client image"
                />
              </div>

              <div className="round-shape"></div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="blogs-section section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">BLOG UPDATES</span>
            <h2>Latest News Posts</h2>
          </div>
          <div className="row mt-5 justify-content-around">
            <div className="col-lg-4 blog-item">
              <div class="card border-0 rounded blog-card h-100">
                <img
                  class="card-card-img-top "
                  src="images/blog/blog-1.png"
                  z
                  alt="Title"
                />
                <div class="card-body p-0">
                  <div className="post-date d-flex align-items-center mt-20">
                    <div className="calender-date ">
                      <FaCalendarAlt className="card-icon" />
                      <span>June 4, 2023</span>
                    </div>
                    <div className="blog-type ms-4">
                      <FaFile className="card-icon" />
                      <span>It Service</span>
                    </div>
                  </div>
                  <h4 class="card-title mt-20">
                    Your Business Safe Ensure High Availability.
                  </h4>
                  <p class="mt-20 text-dark">
                    We've been a strategy thought leader for nearly five decades
                    and we bring But we ipsum dolor sit amet,...
                  </p>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0 blog-item">
              <div class="card border-0 rounded blog-card h-100">
                <img
                  class="card-card-img-top "
                  src="images/blog/blog-2.png"
                  alt="Title"
                />
                <div class="card-body p-0">
                  <div className="post-date d-flex align-items-center mt-20">
                    <div className="calender-date ">
                      <FaCalendarAlt className="card-icon" />
                      <span>June 4, 2023</span>
                    </div>
                    <div className="blog-type ms-4">
                      <FaFile className="card-icon" />
                      <span>It Service</span>
                    </div>
                  </div>
                  <h4 class="card-title mt-20">
                    Data Backup and Recovery Best Practices Small
                  </h4>
                  <p class="mt-20 text-dark">
                    We've been a strategy thought leader for nearly five decades
                    and we bring But we ipsum dolor sit amet,...
                  </p>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0 blog-item">
              <div class="card border-0 rounded blog-card h-100">
                <img
                  class="card-card-img-top "
                  src="images/blog/blog-3.png"
                  alt="Title"
                />
                <div class="card-body p-0">
                  <div className="post-date d-flex align-items-center mt-20">
                    <div className="calender-date ">
                      <FaCalendarAlt className="card-icon" />
                      <span>June 4, 2023</span>
                    </div>
                    <div className="blog-type ms-4">
                      <FaFile className="card-icon" />
                      <span>It Service</span>
                    </div>
                  </div>
                  <h4 class="card-title mt-20">
                    Small Business Disaster Recovery Planning
                  </h4>
                  <p class="mt-20 text-dark">
                    We've been a strategy thought leader for nearly five decades
                    and we bring But we ipsum dolor sit amet,...
                  </p>
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
