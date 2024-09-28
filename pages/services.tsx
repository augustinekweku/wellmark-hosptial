import React from "react";

const SERVICES = [
  {
    title: "Orthopedics and Spine",
    description:
      "Expert care for bone, joint, and spine issues to restore mobility and relieve pain.",
    image: "",
  },
  {
    title: "General Surgery",
    description:
      "Comprehensive surgical services for a wide range of conditions.",
    image: "",
  },
  {
    title: "Cardiology",
    description:
      "Specialized heart care, including diagnostics, treatment, and prevention.",
    image: "",
  },
  {
    title: "24/7 Emergency Services with a Fully Equipped Ambulance",
    description: "Immediate, round-the-clock emergency care and transport.",
    image: "",
  },
  {
    title:
      "Obstetrics & Gynaecology, including Antenatal Care and Fertility Services",
    description:
      "Comprehensive women’s health services, from pregnancy care to fertility solutions.",
    image: "",
  },
  {
    title: "Pediatrics and Child Health",
    description: "Quality healthcare for infants, children, and adolescents.",
    image: "",
  },
  {
    title: "Neurology and Neurosurgery",
    description:
      "Advanced treatment for neurological disorders and surgical interventions.",
    image: "",
  },
  {
    title: "Nephrology (Kidney Diseases) and Dialysis Center",
    description:
      "Specialized care for kidney conditions and dialysis treatment.",
    image: "",
  },
  {
    title: "Advanced Pain Management Clinic",
    description:
      "Pain relief solutions, including physical rehabilitation, nerve injections, and other targeted treatments.",
    image: "",
  },
  {
    title: "General Medical Consultations",
    description:
      "Professional consultations for routine and preventive healthcare needs.",
    image: "",
  },
];

const services = () => {
  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Our services</span>
                <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-2">
        <div className="container">
          <div className="row">
            {SERVICES?.map((service) => (
              <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="service-block  h-100 ">
                  <img src={service.image} alt="" className="img-fluid" />
                  <div className="content">
                    <h4 className="mt-4  title-color mb-0">{service.title}</h4>
                    <p className="mb-0">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg">
                  We are please to attend to you,
                  <span className="title-color">
                    {" "}
                    call us now for any medical emergency
                  </span>
                </h2>
                <a
                  href="tel:+233 558074779"
                  className="btn btn-main-2 btn-round-full"
                >
                  <i className="icofont-phone"></i> +233 558074779
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
