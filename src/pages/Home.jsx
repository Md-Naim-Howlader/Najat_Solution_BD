import { MdArrowOutward } from "react-icons/md";

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
          <div className="offers row px-2">
            <div className="mx-auto mx-lg-0 offer col-12  col-md-6 col-lg-3 offer d-flex align-items-center">
              <img src="images/Vector.svg" alt="vector icon" />
              <span className="d-inline-block ms-2">
                World IT Day Event: Save Up to 50%
              </span>
            </div>
            <div className="d-none d-lg-block offer col-12  col-md-6 col-lg-3 offer d-flex align-items-center">
              <img src="images/Vector.svg" alt="vector icon" />
              <span className="d-inline-block ms-2">
                World IT Day Event: Save Up to 50%
              </span>
            </div>
            <div className="d-none d-lg-block offer col-12  col-md-6 col-lg-3 offer d-flex align-items-center">
              <img src="images/Vector.svg" alt="vector icon" />
              <span className="d-inline-block ms-2">
                World IT Day Event: Save Up to 50%
              </span>
            </div>
            <div className="d-none d-lg-block offer col-12  col-md-6 col-lg-3 offer d-flex align-items-center">
              <img src="images/Vector.svg" alt="vector icon" />
              <span className="d-inline-block ms-2">
                World IT Day Event: Save Up to 50%
              </span>
            </div>
          </div>
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
    </div>
  );
};

export default Home;
