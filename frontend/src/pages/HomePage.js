import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "./HomePage.css";
import { socialIcons, workingCards, pricingCards } from "../components/Data";
import Footer from "../components/Footer";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // it's logic will be implemented AuthContext.js later 
  

  return (
    <>
      <Header />
      <Main
        socialIcons={socialIcons}
        workingCards={workingCards}
        pricingCards={pricingCards}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default HomePage;
