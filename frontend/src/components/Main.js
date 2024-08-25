import React from "react";
import SocialCard from "./SocialCard";
import WorkCard from "./WorkCard";
import PriceCard from "./PriceCard";


function Main({socialIcons, workingCards, pricingCards}) {

  return (
    <>
      <main className="main">
        <div className="feature-section">
          <div className="container">
            <div className="feature-heading d-flex flex-column justify-content-center align-items-center">
              <h3>View Exchanger features</h3>
              <p>What do we offer so you can grow your social channel</p>
            </div>
            <div className="feature-description row">
            {socialIcons.map((socialIcon, index) => (
                <SocialCard key={index} socialIcon={socialIcon} /> 
              ))}
            </div>
          </div>
        </div>
        <div className="working-section bg-body-tertiary border-top-2">
          <div className="container mt-4 pt-3">
            <h3 className="text-center">How it works</h3>
             {
                workingCards.map((workingCard, index) => (
                    <WorkCard key={index} workingCard={workingCard} />
                ))
             }
          </div>
        </div>
        <div className="pricing-section my-5">
          <div className="container">
            <div className="pricing-heading d-flex flex-column justify-content-center align-items-center">
              <h3>Pricing Table</h3>
              <h5>(5 videos per month)</h5>
              <p className="text-center">
                Select the package that best suits your needs. Prices are in US
                dollars. This is a monthly subscription service which can be
                cancelled at any time. If you publish publish more than 5 videos
                per month, check out our YouTube Influence Booster services
                below:
              </p>
            </div>
            <div className="logo-container row justify-content-center align-items-center">
              <div className="col-12 text-center">
                <h5>Secured and trusted checkout with:</h5>
              </div>
              <div className="col-4 col-md-2 mt-2">
                <img
                  src="/assets/images/stripe.png"
                  alt="Stripe"
                  className="img-fluid logo"
                />
              </div>
              <div className="col-4 col-md-2 mt-2">
                <img
                  src="/assets/images/mastercard.png"
                  alt="MasterCard"
                  className="img-fluid logo"
                />
              </div>
              <div className="col-4 col-md-2 mt-2">
                <img
                  src="/assets/images/visa.png"
                  alt="Visa"
                  className="img-fluid logo"
                />
              </div>
            </div>
            <div className="pricing-table">
              <div className="row">
                {
                    pricingCards.map((pricingCard, index) =>(
                        <PriceCard key={index} pricingCard={pricingCard} />
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
