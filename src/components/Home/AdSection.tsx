"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import adImage from "../../../public/icons/PTCLOGO-removebg-preview-left.png";
import Loader from "../Loader/loader";
import { BaseURL } from "../../constants/Bases";

const AdSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [adData, setAdData] = useState<{
    mainImage: string;
    title: string;
    description: string;
    isActive: boolean;
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchAdData = async () => {
      try {
        const response = await fetch(`${BaseURL.ptc}/api/AdSection/1`);
        if (!response.ok) throw new Error("Failed to fetch hero data");

        const data = await response.json();
        setAdData({
          ...data,
          title: data.data.title,
          description: data.data.description,
          mainImage: BaseURL.ptc + data.data.mainImage,
          isActive: data.data.isActive,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchAdData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {adData?.isActive == true ? (
        <>
          <div className="relative min-h-screen bg-white mt-20 px-6 md:px-12 lg:px-36 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              {/* Text Section */}
              <div className="text-center md:text-left">
                {adData == null ? (
                  <>
                    <div className="skeleton h-full"></div>
                  </>
                ) : (
                  <>
                    <h3 className="text-black CalistogaFont xs:pt-4 xs:text-3xl md:text-4xl lg:text-[42px] font-black leading-tight">
                      {adData?.title
                        ? adData.title
                        : "Soon PTC as a Mobile App"}
                    </h3>
                    <p className="interFont font-semibold text-black mt-4 text-base xs:text-xs lg:text-lg">
                      {adData?.description
                        ? adData.description
                        : "Looking for your dream home or the perfect investment property? PTC is here to make your search easier, faster, and more efficient. With a sleek, user-friendly design, finding the right property has never been more convenient."}
                    </p>
                  </>
                )}
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                {adData == null ? (
                  <>
                    <div className="skeleton h-full"></div>
                  </>
                ) : (
                  <Image
                    src={adData?.mainImage ? adData.mainImage : adImage}
                    width={300}
                    height={300}
                    priority
                    className="object-cover max-h-[800px]  rounded-lg max-w-full h-auto"
                    alt="PTC Mobile App Ad"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AdSection;
