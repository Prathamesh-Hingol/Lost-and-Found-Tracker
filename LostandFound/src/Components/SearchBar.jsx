import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative w-full max-w-7xl">
        
        <div className="absolute text-xl  left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <IoSearchSharp/>
        </div>

        
        <input
          type="text"
          placeholder="Search by item name or location"
          className="w-full text-lg h-14 pl-12 pr-4 rounded-xl bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
