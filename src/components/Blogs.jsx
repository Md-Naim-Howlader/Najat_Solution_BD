import { FaCalendarAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
const Blogs = () => {
  return (
    <section className="blogs-section section-pt">
      <div className="container">
        <div className="section-title text-center">
          <span className="before after">BLOG UPDATES</span>
          <h2>Latest News Posts</h2>
        </div>
        <div className="row mt-5 justify-content-around">
          <div className="col-lg-4 blog-item">
            <div className="card border-0 rounded blog-card h-100">
              <img
                className="card-card-img-top "
                src="images/blog/blog-1.png"
                alt="Title"
              />
              <div className="card-body p-0">
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
                <h4 className="card-title mt-20">
                  Your Business Safe Ensure High Availability.
                </h4>
                <p className="mt-20 text-dark">
                  We've been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,...
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 blog-item">
            <div className="card border-0 rounded blog-card h-100">
              <img
                className="card-card-img-top "
                src="images/blog/blog-2.png"
                alt="Title"
              />
              <div className="card-body p-0">
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
                <h4 className="card-title mt-20">
                  Data Backup and Recovery Best Practices Small
                </h4>
                <p className="mt-20 text-dark">
                  We've been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,...
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 blog-item">
            <div className="card border-0 rounded blog-card h-100">
              <img
                className="card-card-img-top "
                src="images/blog/blog-3.png"
                alt="Title"
              />
              <div className="card-body p-0">
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
                <h4 className="card-title mt-20">
                  Small Business Disaster Recovery Planning
                </h4>
                <p className="mt-20 text-dark">
                  We've been a strategy thought leader for nearly five decades
                  and we bring But we ipsum dolor sit amet,...
                </p>
                <button className="btn btn-outline-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
