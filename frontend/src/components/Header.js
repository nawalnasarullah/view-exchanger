import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); //Sign Up or Register Page that will be provided later
  };

  return (
    <>
      <header className="header">
        <div className="nav-wrapper">
   
          <div className="container secondary-nav">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-6 text-part mb-3">
                <h2>Grow your social channel</h2>
                <h6>
                  Start growing now with free Youtube views, comments and
                  subscribers!
                </h6>
                <button
                  className="btn btn-secondary mt-5"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className="col-lg-6 col-md-6 img-part d-flex justify-content-center mt-md-0">
                <img
                  src="/assets/images/desktop.png"
                  className="img-fluid"
                  alt="Desktop"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
