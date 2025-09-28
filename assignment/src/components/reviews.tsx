import React from "react";
import { Star } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "Patricia Schmidt",
    rating: 5,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 19, 2023",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "John Tyler",
    rating: 4,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 18, 2023",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Ewa Jane",
    rating: 5,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 19, 2023",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Patricia Schmidt",
    rating: 5,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 19, 2023",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Ewa Jane",
    rating: 5,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 19, 2023",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Patricia Schmidt",
    rating: 5,
    review:
      "The staff were welcoming and the room was clean and cozy. I loved the peaceful atmosphere. It's a perfect place to relax and recharge anytime.",
    date: "September 19, 2023",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

const Reviews = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-playfair font-bold text-center text-pink-800 mb-10">
        Reviews
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-200   p-6 flex flex-col gap-4 rounded-tl-2xl rounded-br-2xl "
          >
            {/* Reviewer */}
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {review.rating}/5
                  </span>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{review.review}"
            </p>

            {/* Date */}
            <p className="text-xs text-gray-400">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
