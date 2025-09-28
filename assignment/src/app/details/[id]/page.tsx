"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import Reviews from "@/components/reviews";
import { useCart } from "@/context/CartContext";
import SuccessPopup from "@/components/SuccessPopup";

const MealDetailsPage = () => {
  const searchParams = useSearchParams();
  const meal = searchParams.get("meal");
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const [kids, setKids] = useState(0);
  const [adults, setAdults] = useState(1);

  if (!meal) return <div>No meal found</div>;

  const mealData = JSON.parse(meal);

  const adultPrice = Number(mealData?.price?.adult) || 0;
  const kidPrice = Number(mealData?.price?.kid) || 0;

  const totalCost = adultPrice * adults + kidPrice * kids;

  const handleAddToCart = () => {
    const item = {
      id: mealData.title,
      title: mealData.title,
      price: { adult: adultPrice, kid: kidPrice },
      adults,
      kids,
      total: totalCost,
      image: mealData.images[0],
    };
    addToCart(item);
    setShowPopup(true);
  };

  return (
    <>
      <Header />
      <Home />
      <div className="px-4 sm:px-6 py-8 sm:py-10 max-w-6xl mx-auto">
        {/* Go Back */}
        <button className="text-sm text-gray-500 mb-4 hover:underline">
          &lt; Go Back
        </button>

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-gray-800 mb-1">
          {mealData.vendor} -{" "}
          <span className="text-yellow-600">{mealData.city}</span>
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-6">
          The Best City View Dining
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Breakfast", "Lunch", "Dinner", "Events", "Offers"].map(
            (tab) => (
              <button
                key={tab}
                className={`px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full border ${
                  tab === mealData.type
                    ? "bg-pink-100 text-pink-600 font-semibold border-pink-300"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Section: Images */}
          <div>
            <img
              src={mealData.images[0]}
              alt={mealData.title}
              className="w-full h-[220px] sm:h-[320px] object-cover rounded-xl mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {mealData.images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`meal-${idx}`}
                  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Right Section: Details */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-playfair mb-2">
              {mealData.title}
            </h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {mealData.description}
            </p>

            <p className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              <span className="text-pink-600">Breakfast Time:</span> Monday to
              Sunday – 6:30am to 10:30am
            </p>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Price – USD {mealData.price.adult} per adult & USD{" "}
              {mealData.price.kid} per child (6–11 years)
            </p>
            <p className="text-green-600 font-medium mb-4 text-sm sm:text-base">
              Availability: In Stock
            </p>

            {/* Price */}
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              USD {mealData.price.adult}
            </p>

            {/* Tickets */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                Available Options
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Kids */}
                <div className="flex items-center border rounded-lg px-3 py-2 text-sm sm:text-base">
                  <span className="text-yellow-600 font-semibold mr-2">
                    Kids Ticket
                  </span>
                  <button
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="px-2"
                  >
                    –
                  </button>
                  <span className="px-2">{kids}</span>
                  <button onClick={() => setKids(kids + 1)} className="px-2">
                    +
                  </button>
                </div>

                {/* Adults */}
                <div className="flex items-center border rounded-lg px-3 py-2 text-sm sm:text-base">
                  <span className="text-yellow-600 font-semibold mr-2">
                    Adults Ticket
                  </span>
                  <button
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                    className="px-2"
                  >
                    –
                  </button>
                  <span className="px-2">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="px-2">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Date Selector */}
            <div className="mb-6">
              <label className="block text-gray-600 text-xs sm:text-sm mb-1">
                Date Selection
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2" />
                <select className="flex-1 outline-none text-sm sm:text-base">
                  <option>- Please Select -</option>
                  <option>27 Sep 2025</option>
                  <option>28 Sep 2025</option>
                </select>
              </div>
            </div>

            {/* Total Cost */}
            <p className="text-base sm:text-lg font-bold text-yellow-600 mb-6">
              USD {totalCost} net
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="px-5 sm:px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-sm sm:text-base"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
      {showPopup && (
        <SuccessPopup
          message={`You have added ${mealData.title} at ABC Ventures - ${mealData.city} to your shopping basket`}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default MealDetailsPage;
