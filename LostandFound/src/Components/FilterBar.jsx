import React from "react";

const FilterBar = () => {
  return (
    <div className="mt-6 max-w-7xl flex justify-start mx-auto ">
      <div className="flex flex-wrap gap-3 max-w-3xl w-full">
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white text-2sm font-semibold">
          All Items
        </button>

        <button className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-2sm font-semibold hover:bg-gray-50">
          Lost
        </button>

        <button className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 text-2sm font-semibold hover:bg-gray-50">
          Found
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
