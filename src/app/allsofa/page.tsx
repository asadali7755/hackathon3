"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { AddToCart } from "../actions/actions";
import Swal from "sweetalert2";

const Allproduct = () => {
  const [product, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // Initial state is null to fix hydration issue

  // Fetch Products
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  // Apply Dark Mode from Local Storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  // Add to Cart Function
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position : "top-right",
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      showConfirmButton : false,
      timer: 1000
    });
    AddToCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end mb-4">
        {darkMode !== null && (
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/product/${product.slug?.current || ""}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 ease-in-out mt-4"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
