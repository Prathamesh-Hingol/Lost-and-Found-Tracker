import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="mt-6 max-w-7xl flex justify-start mx-auto ">
      <div className="flex flex-wrap gap-3 max-w-3xl w-full">
        <button
          onClick={() => {
            setFilter("All");
          }}
          className={`px-5 py-2 rounded-lg ${filter === "All" ? "bg-blue-600 text-white" : "border border-gray-200 bg-white text-gray-600  hover:bg-gray-50"} text-2sm font-semibold`}
        >
          All Items
        </button>

        <button
          onClick={() => {
            setFilter("Lost");
          }}
          className={`px-5 py-2 rounded-lg ${filter === "Lost" ? "bg-blue-600 text-white" : "border border-gray-200 bg-white text-gray-600  hover:bg-gray-50"} text-2sm font-semibold`}
        >
          Lost
        </button>

        <button
          onClick={() => {
            setFilter("Found");
          }}
          className={`px-5 py-2 rounded-lg ${filter === "Found" ? "bg-blue-600 text-white" : "border border-gray-200 bg-white text-gray-600  hover:bg-gray-50"} text-2sm font-semibold`}
        >
          Found
        </button>
        <button
          onClick={() => {
            setFilter("Resolved");
          }}
          className={`px-5 py-2 rounded-lg ${filter === "Resolved" ? "bg-blue-600 text-white" : "border border-gray-200 bg-white text-gray-600  hover:bg-gray-50"} text-2sm font-semibold`}
        >
          Resolved
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
