import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Hero from "../Components/Hero";
import FilterBar from "../Components/FilterBar";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <NavBar />
      <Hero />
      <SearchBar />
      <FilterBar />
    </div>
  );
};

export default Home;
