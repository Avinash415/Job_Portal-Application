

import React from 'react';

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
      image: "https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
      image: "https://i.pinimg.com/564x/2b/c1/c9/2bc1c9c6efc3c194e67f30bfb0aa5e22.jpg",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
      image: "https://i.pinimg.com/564x/3a/4f/e0/3a4fe09ccc937d6b2f1af3ac391297e1.jpg",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
      image: "https://i.pinimg.com/736x/ce/c2/77/cec27788e932e06b4eb8fecb6e57c928.jpg",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
      image: "https://i.pinimg.com/564x/f4/78/88/f478885325bb9d6df8907386c9f0206d.jpg",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
      image: "https://i.pinimg.com/736x/83/d1/87/83d187aa6ba6c6d91ba3fe70c541650b.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-800">Top Niches</h3>
        <p className="text-gray-500 mt-2">Explore our most popular services in the tech industry</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {services.map((element) => {
          return (
            <div
              key={element.id}
              className="bg-indigo-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={element.image}
                  alt={element.service}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-semibold text-white">{element.service}</h4>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {element.service}
                </h4>
                <p className="text-black-600">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
