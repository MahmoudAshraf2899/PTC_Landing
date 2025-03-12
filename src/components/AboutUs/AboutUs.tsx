"use client";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";
import { useScrollToTop } from "../useScrollToTop/useScrollToTop";

import { BaseURL } from "../../constants/Bases";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutUsData, setAboutUsData] = useState<{
    description: string;
    mainImage: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BaseURL.ptc}/api/AboutUs/1`); // Replace with your actual API URL
        if (!response.ok) throw new Error("Failed to fetch about us data");

        const data = await response.json();
        setAboutUsData({
          ...data,
          mainImage: BaseURL.ptc + data.data.mainImage,
          description: data.data.description,
          title: data.data.title,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <>
      {useScrollToTop()}
      {isLoading == true ? (
        <Loader />
      ) : (
        <>
          <div className="relative w-full fade-in-scale pb-20">
            {/* Background Image */}
            <div
              className="w-full h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: aboutUsData?.mainImage
                  ? `url(${aboutUsData.mainImage})`
                  : "url('../../icons/hero.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white CalistogaFont-LessWeight text-center xs:text-[14px] lg:text-3xl md:text-2xl font-extralight">
                  {aboutUsData?.title
                    ? aboutUsData.title
                    : "Developing Vibrant Residential, Recreational, Tourism, and Commercial Projects"}
                </h1>
              </div>
            </div>

            {/* About Us Section */}
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10    -mt-24 relative">
              <h2 className="lg:text-2xl xs:text-2xl xs:text-center lg:text-left md:text-3xl text-black CalistogaFont font-black mb-4">
                About Us
              </h2>
              <div
                id="about-us-content"
                dangerouslySetInnerHTML={{
                  __html: aboutUsData?.description
                    ? aboutUsData.description
                    : "",
                }}
                className="text-black CalistogaFont-LessWeight"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUs;
