"use client";
import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg text-center">
        {/* Check Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center border-4 border-green-500 rounded-full">
            <Check className="w-8 h-8 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="bg-[var(--color-brand)] text-white px-6 py-2 rounded-lg hover:bg-red-900 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => router.push("/orders")}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default page