"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-2 sm:gap-0 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand)] Playfair">
          ABC Ventures
        </h1>
        <span className="text-yellow-600 text-lg sm:text-xl Playfair">
          - City A
        </span>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8">
        {mealTypes.map((type) => (
          <button
            key={type}
            className={`px-3 sm:px-4 py-1 rounded text-sm sm:text-base ${
              filter === type
                ? "bg-[var(--color-brand)] text-white"
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-brand)] mb-4 Playfair text-center sm:text-left">
              {mealType}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealsOfType.map((meal, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={meal.images[0]}
                    alt={meal.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-tl-2xl rounded-br-2xl"
                  />
                  <div className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-start py-2 sm:py-4">
                      <div className="sm:w-3/4 w-full">
                        <h3 className="font-semibold mb-1 text-base sm:text-lg">
                          {meal.title}
                        </h3>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">
                          {meal.description.length > 30
                            ? meal.description.slice(0, 30) + "..."
                            : meal.description}
                        </p>
                      </div>
                      <div className="sm:w-1/4 w-full font-bold text-yellow-600 text-sm sm:text-base mt-2 sm:mt-0">
                        USD {meal.price.adult}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 justify-between">
                      {/* Navigate to /details/[id] */}
                      <Link
                        href={{
                          pathname: `/details/${idx}`,
                          query: { meal: JSON.stringify(meal) },
                        }}
                        className="w-full sm:w-auto"
                      >
                        <button className="w-full sm:w-auto border border-[var(--color-brand)] text-[var(--color-brand)] px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-red-800 hover:text-white transition rounded-tl-xl rounded-br-xl Playfair">
                          View Menu
                        </button>
                      </Link>

                      <button className="w-full sm:w-auto bg-[var(--color-brand)] text-white px-4 sm:px-6 py-2 text-sm sm:text-base hover:bg-red-900 transition rounded-tl-xl rounded-br-xl Playfair">
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
