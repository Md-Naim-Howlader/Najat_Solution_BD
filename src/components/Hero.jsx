const Hero = () => {
  return (
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
  );
};

export default Hero;
