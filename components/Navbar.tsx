import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  function isActive(route: string) {
    return route === pathname ? "active" : "";
  }
  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <a href="mailto:info@wellmarkspecialisthospital1@gmail.com">
                    <i className="icofont-support-faq mr-2"></i>
                    wellmarkspecialisthospital1@gmail.com
                  </a>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2"></i>Address Agbogba
                  Antis Junction{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="tel:+233500483753">
                  <span>Call Now : </span>
                  <span className="h4">0500483753</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="assets/images/logo.png"
              alt=""
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </a>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              {NAV_LINKS.map((link) => (
                <li className={`nav-item ${isActive(link.href)}`}>
                  <Link href={link.href} className="nav-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
