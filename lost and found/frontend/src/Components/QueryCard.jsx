import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const QueryCard = ({ item, onDelete, onResolve }) => {
  const statusStyles = {
    Lost: "bg-red-100 text-red-600 border-red-200",
    Found: "bg-green-100 text-green-600 border-green-200",
    Resolved: "bg-gray-200 text-gray-600 border-gray-200 text-lg",
  };
  const isResolved = item.status === "Resolved";
  return (
    <div
      className={`${isResolved ? "bg-gray-100 border-gray-100 opacity-70 scale-[0.98]" : "bg-white"}  transition-all duration-500 ease-in-out border border-slate-50  rounded-xl shadow-sm flex overflow-hidden`}
    >
      <div className="w-56  bg-gray-100">
        <img
          src={item.image}
          className="w-full h-full object-cover"
          alt={item.name}
        />
      </div>

      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <span
            className={`${statusStyles[item.status]} text-xs  px-2 py-1 rounded-full `}
          >
            {item.status}
          </span>

          <div
            className={`text-xl my-1.5 font-semibold ${isResolved ? "line-through text-gray-500" : ""}`}
          >
            {item.name}
          </div>

          <div className="text-sm text-gray-500 mt-1">
            <div className="flex items-center gap-2">
              <FaLocationDot />
              {item.location}
            </div>
            <div className="flex items-center gap-2">
              <MdDateRange />
              {item.date}
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-2">{item.description}</div>
        </div>

        <div className="flex items-center justify-between mt-4 ">
          {!isResolved && (
            <button
              onClick={() => onResolve(item.id)}
              className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg text-2sm hover:bg-blue-700
              transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <span>Mark as Resolved</span>
              </div>
            </button>
          )}

          <div className="flex gap-3">
            {!isResolved && (
              <button className="px-3 py-2 border cursor-pointer border-gray-50 bg-gray-100 rounded-lg text-2sm transition-all duration-300 hover:scale-105 hover:bg-gray-200">
                <div className="flex items-center gap-2">
                  <MdEdit />
                  <span>Edit</span>
                </div>
              </button>
            )}

            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-2 bg-red-100 text-red-600 hover:bg-red-200 cursor-pointer rounded-lg text-2sm transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2 ">
                <MdDelete />
                <span>Delete</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
