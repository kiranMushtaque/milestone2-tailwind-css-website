import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="home-container">
      <div className="relative">
        <Image
          src="/banner cofee.webp"
          alt="banner"
          width={1420}
          height={500}
          className="w-full h-[500px] object-cover"
        />
        <h1 className="absolute top-[450px] left-1/2 transform -translate-x-1/2 text-3xl text-back font-bold">
          Aroma in Every Sip, Joy in Every Sip!
        </h1>
      </div>
      {/* 1 image  */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div className="image-box bg-gray-100 p-4 rounded-lg shadow-md">
          <Image
            src="/1.png"
            alt="Latte"
            className="gallery-image rounded-md"
            width={300}
            height={200}
          />
          <p className="text-center text-lg mt-2">Latte coffee</p>
          <button className="w-full mt-2 py-2 bg-blue-500 text-white rounded hover:cursor-pointer">
            Order
          </button>
        </div>

        {/* <!-- 2nd image --> */}

        <div className="image-box bg-gray-100 p-4 rounded-lg shadow-md">
          <Image
            src="/2.png"
            alt="Latte"
            className="gallery-image rounded-md"
            width={300}
            height={200}
          />
          <p className="text-center text-lg mt-2">Mocha Coffee</p>
          <button className="w-full mt-2 py-2 bg-blue-500 text-white rounded hover:cursor-pointer">
            Order
          </button>
        </div>

        {/* <!-- 3 image --> */}

        <div className="image-box bg-gray-100 p-4 rounded-lg shadow-md">
          <Image
            src="/3.png"
            alt="Latte"
            className="gallery-image rounded-md"
            width={300}
            height={200}
          />
          <p className="text-center text-lg mt-2">Coffee</p>
          <button className="w-full mt-2 py-2 bg-blue-500 text-white rounded hover:cursor-pointer">
            Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
