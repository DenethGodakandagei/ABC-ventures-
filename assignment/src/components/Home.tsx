"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface Hotel {
  _id: string;
  name: string;
  city: string;
}

const Home = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState("June 13, 25");
  const [meal, setMeal] = useState("Breakfast");
  const [adults, setAdults] = useState(1);
  const [tableNo, setTableNo] = useState(15);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get<Hotel[]>("/api/hotels");
        const data = res.data;
        setHotels(data);

        if (data.length > 0) {
          setLocation(`${data[0].name} - ${data[0].city}`);
        }
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <section className="relative w-full md:h-[500px] h-screen Playfair">
      {/* Background Image */}
      <Image
        src="/Bannerimg.png"
        alt="ABC Ventures Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Reservation Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 w-11/12  md:w-4/5 lg:w-3/4 bg-white rounded-tl-3xl rounded-br-lg shadow-3xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      
        {/* Location Selector */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full md:w-auto text-gray-800"
        >
          {hotels.map((hotel) => {
            const value = `${hotel.name} - ${hotel.city}`;
            return (
              <option
                key={hotel._id}
                value={value}
                className={
                  location === value
                    ? "text-pink-600 font-semibold"
                    : "text-gray-800"
                }
              >
                {value}
              </option>
            );
          })}
        </select>

        {/* Date & Meal */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md p-2 w-full sm:w-1/2 md:w-auto"
          />
          <select
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            className="border rounded-md p-2 w-full sm:w-1/2 md:w-auto"
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
        <button className="bg-pink-700 hover:bg-pink-800 text-white font-semibold px-6 py-2 rounded-md w-full md:w-auto">
          Reserve Now
        </button>
      </div>

 {/* City List Under Selector */}
<div className="hidden md:block absolute bottom-24 left-1/2 -translate-x-1/2 w-full px-4">
  <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-2xl font-medium text-white text-center">
    {hotels.map((hotel) => {
      const value = `${hotel.name} - ${hotel.city}`;
      return (
        <span
          key={hotel._id}
          className={`cursor-pointer ${
            location === value
              ? "text-yellow-500"
              : "hover:text-yellow-500"
          }`}
          onClick={() => setLocation(value)}
        >
          {value}
        </span>
      );
    })}
  </div>
</div>

    </section>
  );
};

export default Home;
