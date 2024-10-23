const OurCompany = () => {
  return (
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
  );
};

export default OurCompany;
