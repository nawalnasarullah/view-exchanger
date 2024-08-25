import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left footer-left">
              <img src="" alt="Logo" style={{ height: 30 }} />
              <span>ViewExchanger</span>
              <br />
              <span>Copyright ©2024</span>
            </div>
            <div className="col-md-6 text-right footer-right">
              <ul className="list-unstyled">
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
