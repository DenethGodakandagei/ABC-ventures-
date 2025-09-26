"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Meal = {
  city: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Events" | "Offers";
  title: string;
  description: string;
  images: string[];
  price: {
    adult: number;
    kid: number;
  };
  availability: boolean;
};

const mealTypes: Array<Meal["type"] | "All"> = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Events",
  "Offers",
];

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [filter, setFilter] = useState<Meal["type"] | "All">("All");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/meals/")
      .then((res) => setMeals(res.data));
  }, []);

  const filteredMeals =
    filter === "All" ? meals : meals.filter((meal) => meal.type === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-red-800">ABC Ventures</h1>
        <span className="text-yellow-600 text-xl">- City A</span>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-8">
        {mealTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-1 rounded ${
              filter === type
                ? "bg-red-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Meal Sections */}
      {["Breakfast", "Lunch", "Dinner"].map((mealType) => {
        const mealsOfType = filteredMeals.filter((m) => m.type === mealType);
        if (mealsOfType.length === 0) return null;
        return (
          <div key={mealType} className="mb-12">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              {mealType}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealsOfType.map((meal, idx) => (
                <div key={idx} className="  overflow-hidden">
                  <img
                    src={meal.images[0]}
                    alt={meal.title}
                    className="w-full h-48 object-cover rounded-tl-2xl  rounded-br-2xl"
                  />
                  <div>
                    <div className="flex py-4">
                      <div className="w-3/4">
                        <h3 className="font-semibold mb-2">{meal.title}</h3>
                        <p className="text-gray-600 mb-2">
                          {meal.description.length > 30
                            ? meal.description.slice(0, 30) + "..."
                            : meal.description}
                        </p>
                      </div>
                      <div className="w-1/4 font-bold mb-4 text-yellow-600">
                        USD {meal.price.adult}{" "}
                      </div>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <button className="border border-red-800 text-red-800 px-6 py-1  hover:bg-red-800 hover:text-white transition rounded-tl-xl  rounded-br-xl">
                        View Menu
                      </button>
                      <button className="bg-red-800 text-white px-6 py-1  hover:bg-red-900 transition rounded-tl-xl  rounded-br-xl">
                        Reserve Table Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
