import { useEffect } from "react";
import "../styles/about.css";
import OurCompany from "../components/OurCompany";
import Team from "../components/Team";
import ClientsReview from "../components/ClientsReview";

const About = () => {
  useEffect(() => {
    new PureCounter();
    document.title = "About Us | Najat Solution BD";
  }, []);
  return (
    <div className="bg-default">
      <h1 className="fs-1 text-center pt-4">About Us</h1>
      <section className=" hero pb-4 pb-md-0">
        <div className="container">
          <div className="row align-align-items-end pt-5 gap-md-5">
            <div className="col-12 col-lg-6 position-relative  mb-5 mb-lg-0">
              <span className="welcome_msg-i"></span>
              <span className="welcomTxt">WELCOME TO OUR COMPANY</span>
              <h1 className="hero-heading">
                We Are Increasing Business Success With Technology
              </h1>
              <p className="hero-para">
                An IT solution service company may serve clients from various
                industries such as healthcare, finance, education, and
                manufacturing. They may work on a project basis, providing
                services for a specific project or on a long-term basis...
              </p>
              <div className="section-title ms-0">
                <span className="before ms-3">Amazing communication.</span>
              </div>
              <div className="section-title ms-0">
                <span className="before ms-3">
                  Best trending designing experience
                </span>
              </div>
              <div className="section-title ms-0">
                <span className="before ms-3">Email & Live chat.</span>
              </div>
              <div className="start-project d-md-flex">
                <button className="btn-project">Discover More</button>
              </div>
            </div>
            <div className="col-12 col-lg-5 position-relative ms-0 ms-md-4  ">
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
      <section className="our-success section-pt">
        <div className="container">
          <div className="row align-items-center justify-content-center ">
            <div className="col-md-6 col-lg-3 justify-content-center d-flex ">
              <div className="icon">
                <img src="images/icons/imgfiles.png" alt="files icon" />
              </div>
              <div className="ms-3 counter-text">
                <h2>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="325"
                    data-purecounter-duration="2"
                  ></span>
                </h2>
                <p>MEDIA ACTIVITIES</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-md-0 justify-content-center d-flex">
              <div className="icon ">
                <img src="images/icons/man.png" alt="client icon" />
              </div>
              <div className="ms-3 counter-text">
                <h2>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="611"
                    data-purecounter-duration="2"
                  ></span>
                  {"+"}
                </h2>
                <p>CLIENTS REVIEW</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-lg-0 justify-content-center d-flex">
              <div className="icon ">
                <img src="images/icons/star.png" alt="client icon" />
              </div>
              <div className="ms-3 counter-text">
                <h2>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="999"
                    data-purecounter-duration="2"
                  ></span>
                  {"+"}
                </h2>
                <p>SKILLED EXPERTS</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mt-4 mt-lg-0 justify-content-center d-flex">
              <div className="icon ">
                <img src="images/icons/man.png" alt="client icon" />
              </div>
              <div className="ms-3 counter-text">
                <h2>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="2"
                  ></span>
                  {"K"}
                </h2>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pt"></section>
      <OurCompany />
      <Team />
      <ClientsReview />
      <section className="brand-section section-pt">
        <div className="container">
          <div className="section-title text-center">
            <span className="before after">BRAND WE WORK WITH</span>
            <h2>Trusted by thousands Business</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <img src="images/brand/microsoft.png" alt="Microsoft logo" />
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <img src="images/brand/samsung.png" alt="Samsung logo" />
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <img src="images/brand/amazon.png" alt="Amazon logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
