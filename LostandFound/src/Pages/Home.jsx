import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Hero from "../Components/Hero";
import FilterBar from "../Components/FilterBar";
import ItemCardGrid from "../Components/ItemCardGrid";

const Home = () => {
  return (
    <div >
      <Hero />
      <SearchBar />
      <FilterBar />
      <ItemCardGrid/>
    </div>
  );
};

export default Home;
