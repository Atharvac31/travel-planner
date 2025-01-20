// eslint-disable-next-line no-unused-vars
import React from "react";
import CardHolder from "../Components/cardHolder";
import Banner from "../Components/Banner";
import Packages from "../Components/Packages";
const LandingPage = () => {
  return (
    <div>
      <div>
      <Banner />
      </div>
      <div>
      <CardHolder />
      </div>
      <div>
        <Packages/>
      </div>
    </div>
  );
};

export default LandingPage;
