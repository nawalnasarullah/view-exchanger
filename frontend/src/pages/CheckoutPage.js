import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';

function CheckoutPage() {
  const { user } = useSelector(state => state.auth);

  const location = useLocation();
  const { price: initialPrice, packageName: initialPackageName } = location.state;

  const [price, setPrice] = useState(initialPrice || 0);
  const [packageName, setPackageName] = useState(initialPackageName || 'YouTube View & Like Exchange (5 Videos)');
  const [Pkginformation, setPkginformation] = useState(location.state?.Pkginformation || 'This subscription is designed for anyone that posts on YouTube and wants their videos to be viewed and liked more often, billed monthly.');
  const [total, setTotal] = useState(price);

  const makePayment = async () => {
    console.log('making payment');

    const stripe = await loadStripe('pk_test_51JmH5OGFsyW28IZDENWS0plIwH9VnoIX9rikZCKXPSOlsssryHEmaFimAdqfUHxKXwmBdwqpWNrc6JvUDDP60Rb000bYTEgOha');

    const body = {
      cardPrice: initialPrice,
      cardPkgName: initialPackageName,
      cardPkgInfo: location.state?.Pkginformation,
    };

    console.log('body', body);

    const res = await fetch('http://localhost:8001/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const session = await res.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-xl-8">
              <div className="card" style={{ borderRadius: 10 }}>
                <div className="card-header px-4 py-5">
                  <h5 className="mb-0">Thanks for your Order, {user?.user?.firstName}!</h5>
                </div>
                <div className="card-body p-4">
                  <div className="card shadow-0 border my-4">
                    <div className="card-body checkout-body">
                      <div className="row">
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 fw-bold">{packageName}</p>
                        </div>
                        <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">
                            <span className="fw-bold">Plan:</span> <br />
                            {Pkginformation}
                          </p>
                        </div>
                        <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">
                            <span className="fw-bold">Views & Impressions:</span> 1000 to 1500 per video
                            <span className="fw-bold"><br />WATCH TIME:</span>  40 to 90% watch time per video <br /><span className="fw-bold">Likes:</span> 0
                          </p>
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">${price} /mon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0 px-4 py-5">
                  <h5 className="d-flex align-items-center justify-content-end text-uppercase mb-0">
                    Total paid: <span className="h2 mb-0 ms-2">${total}</span>
                  </h5>
                  <button onClick={makePayment} type="button" className="btn text-white mt-5">Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutPage;
