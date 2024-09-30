import React from "react";

const contact = () => {
  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-live-support"></i>
                <h5>Call Us</h5>
                +233-050-048-3753
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-support-faq"></i>
                <h5>Email Us</h5>
                wellmarkspecialisthospital1@gmail.com
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-location-pin"></i>
                <h5>Location</h5>
                Agbogba Antis Junction, Accra
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap section d-none">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form
                id="contact-form"
                className="contact__form "
                method="post"
                action="mail.php"
              >
                {/* <!-- form message -->
          <div className="row">
            <div className="col-12">
              <div className="alert alert-success contact__msg" style="display: none" role="alert">
                Your message was sent successfully.
              </div>
            </div>
          </div> */}

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Your Query Topic"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={8}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div>
                  <input
                    className="btn btn-main btn-round-full"
                    name="submit"
                    type="submit"
                    value="Send Messege"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="google-map w-100 mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2208821461068!2d-0.19597742297472426!3d5.681181294300431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d5aae1fcf91%3A0x946d4c4210545eab!2sWellmark%20Specialist%20Hospital!5e0!3m2!1sen!2sgh!4v1727530983790!5m2!1sen!2sgh"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;
