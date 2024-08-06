import React from 'react';

const AboutUsPage = () => {
  return (
    <section className="about-us py-5 bg-light d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="text-wrapper">
              <h1 className="mb-4 display-4"><strong>About Us</strong></h1>
              <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat tellus magna, quis vestibulum mi pellentesque eu. Duis tincidunt enim ac erat aliquet, sit amet tempor urna pulvinar. Morbi consequat erat sed imperdiet lobortis. In id aliquam leo.
              </p>
              <a className="btn btn-primary mt-4" href="https://mobiri.se">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
