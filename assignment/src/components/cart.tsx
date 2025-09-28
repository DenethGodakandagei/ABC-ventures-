"use client";

import { useCart } from "@/context/CartContext"; 
import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  // Calculate total cost
  const total = cart.reduce((acc, item) => acc + item.total, 0);

  // Stripe Checkout handler
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map((item) => ({
          title: item.title,
          image: item.image,
          price: item.price.adult, // adjust if you want to include kids
          quantity: item.adults,   // adjust as needed
        })),
      }),
    });

    const data = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm min-h-[500px]">
      {/* Go Back */}
      <div
        className="flex items-center gap-2 text-red-600 cursor-pointer mb-6"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
        <span className="font-medium">Go Back</span>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center mt-10">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start justify-between gap-8 mb-6"
            >
              {/* Left - Image & Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-red-700">{item.title}</h2>
                  <p className="text-gray-700 text-sm">
                    {item.adults > 0 && (
                      <>
                        {item.adults} Adults x USD {item.price.adult}
                        <br />
                      </>
                    )}
                    {item.kids > 0 && (
                      <>
                        {item.kids} Kids x USD {item.price.kid}
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Right - Ticket + Date + Remove */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Ticket Type & Quantity */}
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">*Ticket Type & Quantity</span>
                  <div className="flex items-center border border-red-300 rounded-lg px-3 py-1">
                    <span className="mr-4 text-red-700 font-medium">Adults Ticket</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.adults - 1), item.kids)
                      }
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-3">{item.adults}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.adults + 1, item.kids)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">*Date</span>
                  <input
                    type="date"
                    defaultValue="2025-06-13"
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  />
                </div>

                {/* Remove */}
                <div
                  className="flex flex-col items-center text-red-600 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                  <span className="text-xs mt-1">Remove</span>
                </div>
              </div>
            </div>
          ))}

          {/* Divider */}
          <hr className="my-6 border-t border-yellow-400" />

          {/* Footer */}
          <div className="flex justify-between items-center">
            <p className="text-lg">
              Total - <span className="font-bold">USD {total}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
