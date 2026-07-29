import {FaFacebookF, FaInstagram,FaTwitter,FaLinkedinIn} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">

        <div className="footer-logo">
          <h2>ElectroMart</h2>
          <p>Your Trusted Electronics Store</p>
        </div>

        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ElectroMart. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;