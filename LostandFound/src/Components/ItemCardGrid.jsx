import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useSearchParams } from "react-router-dom";

const ItemCardGrid = ({item}) => {
  const items = [
    {
      id: 1,
      name: "MacBook Pro M2",
      location: "Science Library, 3rd Floor",
      description: "Space Gray laptop with a NASA sticker on the lid.",
      date: "Oct 24, 2023",
      status: "Lost",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      id: 2,
      name: "Blue Hydroflask",
      location: "Student Union Cafe",
      description: "Blue 32oz bottle with multiple stickers left on a table.",
      date: "Oct 23, 2023",
      status: "Found",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: 3,
      name: "Leather Wallet",
      location: "Main Gym Lobby",
      description: "Dark brown leather wallet containing student ID.",
      date: "Oct 21, 2023",
      status: "Resolved",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    },
    {
      id: 4,
      name: "Denim Jacket",
      location: "Engineering Hall B",
      description: "Vintage wash denim jacket left in Room 204.",
      date: "Oct 20, 2023",
      status: "Lost",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 5,
      name: "Student ID Card",
      location: "Central Courtyard",
      description: "Found near fountain. Name visible on card.",
      date: "Oct 19, 2023",
      status: "Found",
      image:
        "https://images.unsplash.com/photo-1666334111978-614a8d680bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGlkJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      location: "Computer Lab 2",
      description: "Black earbuds case found under desk.",
      date: "Oct 18, 2023",
      status: "Found",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 7,
      name: "Black Backpack",
      location: "Lecture Hall A",
      description: "Large backpack containing notebooks and charger.",
      date: "Oct 17, 2023",
      status: "Lost",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 8,
      name: "Calculator (Casio FX-991)",
      location: "Math Department",
      description: "Scientific calculator left after exam.",
      date: "Oct 16, 2023",
      status: "Found",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620",
    },
    {
      id: 9,
      name: "Bike Helmet",
      location: "Campus Parking Area",
      description: "Red helmet hanging on bicycle rack.",
      date: "Oct 15, 2023",
      status: "Found",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 10,
      name: "Samsung Phone",
      location: "Auditorium",
      description: "Black Samsung phone left on seat row B.",
      date: "Oct 14, 2023",
      status: "Lost",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 11,
      name: "Silver Wrist Watch",
      location: "Gym Locker Room",
      description: "Metal strap watch left near lockers.",
      date: "Oct 13, 2023",
      status: "Lost",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];
  
  return (
    <div className="my-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {item
        .filter((item) => item.status !== "Resolved")
        .map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
  );
};

export default ItemCardGrid;
