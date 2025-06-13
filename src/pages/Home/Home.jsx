import React from "react";
import Banner from "./Banner/Banner";
import HistoricalTimeline from "./HistoricalTimeline/HistoricalTimeline";
import PopularBooks from "./PopularBooks/PopularBooks";

const Home = () => {
  return (
    <div>
      <Banner />
      <HistoricalTimeline />
      <PopularBooks/>
    </div>
  );
};

export default Home;
