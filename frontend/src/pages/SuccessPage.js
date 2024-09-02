import React from 'react';

const SuccessPage = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h1>Payment Successful!</h1>
                    <p>Thank you for your purchase. Your payment was successfully processed.</p>
                    <a href="/" className="btn btn-primary mt-3">Go to Homepage</a>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
