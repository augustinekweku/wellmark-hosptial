import Head from "next/head";
import { Inter } from "next/font/google";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import FoodMenu from "@/components/FoodMenu";
import AboutUsImageGallery from "@/components/AboutUsImageGallery";
import ImageChanger from "@/components/ImageChanger/ImageChanger";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wellmark Specialist Hospital </title>
        <meta name="description" content="Wellmark Specialist Hospital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <!-- Slider Start --> */}
        <section className="banner">
          <div className="banner-wrapper"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-7">
                <div className="block">
                  <div className="divider mb-3"></div>
                  <span className="text-uppercase text-sm letter-spacing ">
                    Your most trusted health partner
                  </span>
                  <h1 className="mb-3 mt-3">Wellmark Specialist Hospital</h1>

                  <p className="mb-4 pr-5">
                    Welcome to Wellmark Specialist Hospital, where compassionate
                    care meets cutting-edge technology. Founded in 2023, we have
                    served the community for a year, offering comprehensive
                    healthcare services across various specialties.
                  </p>
                  <div className="btn-container ">
                    <a
                      href="appoinment.html"
                      target="_blank"
                      className="btn btn-main-2 btn-icon btn-round-full"
                    >
                      Make appoinment{" "}
                      <i className="icofont-simple-right ml-2  "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-block d-lg-flex">
                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-surgeon-alt"></i>
                    </div>
                    <span>24 Hours Service</span>
                    <h4 className="mb-3">Book an Appoinment</h4>
                    <p className="mb-4">
                      Book an appointment by calling our helpline number
                    </p>
                    <a
                      href="tel:+233 558074779"
                      className="btn btn-main btn-round-full"
                    >
                      <i className="icofont-phone"></i> +233 558074779
                    </a>
                  </div>

                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <span>Timing schedule</span>
                    <h4 className="mb-3">Working Hours</h4>
                    <ul className="w-hours list-unstyled">
                      <li className="d-flex justify-content-between">
                        Sun - Sat : <span>24/7</span>
                      </li>
                    </ul>
                  </div>

                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-support"></i>
                    </div>
                    <span>Emergency Cases</span>
                    <h4 className="mb-3">+233 558074779</h4>
                    <p>
                      For emergencies, our team is available 24/7 with a fully
                      equipped ambulance, ready to provide immediate care. Your
                      safety is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-sm-6">
                <div className="about-img">
                  <img
                    src="assets/images/highlights/IMG_0439.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <img
                    src="assets/images/highlights/IMG_0418.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-img mt-4 mt-lg-0">
                  <img
                    src="assets/images/highlights/IMG_0416.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-content pl-4 mt-4 mt-lg-0">
                  <h2 className="title-color">
                    High quality, <br /> Patient-centered care
                  </h2>
                  <p className="mt-4 mb-5">
                    Our mission is to provide high-quality, patient-centered
                    care to improve the health and well-being of all those we
                    serve.
                  </p>

                  <Link
                    href="/about"
                    className="btn btn-main-2 btn-round-full btn-icon"
                  >
                    READ MORE<i className="icofont-simple-right ml-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section service gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <h2>Services</h2>
                  <div className="divider mx-auto my-4"></div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-laboratory text-lg"></i>
                    <h4 className="mt-3 mb-3">Laboratory services</h4>
                  </div>

                  <div className="content">
                    <p className="mb-4">
                      Wellmark Specialist Hospital offers precise and
                      comprehensive diagnostic tests through our
                      state-of-the-art laboratory.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-gym text-lg"></i>
                    <h4 className="mt-3 mb-3">Physiotherapy</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">
                      Our expert physiotherapists provide personalized care to
                      help patients recover strength and mobility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-file-wave text-lg"></i>
                    <h4 className="mt-3 mb-3">Ultrasound</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">
                      We utilize advanced ultrasound technology for accurate
                      imaging and diagnosis of various health conditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-baby text-lg"></i>
                    <h4 className="mt-3 mb-3">Paediatrics</h4>
                  </div>

                  <div className="content">
                    <p className="mb-4">
                      Our paediatric specialists provide compassionate and
                      expert care for infants, children, and adolescents.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-doctor text-lg"></i>
                    <h4 className="mt-3 mb-3">Surgery</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">
                      Wellmark Specialist Hospital offers a range of surgical
                      procedures performed by skilled surgeons in a safe
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section appoinment">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                {" "}
                <img
                  src="assets/images/highlights/IMG_0403.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-10 ">
                <div className="appoinment-wrap mt-5 mt-lg-0">
                  <h2 className="mb-2 title-color">Book appoinment</h2>
                  <p className="mb-4">
                    Call the number below to book an appoint with us. We are
                    available 24/7 to provide you with the best possible care.
                  </p>
                  <div className="appoinment-content">
                    <div className="emergency">
                      <h2 className="">
                        <i className="icofont-phone-circle text-lg"></i>+233
                        5580 74779
                      </h2>
                    </div>
                  </div>
                  <form
                    id="#"
                    className="appoinment-form d-none"
                    method="post"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Choose Department</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select Doctors</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="date"
                            id="date"
                            type="text"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="time"
                            id="time"
                            type="text"
                            className="form-control"
                            placeholder="Time"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="phone"
                            id="phone"
                            type="Number"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={6}
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <a
                      className="btn btn-main btn-round-full"
                      href="appoinment.html"
                    >
                      Make Appoinment{" "}
                      <i className="icofont-simple-right ml-2  "></i>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section testimonial-2 gray-bg d-none">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2>We served over 5000+ Patients</h2>
                  <div className="divider mx-auto my-4"></div>
                  <p>
                    Lets know moreel necessitatibus dolor asperiores illum
                    possimus sint voluptates incidunt molestias nostrum
                    laudantium. Maiores porro cumque quaerat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
