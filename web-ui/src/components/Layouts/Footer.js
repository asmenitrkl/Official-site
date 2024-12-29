import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-img">
        <img
          src="https://i.postimg.cc/BvrvzyqT/ASME-NIT-Rourkela-Student-Section-Black.png"
          alt="ASME Logo"
          style={{ width: "25%" }}
        />
        <img
          src="https://i.postimg.cc/ncFDsQJ9/NITR-LOGO-with-SAC-Black-1.png"
          alt="SAC Logo"
          style={{ width: "15%" }}
        />
      </div>
      <div className="footerdivs pt-6 col-lg-12">
        <div className="footerdiv1 col-lg-8 mt-5">
          <div className="footerdiv1-content1 col-lg-6">
            <div className="footer-content mt-1 text-center">
              <h4>ASME NITR Student Section</h4>
              <p>Club Under Technical Society, SAC NIT Rourkela</p>
              <p>Central Workshop, NIT Rourkela</p>
              <p>ODISHA, Pin-769008</p>
            </div>
          </div>
          <div className="footerdiv1-content2 col-lg-6 text-center">
            <h4>Connect Us!</h4>
            <div>
              <i className="bi bi-envelope-at"></i> (Email): asme.nitrkl@nitrkl.ac.in
            </div>
          </div>
        </div>
        <div className="footerdiv2 col-lg-4 text-center mt-5">
          <h5>FOLLOW US</h5>
          <div className="footerimg">
            <a href="https://www.linkedin.com/in/asme-nit-rourkela-student-chapter-16736988">
              <i className="bil bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/asme.nitrkl?igsh=MXZtODZqYjBkN3VidA==">
              <i className="bii bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center mb-1">Copyright &copy; ASME NITRKL Student Chapter</p>
        <p className="text-center">NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA</p>
      </div>
    </div>
  );
};

export default Footer;
