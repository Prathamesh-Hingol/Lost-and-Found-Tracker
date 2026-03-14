import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Hero from "../Components/Hero";
import FilterBar from "../Components/FilterBar";
import ItemCardGrid from "../Components/ItemCardGrid";

const Home = () => {
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const visibleItems = item.filter((item) => {
    const matchesFilter = filter === "All" || item.status === filter;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  useEffect(() => {
    const updatedItems = localStorage.getItem("item");
    const finalList = JSON.parse(updatedItems);
     
    setItem(finalList);
     
    console.log(finalList);
  }, []);

  return (
    <div>
      <Hero />
      <SearchBar setSearch={setSearchQuery} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <ItemCardGrid item={visibleItems} />
    </div>
  );
};

export default Home;
