import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PriceCard({pricingCard}) {

  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleGetStarted = () => {

    if(!isAuthenticated){
     
      navigate('/login')
    }else{
      navigate('/checkout', { 
        state: { 
          price: pricingCard.price, 
          packageName: pricingCard.title, 
          Pkginformation: pricingCard.desp,
        } 
        
      })

      
      
    }
  };

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-header d-flex flex-column align-items-center justify-content-center">
            <h5>
              <strong>{pricingCard.title}</strong>
            </h5>
            <span>${pricingCard.price}/month</span>
            <p>{pricingCard.desp}</p>
          </div>
          <div className="card-body">
            <div className="d-flex">
              <strong>Views and Impressions:</strong>
              <p>{pricingCard.perVideo}</p>
            </div>
            <p>WATCH TIME: {pricingCard.watchTime}</p>
            <p>LIKES: {pricingCard.likes}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
