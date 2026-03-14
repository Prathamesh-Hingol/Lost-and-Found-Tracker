import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import AddItem from "./Pages/AddItem";
import MyQueires from "./Pages/MyQueires";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/queries" element={<MyQueires />} />
      </Routes>
    </div>
  );
};

export default App;
