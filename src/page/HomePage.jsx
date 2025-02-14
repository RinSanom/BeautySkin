import React from "react";
import CartComponents from "../components/cart/CartComponents";
const categories = [
  {
    id: 1,
    name: "Skincare",
    image:
      "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2023/11/product-04-a-400x488.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Products",
    image:
      "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-12-a-400x488.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Cosmetics",
    image:
      "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/product-11-a-400x488.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    name: "Hair Care",
    image:
      "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2023/11/product-04-a-400x488.jpg",
    className: "col-span-2 row-span-1",
  },
];
export default function HomePage() {
  return (
    <>
      <section className="relative bg-[url(https://images.healthshots.com/healthshots/en/uploads/2022/04/26095033/dark-circles-remedies.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Get The Skin YOu
              <strong className="block font-extrabold text-pink-600 ">
                {" "}
                Want To Feel.{" "}
              </strong>
            </h1>
            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-sm bg-pink-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:ring-3 focus:outline-hidden sm:w-auto">
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="px-32 pt-20">
        <div>
          <div className="">
            <h2 className="text-3xl font-extrabold text-pink-600 sm:text-5xl   ">
              Product Collection
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </div>
        </div>
        <div className="gap-4 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {[...Array(1)].map((_, index) => (
            <CartComponents showAll={false} key={index} />
          ))}
        </div>
      </section>
      <section className="bg-gray-100 mt-20">
        <div className="overflow-hidden rounded-lg   md:grid md:grid-cols-3 px-32 py-20">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="h-32 w-full object-cover md:h-full"
          />
          <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest">
              Run with the pack
            </p>

            <h2 className="mt-6 font-black uppercase">
              <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                {" "}
                Get 20% off{" "}
              </span>

              <span className="mt-2 block text-sm">
                On your next order over $50
              </span>
            </h2>

            <a
              className="mt-8 inline-block w-full bg-pink-600 py-4 text-sm font-bold uppercase tracking-widest text-white"
              href="#">
              Get Discount
            </a>

            <p className="mt-8 text-xs font-medium uppercase text-gray-400">
              Offer valid until 24th March, 2021 *
            </p>
          </div>
        </div>
      </section>
      <section className="px-32 pt-20">
        <div className=" mx-auto ">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Get The Skin YOu
            <strong className="block font-extrabold text-pink-600 ">
              {" "}
              Want To Feel.{" "}
            </strong>
          </h1>
          <p className="mt-4 max-w-lg text-black sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="grid grid-cols-4 gap-4 h-[600px]">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative group overflow-hidden rounded-lg ${category.className}`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-medium">
                    {category.name}
                  </h3>
                </div>
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
