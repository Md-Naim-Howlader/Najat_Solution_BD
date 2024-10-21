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
            <span>CASE STUDIES</span>
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
    </div>
  );
};

export default Home;
