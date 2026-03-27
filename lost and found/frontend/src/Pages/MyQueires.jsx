import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import FilterBar from "../Components/FilterBar";
import ItemCardGrid from "../Components/ItemCardGrid";
import QueryCard from "../Components/QueryCard";
import Hero2 from "../Components/Hero2";
const MyQueires = () => {
  const [myItems, setMyItems] = useState([]);
  const [userFilter, setUserFilter] = useState("All");
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("item")) || [];
    console.log(storedItems);

    const userItems = storedItems.filter((item) => item.createdByUser === true);
    console.log(userItems);

    setMyItems(userItems);
  }, []);

  const visibleItems = myItems.filter((item) => {
    const matchesFilter = userFilter === "All" || item.status === userFilter;

    const matchesSearch =
      item.name.toLowerCase().includes(userSearch.toLowerCase()) ||
      item.location.toLowerCase().includes(userSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  const handleDelete = (id) => {
    const items = JSON.parse(localStorage.getItem("item")) || [];
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem("item", JSON.stringify(updatedItems));
    const userItems = updatedItems.filter(
      (item) => item.createdByUser === true,
    );

    setMyItems(userItems);
  };
  const handleResolve = (id) => {
    const items = JSON.parse(localStorage.getItem("item")) || [];
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: "Resolved" };
      }
      return item;
    });

    localStorage.setItem("item", JSON.stringify(updatedItems));
    const userItems = updatedItems.filter(
      (item) => item.createdByUser === true,
    );

    setMyItems(userItems);
  };

  return (
    <div>
      <Hero2 />
      <SearchBar setSearch={setUserSearch} />
      <FilterBar filter={userFilter} setFilter={setUserFilter} />
      <div className="my-4 max-w-7xl mx-auto flex flex-col gap-4">
        {visibleItems.map((item) => {
          return (
            <QueryCard
              key={item.id}
              item={item}
              onResolve={handleResolve}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyQueires;
