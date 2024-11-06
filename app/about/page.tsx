import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-8">
        <Image
          src="/ccccccccccccccc.jpg"
          alt="cofee"
          width={800}
          height={300}
          className="aboutpic"
        />
      </div>
      <h1 className=" text-4xl font-extrabold text-center text-gray-800 mb-6">About Us
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
        Welcome to Kiran Coffee Shop, where we promise to <br></br>brighten your
        day with every cup! Our shops name Kiran symbolizes<br></br> the hope
        and joy we aim to bring to your daily routine, just like <br></br>
        the first light of dawn. At Kiran Coffee Shop, you’ll find freshly
        <br></br> brewed coffee made from the finest quality beans. Our skilled{" "}
        <br></br>baristas pour their love and dedication into every cup,
        ensuring that<br></br> each sip is a unique experience.
      </p>
      <div className="bg-gray-100 py-8 px-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Story:
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Kiran Coffee Shop started as a small dream to transform our passion
          for coffee into a business. <br></br>We want you to enjoy not just a
          drink but an experience that lingers in your memory. Come visit
          <br></br> us at Kiran Coffee Shop and start your day with a new ray of
          light!
        </p>
      </div>
    </div>
  );
};

export default Page;
