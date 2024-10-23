import { FaBagShopping, FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
const Careers = () => {
  return (
    <div className="bg-default">
      <h2 className="fs-1 text-center pt-5">Careers</h2>
      <section className="job-circuler section-pt pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="job-item">
                <div class="card border-0 shadow rounded blog-card h-100">
                  <div class="card-body p-3">
                    <h4 class="card-title ">
                      Senior Softwere Engineer (PHP/React)
                    </h4>
                    <div className="experence d-flex align-items-center">
                      <span className="text-primary">
                        <FaBagShopping />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        3 to 5 Years Experience
                      </span>
                    </div>

                    <div className="deadline d-flex align-items-center">
                      <span className="text-primary">
                        <FaCalendarAlt />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        Deadline: <strong>29 July</strong> 2024
                      </span>
                    </div>
                    <button className="btn btn-primary mt-4">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="job-item">
                <div class="card border-0 shadow rounded blog-card h-100">
                  <div class="card-body p-3">
                    <h4 class="card-title ">.NET Developer</h4>
                    <div className="experence d-flex align-items-center">
                      <span className="text-primary">
                        <FaBagShopping />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        At least 1 Years Experience
                      </span>
                    </div>

                    <div className="deadline d-flex align-items-center">
                      <span className="text-primary">
                        <FaCalendarAlt />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        Deadline: <strong>29 Oct</strong> 2024
                      </span>
                    </div>
                    <button className="btn btn-primary mt-4">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="job-item">
                <div class="card border-0 shadow rounded blog-card h-100">
                  <div class="card-body p-3">
                    <h4 class="card-title ">Senior UI/UX Designer</h4>
                    <div className="experence d-flex align-items-center">
                      <span className="text-primary">
                        <FaBagShopping />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        At least 3 Years Experience
                      </span>
                    </div>

                    <div className="deadline d-flex align-items-center">
                      <span className="text-primary">
                        <FaCalendarAlt />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        Deadline: <strong>22 Aug</strong> 2024
                      </span>
                    </div>
                    <button className="btn btn-primary mt-4">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="job-item">
                <div class="card border-0 shadow rounded blog-card h-100">
                  <div class="card-body p-3">
                    <h4 class="card-title ">Java Developer</h4>
                    <div className="experence d-flex align-items-center">
                      <span className="text-primary">
                        <FaBagShopping />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        2 - 3 Years Working Experience
                      </span>
                    </div>

                    <div className="deadline d-flex align-items-center">
                      <span className="text-primary">
                        <FaCalendarAlt />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        Deadline: <strong>14 Aug</strong> 2024
                      </span>
                    </div>
                    <button className="btn btn-primary mt-4">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="job-item">
                <div class="card border-0 shadow rounded blog-card h-100">
                  <div class="card-body p-3">
                    <h4 class="card-title ">Android Developer</h4>
                    <div className="experence d-flex align-items-center">
                      <span className="text-primary">
                        <FaBagShopping />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        At least 3 Years Experence
                      </span>
                    </div>

                    <div className="deadline d-flex align-items-center">
                      <span className="text-primary">
                        <FaCalendarAlt />
                      </span>
                      <span className="ms-2 mt-1 card-text">
                        Deadline: <strong>28 Sep</strong> 2024
                      </span>
                    </div>
                    <button className="btn btn-primary mt-4">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
