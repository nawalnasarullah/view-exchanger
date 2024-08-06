import React from "react";

function SocialCard({socialIcon}) {
  return (
    <>
      <div className="col-lg-4 col-md-12 col-sm-12 mt-3 d-flex flex-column align-items-center justify-content-center">
        <div className="icon">
          <img src={socialIcon.image} alt="" />
        </div>
        <div className="icon-body text-center">
          <h5>Social platforms</h5>
          <p>You can manage multiple Youtube channels from one account.</p>
        </div>
      </div>
    </>
  );
}

export default SocialCard;
