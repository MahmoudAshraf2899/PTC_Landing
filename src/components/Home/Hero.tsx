"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "../Loader/loader";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [heroData, setHeroData] = useState<{
    mainImage: string;
    mainTitle: string;
    subImage: string;
    subTitle: string;
    subTitleDescription: string;
    isActive: boolean;
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_URL}/api/HeroSection/1`); // Replace with your actual API URL
        if (!response.ok) throw new Error("Failed to fetch hero data");

        const data = await response.json();
        setHeroData({
          ...data,
          mainImage: BASE_URL + data.data.mainImage,
          subImage: BASE_URL + data.data.subImage,
          mainTitle: data.data.mainTitle,
          subTitle: data.data.subTitle,
          subTitleDescription: data.data.subTitleDescription,
          isActive: data.data.isActive,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHeroData();
  }, []);
  return (
    <>
      {heroData?.isActive == false ? (
        <div className="pb-20"></div>
      ) : (
        <>
          {isLoading || !imageLoaded["main"] || !imageLoaded["sub"] ? (
            <Loader />
          ) : null}
          <div className="relative fade-in-scale flex flex-col lg:flex-row items-center lg:items-stretch  p-6 lg:p-28 text-white rounded-lg overflow-hidden">
            {/* Left Side - Main Image */}
            <div className="w-full lg:w-2/4 relative mb-6 lg:mb-0">
              {!imageLoaded["main"] || !imageLoaded["sub"] ? (
                <div className=" inset-0 object-cover bg-gray-700 animate-pulse"></div>
              ) : null}
              {heroData == null ? (
                <>
                  <div className="skeleton h-full"></div>
                </>
              ) : (
                <Image
                  src={heroData?.mainImage ? heroData.mainImage : ""}
                  alt="Main Hero Image"
                  className="object-cover absolute max-h-96 rounded-lg fade-in-scale"
                  width={650} // Fixed width
                  height={450} // Fixed height
                  priority
                  onLoad={() =>
                    setImageLoaded((prev) => ({ ...prev, main: true }))
                  }
                />
              )}
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-2/4 p-6 lg:p-10 flex flex-col justify-center">
              <h2 className="text-2xl fade-in-scale lg:text-4xl xs:text-center lg:text-left font-bold CalistogaFont uppercase text-white">
                {heroData?.mainTitle
                  ? heroData.mainTitle
                  : "BEST SOLUTION FOR YOUR BUSINESS"}
              </h2>

              {/* Buttons */}
              <div className="mt-4 flex flex-col fade-in-scale lg:flex-row gap-4">
                <Link
                  className="px-4 py-2  mainBackground rounded-lg text-center hover:text-white hover:bg-black hover:border hover:border-[#24BDBD] shadow-lg w-full"
                  href={"/Developments"}
                  onClick={() => {
                    setIsLoading(true);
                  }}
                >
                  Developments
                </Link>

                <Link
                  className="px-4 py-2 rounded-lg text-center  ConstuctionButton bg-inherit border MainBorder hover:text-white hover:bg-[#24BDBD] shadow-lg w-full"
                  href={"/Constructions"}
                  onClick={() => {
                    setIsLoading(true);
                  }}
                >
                  Constructions
                </Link>
              </div>

              {/* Sub Image & Text Box */}
              <div className="relative mt-8 heroSubTextBackground lg:p-4 rounded-lg shadow-lg">
                {/* Circular Sub Image */}
                <div className="absolute -top-4  hidden lg:block -left-20 lg:-left-[115px] w-32 h-32 lg:w-52 lg:h-52   rounded-full overflow-hidden">
                  {heroData == null ? (
                    <>
                      <div className="skeleton h-full"></div>
                    </>
                  ) : (
                    <Image
                      src={heroData?.subImage ? heroData.subImage : ""}
                      alt="Sub Image"
                      className="object-cover fade-in-up h-full max-h-96 rounded-lg"
                      width={650} // Fixed width
                      height={850} // Fixed height
                      priority
                      onLoad={() =>
                        setImageLoaded((prev) => ({ ...prev, sub: true }))
                      }
                    />
                  )}
                </div>

                {/* Text inside the box */}
                <div className="lg:pr-5 fade-in-up">
                  <h3 className="text-lg CalistogaFont lg:text-3xl  xs:pb-0 xs:pt-2 xs:text-center xs:text-nowrap  font-semibold">
                    {heroData?.subTitle
                      ? heroData.subTitle
                      : "Smarter Property Deals"}
                  </h3>
                  <p className="heroSubTextDescription lg:pl-[100px]  lg:text-justify xs:p-2 xs:text-center">
                    {heroData?.subTitleDescription
                      ? heroData.subTitleDescription
                      : "Trusted by professionals for buying, selling, and investing inreal estate with advanced tools, market insights, and expert guidance."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeroSection;
