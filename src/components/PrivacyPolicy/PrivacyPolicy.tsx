"use client";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";
const PrivacyPolicy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [privacyData, setPrivacyData] = useState<{
    description: string;
    mainImage: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchPrivacyData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${BASE_URL}/api/PrivacyPolicy/1`); // Replace with your actual API URL
        if (!response.ok)
          throw new Error("Failed to fetch Privacy Policy data");

        const data = await response.json();
        setPrivacyData({
          ...data,
          mainImage: BASE_URL + data.data.mainImage,
          description: data.data.description,
          title: data.data.title,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };

    fetchPrivacyData();
  }, []);
  return (
    <>
      {isLoading == true ? (
        <Loader />
      ) : (
        <>
          <div className="relative w-full fade-in-scale">
            {/* Background Image */}
            <div
              className="w-full h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage: privacyData?.mainImage
                  ? `url(${privacyData.mainImage})`
                  : "url('../../icons/hero.jpg')",
              }}
            ></div>

            {/* Privacy Policy Section */}
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10    -mt-24 relative">
              <h2 className="lg:text-2xl xs:text-2xl xs:text-center lg:text-left md:text-3xl text-black CalistogaFont font-black mb-4">
                Privacy Policy
              </h2>
              <div
                id="about-us-content"
                dangerouslySetInnerHTML={{
                  __html: privacyData?.description
                    ? privacyData.description
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

export default PrivacyPolicy;
