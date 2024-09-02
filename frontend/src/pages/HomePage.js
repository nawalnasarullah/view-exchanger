import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { socialIcons, workingCards, pricingCards } from "../components/Data";
import Footer from "../components/Footer";

function HomePage() {
  

  return (
    <>
      <Header />
      <Main
        socialIcons={socialIcons}
        workingCards={workingCards}
        pricingCards={pricingCards}
      />
    </>
  );
}

export default HomePage;
