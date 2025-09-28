"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext"; // ✅ import context

const Header = () => {
  const { cart } = useCart(); // ✅ get cart from context

  // Calculate total items (adults + kids across all cart items)
  const cartCount = cart.reduce((acc, item) => acc + item.adults + item.kids, 0);

  return (
    <header className="absolute top-0 left-0 w-full z-20 Playfair">
      <div className="flex items-center justify-between px-8 py-4 bg-transparent">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-white">A B C</h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          <Link href="/" className="hover:text-pink-400">
            Home
          </Link>
          <Link href="/" className="hover:text-pink-400">
            About
          </Link>
          <Link href="/" className="hover:text-pink-400">
            Restaurants
          </Link>
          <Link href="/" className="hover:text-pink-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-pink-400">
            Contact
          </Link>
        </nav>

        {/* Cart */}
        <Link
          href="/cart"
          className="flex items-center bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded-md"
        >
          <ShoppingCart size={18} className="mr-2" />
          {cartCount} Items
        </Link>
      </div>
    </header>
  );
};

export default Header;
