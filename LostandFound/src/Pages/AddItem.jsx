import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    status: "Lost",
    name: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedItems = JSON.parse(localStorage.getItem("item")) || [];
    const newItem = {
      id: Date.now(),
      ...formData,
      createdByUser: true,
    };
    const updatedItems = [newItem, ...storedItems];
    localStorage.setItem("item", JSON.stringify(updatedItems));
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center py-10 px-4">
        <div className="max-w-160 w-full flex flex-col">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">Add New Item</div>

            <div className="text-gray-500 text-3sm">
              Share details to help reunite items with their rightful owners.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border p-6"
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Item Status
                </div>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Lost">
                    Lost - I am looking for something
                  </option>
                  <option value="Found">Found - I found something</option>
                </select>
              </div>

              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Item Name
                </div>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Blue North Face Backpack"
                  className="w-full p-4 border border-gray-500   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-2sm font-semibold uppercase mb-2">
                    Date
                  </div>

                  <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <div className="text-2sm font-semibold uppercase mb-2">
                    Location
                  </div>

                  <input
                    name="location"
                    onChange={handleChange}
                    value={formData.location}
                    type="text"
                    placeholder="e.g. Central Library"
                    className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Description
                </div>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe any unique markings, contents, or brands..."
                  className="w-full p-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Photo
                </div>

                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center text-gray-400">
                  <div className="text-3xl mb-2">📷</div>
                  <div>Click to upload or drag and drop</div>
                  <div className="text-xs mt-1">PNG, JPG up to 10MB</div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Post Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
