import React from "react";
import Products from "../../lib/Products";
import { Link } from "react-router-dom";

export default function CartComponents({ showAll = false }) {
  const ProductsToDisplay = showAll ? Products : Products.slice(0, 4);

  return (
    <>
      {ProductsToDisplay.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/skindetail/${product.id}`}>
              <div className="group block overflow-hidden">
                <img
                  src={product.image_url}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      {product.price}{" "}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
