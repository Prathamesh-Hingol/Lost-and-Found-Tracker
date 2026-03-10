import React from "react";

const AddItem = () => {
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

          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex flex-col gap-6">
              
              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Item Status
                </div>

                <select className="w-full p-4 border rounded-lg bg-gray-50">
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
                  type="text"
                  placeholder="e.g. Blue North Face Backpack"
                  className="w-full p-4 border rounded-lg bg-gray-50"
                />
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-2sm font-semibold uppercase mb-2">Date</div>

                  <input
                    type="date"
                    className="w-full p-4 border rounded-lg bg-gray-50"
                  />
                </div>

                <div>
                  <div className="text-2sm font-semibold uppercase mb-2">
                    Location
                  </div>

                  <input
                    type="text"
                    placeholder="e.g. Central Library"
                    className="w-full p-4 border rounded-lg bg-gray-50"
                  />
                </div>
              </div>

              
              <div>
                <div className="text-2sm font-semibold uppercase mb-2">
                  Description
                </div>

                <textarea
                  rows="4"
                  placeholder="Describe any unique markings, contents, or brands..."
                  className="w-full p-4 border rounded-lg bg-gray-50"
                />
              </div>

              
              <div>
                <div className="text-2sm font-semibold uppercase mb-2">Photo</div>

                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center text-gray-400">
                  <div className="text-3xl mb-2">📷</div>
                  <div>Click to upload or drag and drop</div>
                  <div className="text-xs mt-1">PNG, JPG up to 10MB</div>
                </div>
              </div>

              
              <div>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition">
                  Post Item
                </button>

                
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AddItem;
