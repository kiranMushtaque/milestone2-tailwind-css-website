"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CiCoffeeCup } from "react-icons/ci";

const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    setSearchTerm("");
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
   
      <div className="flex items-center space-x-28">
        <CiCoffeeCup className=" bg-yellow-800 text-3xl mr-4" />
        <button onClick={() => router.push("/")} className="link">
          Home
        </button>
        <button onClick={() => router.push("/about")} className="link">
          About
        </button>
        <button onClick={() => router.push("/contact")} className="link">
          Contact
        </button>
      </div>
      {/* logo */}

      {/* serch bar */}
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-border border-gray-300"
          aria-label="Search"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
