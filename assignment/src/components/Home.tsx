"use client";
import { useState } from "react";
import Image from "next/image";

const Home = () => {
  const cities = [
    "ABC Ventures - City A",
    "ABC Ventures - City B",
    "ABC Ventures - City C",
    "ABC Ventures - City D",
  ];

  const [location, setLocation] = useState(cities[0]);
  const [date, setDate] = useState("June 13, 25");
  const [meal, setMeal] = useState("Breakfast");
  const [adults, setAdults] = useState(1);
  const [tableNo, setTableNo] = useState(15);

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/Bannerimg.png"
        alt="ABC Ventures Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Reservation Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-11/12 md:w-4/5 lg:w-3/4 bg-white rounded-tl-3xl rounded-br-lg shadow-3xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Location Selector */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full md:w-auto text-gray-800"
        >
          {cities.map((city) => (
            <option
              key={city}
              value={city}
              className={
                location === city ? "text-pink-600 font-semibold" : "text-gray-800"
              }
            >
              {city}
            </option>
          ))}
        </select>

        {/* Date & Meal */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md p-2 w-1/2"
          />
          <select
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            className="border rounded-md p-2  w-1/2"
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

        {/* Adults */}
        <select
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="border rounded-md p-2 w-full md:w-auto"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1}>{i + 1} Adults</option>
          ))}
        </select>

        {/* Table No */}
        <input
          type="number"
          value={tableNo}
          onChange={(e) => setTableNo(Number(e.target.value))}
          className="border rounded-md p-2 w-full md:w-auto"
          placeholder="Table No"
        />

        {/* Button */}
        <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold px-6 py-2 rounded-md">
          Reserve Now
        </button>
      </div>

      {/* City List Under Selector */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2  w-full">
  <div className="flex justify-center gap-8 text-2xl font-medium text-white">
    {cities.map((city) => (
      <span
        key={city}
        className={`cursor-pointer ${
          location === city
            ? "text-yellow-500 "
            : "hover:text-yellow-500 "
        }`}
        onClick={() => setLocation(city)}
      >
        {city}
      </span>
    ))}
  </div>
</div>

    </section>
  );
};

export default Home;
