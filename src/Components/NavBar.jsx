import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 sticky top-0 z-100 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 ">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10"
            src="data:image/png;base64,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"
            alt="logo"
          />
          <div className="text-2xl font-bold">UniRetreat</div>
        </div>
        {/* Dekstop */}
        <div className="hidden sm:flex gap-6">
          <button
            onClick={() => {
              navigate("/");
            }}
            className={
              location.pathname === "/"
                ? "font-semibold text-blue-600 text-lg cursor-pointer"
                : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
            }
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              navigate("/queries");
            }}
            className={
              location.pathname === "/queries"
                ? "font-semibold text-blue-600 text-lg cursor-pointer"
                : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
            }
          >
            My Queries
          </button>

          <button
            onClick={() => {
              navigate("/add");
            }}
            className={
              location.pathname === "/add"
                ? "font-semibold text-blue-600 text-lg cursor-pointer"
                : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
            }
          >
            Add Item
          </button>
        </div>
        <button
          className="text-xl cursor-pointer mr-2 sm:hidden"
          onClick={() => setOpen((p) => !p)}
        >
          ☰
        </button>
       
      </div>
       {/* Mobile */}
        {open && (
          <div className="flex flex-col gap-3 p-6 bg-white backdrop-blur-md sm:hidden">
            <button
              onClick={() => {
                navigate("/");
              }}
              className={
                location.pathname === "/"
                  ? "font-semibold text-blue-600 text-lg cursor-pointer"
                  : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
              }
            >
              Dashboard
            </button>

            <button
              onClick={() => {
                navigate("/queries");
              }}
              className={
                location.pathname === "/queries"
                  ? "font-semibold text-blue-600 text-lg cursor-pointer"
                  : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
              }
            >
              My Queries
            </button>

            <button
              onClick={() => {
                navigate("/add");
              }}
              className={
                location.pathname === "/add"
                  ? "font-semibold text-blue-600 text-lg cursor-pointer"
                  : "text-gray-600 text-lg hover:text-blue-600 cursor-pointer"
              }
            >
              Add Item
            </button>
          </div>
        )}
    </div>
  );
};

export default NavBar;
