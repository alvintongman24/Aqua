// components/Navbar.jsx
"use client";

import React from "react";


const cardsData = [
  {
    id: 1,
    title: "CORE STRENGTH",
    description: "The Aqua Foundation's core strength lies in empowering the marginalized through advocacy, education, and sustainable support systems. We are deeply committed to restoring dignity, providing access to justice, and creating opportunities for widows, orphans, and the unjustly imprisoned to thrive.",
    imageUrl: "https://www.shutterstock.com/image-photo/lake-kiva-rwanda-may-2017-600nw-1925272448.jpg"
  },
  {
    id: 2,
    title: "Physical Properties (Beyond Strength)",
    description: "Agility describes how quick, nimble, or graceful they are; Endurance defines their ability to sustain effort without tiring.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lN-8bFsfkTxN9gZTP4r2oQk8skhOA6bvAg&s"
  },
  {
    id: 3,
    title: "Mental & Intellectual Properties",
    description: "Intelligence encompasses their raw brain power, ability to solve complex problems, and quickness of thought.",
    imageUrl: "https://www.shutterstock.com/image-photo/abuja-nigeria-august-02-2021-600nw-2018049758.jpg"
  }
];

export default function CardSection() {
  return (
    <section className="relative bg-brown-300 py-20 md:py-2 m-6 md:m-2">
      <div className="py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-cover bg-center w-full lg:w-1/3 h-96 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundImage: `url('${card.imageUrl}')` }}
            >
              <div className="bg-black/55  bg-opacity-50 p-6 h-full flex flex-col justify-end rounded-lg  ">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}