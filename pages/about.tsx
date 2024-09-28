import React from "react";

const about = () => {
  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                {/* <span className="text-white">About Us</span> */}
                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">Quality healthcare</h2>
            </div>
            <div className="col-lg-8">
              <p>
                Welcome to Wellmark Specialist Hospital, where compassionate
                care meets cutting-edge technology. Founded in 2023, we have
                served the community for a year, offering comprehensive
                healthcare services across various specialties. Our mission is
                to provide high-quality, patient-centered care to improve the
                health and well-being of all those we serve. With a dedicated
                team of highly skilled doctors, nurses, and healthcare
                professionals, we strive to deliver exceptional care in a warm
                and welcoming environment. At Wellmark Specialist Hospital, your
                health is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">Brief History</h2>
            </div>
            <div className="col-lg-8">
              <p>
                Wellmark Specialist Hospital was founded in 2023 with a vision
                to provide quality healthcare to the community. Starting as a
                small clinic, it expanded over the months gone, adapting to the
                latest medical advancements and growing into a full-fledged
                hospital. In 2023, the hospital opened specialized departments,
                including Diagnostics, Physiotherapy,Ultrasound, Paediatrics,
                Surgical etc, becoming a leader in patient care. Over time,
                Wellmark Specialist Hospital has remained committed to
                innovation, compassionate care, and patient well-being. Today,
                it serves thousands of patients annually, upholding its legacy
                of excellence and contributing to the health and wellness of the
                Greater Accra community and Ghana as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section awards bg-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="title-color">Gallery</h2>
              <div className="divider mt-4 mb-5 mb-lg-0"></div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0382.jpg"
                      alt=""
                      className="img-fluid "
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0453.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0461.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0510.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0490.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="award-img">
                    <img
                      src="assets/images/highlights/IMG_0513.jpg"
                      alt=""
                      className="img-fluid"
                    />
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

export default about;
