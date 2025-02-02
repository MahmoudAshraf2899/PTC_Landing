"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";
const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";

const GuaranteeSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [guaranteeData, setGuaranteeData] = useState<{
    title: string;
    isActive: boolean;
    nodes: { id: number; title: string; icon: string }[]; // Added nodes array
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchGuaranteeData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/GuaranteeSection/1`); // Replace with your actual API URL
        if (!response.ok) throw new Error("Failed to fetch hero data");

        const data = await response.json();
        setGuaranteeData({
          ...data,
          title: data.data.title,
          isActive: data.data.isActive,
          nodes: data.data.nodes,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchGuaranteeData();
  }, []);
  
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="mt-20 px-6">
        {/* Section Title */}
        <h2 className="text-center CalistogaFont text-3xl md:text-5xl font-bold text-white">
          {guaranteeData?.title
            ? guaranteeData.title
            : "Your safety is our goal!"}
        </h2>

        {/* Guarantee Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
          {guaranteeData?.nodes.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Icon Container */}
              <div className="flex items-center justify-center rounded-full mainBackground h-[160px] w-[160px] md:h-[200px] md:w-[200px]">
                <Image
                  src={BASE_URL + item.icon}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                  alt="guarantee_section"
                />
              </div>
              {/* Guarantee Text */}
              <p className="mt-4 text-white text-[14px] md:text-[16px] font-medium max-w-[250px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GuaranteeSection;
