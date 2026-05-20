import React from "react";
import Image from "next/image";

const OurCategory = () => {
  // Mock data structure matching the items in your design image
  const categories = [
    { id: 1, name: "Clothing", image: "/assets/dress.png" },
    { id: 2, name: "Shoes", image: "/assets/shoes.png" },
    { id: 3, name: "Pants", image: "/assets/pants.png" },
    { id: 4, name: "Accessories", image: "/assets/glasses.png" },
    { id: 5, name: "Jewelry", image: "/assets/jewelry.png" },
    { id: 6, name: "Bags", image: "/assets/bag.jpg" },
  ];

  return (
    <section className="w-full bg-white py-10 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h3 className="mb-6 text-[20px] text-[#3C4242] font-medium tracking-tight sm:text-[22px]">
          Our Categories
        </h3>

        {/* Responsive Grid Layout */}
        {/* 2 columns on very small mobile, 3 on small tablets, 4 on medium screens, and 6 on desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Image Container with matching light grey accent background */}
              <div className="relative aspect-[1/1.2] w-full overflow-hidden rounded-xs bg-[#F2F2F2] p-4 flex items-center justify-center transition-all duration-300 group-hover:bg-[#EAEAEA]">
                {/* Using Next.js Image component for performance tuning.
                  Replace mock paths with your actual asset routes.
                */}
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={category.image}
                    alt={`${category.name} Category`}
                    fill
                    sizes="(max-w-640px) 50vw, (max-w-768px) 33vw, (max-w-1024px) 25vw, 16vw"
                    priority={category.id <= 4}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Category Label */}
              <span className="mt-3 text-[14px] font-normal text-[#333333] transition-colors duration-200 group-hover:text-black group-hover:underline underline-offset-4">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCategory;
