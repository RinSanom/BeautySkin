import React from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShare, FaStar, FaShoppingCart } from "react-icons/fa";
import Products from "../lib/Products";

export default function SkinDetail() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 rounded-lg bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="relative group  ">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-[400px] h-auto rounded-lg object-cover"
              />
              <div className="absolute top-4 right-4 space-x-2"></div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(128 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-semibold text-gray-900">
                ${product.price}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-600">Dermatologically tested</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-600">
                    Suitable for all skin types
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-600">Paraben-free formula</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <FaShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <FaShare className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600">
                  In stock and ready to ship
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
