import { useEffect } from "react";
import "../styles/services.css";
import Blogs from "../components/Blogs";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Najat Solution BD";
  });
  return (
    <div className="bg-default">
      <h1 className="fs-1 text-center">Services</h1>
      <section className="services">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div class="card border-0 rounded service-item">
                <div class="card-body m-0 p-0">
                  <h4 class="card-title">Technology Solution</h4>
                  <p class="card-text">
                    Work to ongoing support and maintenance. They may offer a
                    range of services, from project-based
                  </p>
                  <img
                    class="card-card-img-bottom"
                    src="images/hands.png"
                    alt="services item"
                  />
                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
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

export default Services;
