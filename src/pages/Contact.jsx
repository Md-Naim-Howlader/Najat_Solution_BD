import { useEffect } from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

import "../styles/contact.css";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Najat Solution BD";
  });
  return (
    <div className="bg-default">
      <h1 className="text-center pt-5">Contact Us</h1>
      <section className="contact-us mt-5 pb-5">
        <div className="container">
          <div className="row contact-icon-area">
            <div className="col-lg-4 ">
              <div className="item d-flex align-items-center">
                <div className="icon text-primary text-center rounded-circle">
                  <TfiEmail />
                </div>
                <div className="info">
                  <h4>Email Address</h4>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="item d-flex align-items-center">
                <div className="icon text-primary text-center rounded-circle">
                  <FaPhone />
                </div>
                <div className="info">
                  <h4>Contact No</h4>
                  <p>+85545555855</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="item d-flex align-items-center">
                <div className="icon text-primary text-center rounded-circle">
                  <FaLocationDot />
                </div>
                <div className="info">
                  <h4>Office Address</h4>
                  <p>Khilkhet, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact-container">
            <div className="col-lg-5">
              <div className="contact-content">
                <div className="section-title mx-0 pe-3">
                  <h2 className="mb-4">We'd love to hear from you.</h2>
                  <p className="mb-4">
                    At our IT solution company, we are committed to providing
                    exceptional customer service and support. If you are
                    experiencing technical difficulties or need assistance with
                    one of our services,
                  </p>
                  <h4 className="mb-4">Your benefits:</h4>
                  <div className="benefits d-flex">
                    <div>
                      <div className="mb-2">
                        <span className="before ms-3">Client-oriented</span>
                      </div>
                      <div className="mb-2">
                        <span className="before ms-3">Competent</span>
                      </div>
                      <div className="mb-2">
                        <span className="before ms-3">Problem-solving</span>
                      </div>
                    </div>
                    <div className="ms-5">
                      <div className="mb-2">
                        <span className="before ms-3">Independent</span>
                      </div>
                      <div className="mb-2">
                        <span className="before ms-3">Results-driven</span>
                      </div>
                      <div>
                        <span className="before ms-3">Transparent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <form>
                <div className="row mb-4">
                  <div className="col-lg-6 mb-4  mb-lg-0">
                    <input
                      className="form-control p-3 border-0 "
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="form-control p-3 border-0 "
                      type="email"
                      name="email"
                      placeholder="Email-Address"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="form-control p-3 border-0 mb-4"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control p-3  border-0"
                    name="message"
                    rows={"5"}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className=" w-75 mx-auto">
                  <button className="btn btn-primary text-white d-block w-100 p-3">
                    Send Message <FiSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
