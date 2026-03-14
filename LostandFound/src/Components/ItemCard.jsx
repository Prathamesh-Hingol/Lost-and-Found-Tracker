import React from "react";

const ItemCard = ({ item }) => {
  const statusStyles = {
    Lost: "bg-red-100 text-red-600 border-red-200",
    Found: "bg-green-100 text-green-600 border-green-200",
    Resolved: "bg-gray-100 text-gray-600 border-gray-200",
  };
  const statusWord={
    Lost : "View Details",
    Found: "Claim Item",
    Resolved : "Closed"
  }
  return (
    <div className="bg-white relative rounded-xl shadow  overflow-hidden">
      <div className=" h-44 w-full overflow-hidden">
        <img src={item.image} className="h-full w-full object-cover" />
      </div>
      <div
        className={`absolute top-3 z-50 right-3 px-3 py-1 text-xs font-bold rounded-full border ${statusStyles[item.status]}`}
      >
        {item.status}
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div className="text-xl font-bold">{item.name}</div>

        <div className="text-2sm text-gray-500">{item.location}</div>

        <div className="text-2sm text-gray-600 mt-2">{item.description}</div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-400">{item.date}</div>

          <button className={`${item.status==="Resolved" ? "text-gray-600" :"text-blue-600"} text-sm font-semibold`}>
            {statusWord[item.status]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
