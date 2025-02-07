"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import {
  getCartItems,
  removeFromCart,
  updataCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleremove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d3085d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updataCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1)
      handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d3085d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout1")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#89c2d9]">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={300}
                  height={300}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              )}

              <div className="flex-1 ml-4 text-center md:text-left">
                <h2 className="text-lg font-semibold text-[#89c2d9]">{product.name}</h2>
                <p className="text-gray-500 dark:text-[#89c2d9]">${product.price}</p>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <button
                    className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded-lg text-[#89c2d9]"
                    onClick={() => handleDecrement(product._id)}
                  >
                    -
                  </button>
                  <span className="mx-3 text-lg text-[#89c2d9]">{product.stockLevel}</span>
                  <button
                    className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded-lg text-[#89c2d9]"
                    onClick={() => handleIncrement(product._id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleremove(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg mt-2 md:mt-0"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold text-[#89c2d9]">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleProceed}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
