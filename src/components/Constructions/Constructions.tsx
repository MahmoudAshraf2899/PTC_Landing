"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import Link from "next/link";
import Loader from "../Loader/loader";
import { useScrollToTop } from "../useScrollToTop/useScrollToTop";
const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}
const Constructions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [constructionData, setConstructionData] = useState<{
    mainImage: string;
    title: string;
  } | null>(null);
  const [projectData, setProjectsData] = useState<
    {
      id: string;
      title: string;
      description: string;
      image: string;
    }[]
  >([]);
  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const mainDataResponse = await fetch(`${BASE_URL}/api/Constructions/1`);
        if (!mainDataResponse.ok) throw new Error("Failed to fetch hero data");

        const mainData = await mainDataResponse.json();
        setConstructionData({
          ...mainData,
          mainImage: BASE_URL + mainData.data.mainImage,
          title: mainData.data.title,
        });
        const response = await fetch(`${BASE_URL}/api/Constructions`);
        if (!response.ok) throw new Error("Failed to fetch hero data");

        const result = await response.json();
        if (Array.isArray(result.data)) {
          setProjectsData(
            result.data.map((project: Project) => ({
              id: project.id,
              title: project.title,
              description: project.description,
              image: BASE_URL + project.image,
            }))
          );
        } else {
          console.error("Invalid response format: expected an array in 'data'");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchProjectData();
  }, []);
  return (
    <>
      {useScrollToTop()}
      {isLoading || !imageLoaded["main"] ? <Loader /> : null}
      {!constructionData || isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="relative h-screen fade-in-scale pb-20">
            {/* Background Image */}
            {!imageLoaded["main"] && (
              <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
            )}
            <Image
              src={
                constructionData?.mainImage
                  ? constructionData.mainImage
                  : subHeroImage
              }
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className={`absolute opacity-55 inset-0 transition-opacity duration-500 ${
                imageLoaded["main"] ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              onLoad={() => setImageLoaded((prev) => ({ ...prev, main: true }))}
            />

            <div className="relative fade-in-up z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white CalistogaFont text-center">
                {constructionData?.title
                  ? constructionData.title
                  : "Specialists in Residential, Commercial, and Investment Properties"}
              </h2>
              <h1 className="mt-4 CalistogaFont text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white text-center">
                Our Constructions
              </h1>
            </div>
          </div>
          {/* Project Section */}
          {projectData.map((project, index) => (
            <div key={project.id}>
              <div
                className={`flex flex-col sm:flex-row justify-center items-center w-full lg:mt-20 md:mt-10 sm:mt-10 xs:mt-10 px-4 sm:px-8 
                  ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Text Section */}
                <div className="flex flex-col w-full sm:w-1/3  sm:pl-10 lg:pr-28">
                  <h2 className="lg:text-4xl lg:text-left xs:text-2xl xs:text-center xs:pb-4 sm:text-4xl CalistogaFont font-black text-white uppercase">
                    <Link href={`/Projects/${project.id}`} className="">
                      {project.title}
                    </Link>
                  </h2>
                  <p className="leading-7 font-bold lg:text-left xs:text-center xs:pb-4 xs:text-[14px] text-white interFont   sm:text-base lg:text-[14px]">
                    {project.description}
                  </p>
                </div>

                {/* Image Section */}
                <div
                  className={`w-full sm:w-2/3 flex flex-col xs:text-center xs:p-0   sm:pl-10 lg:pr-28           
              ${
                index % 2 === 0
                  ? "items-center sm:items-end pr-4"
                  : "items-start sm:items-start pl-4"
              }   sm:pr-10 mt-8 sm:mt-0`}
                >
                  {!imageLoaded[project.id] && (
                    <div className="rounded-lg w-full sm:w-[540px] sm:h-[290px] bg-gray-700 animate-pulse"></div>
                  )}
                  <Image
                    src={project.image}
                    alt="project"
                    className={`rounded-lg w-full sm:w-[540px] sm:h-[290px] object-cover transition-opacity duration-500 ${
                      imageLoaded[project.id] ? "opacity-100" : "opacity-0"
                    }`}
                    width={540}
                    height={290}
                    loading="eager"
                    onLoad={() =>
                      setImageLoaded((prev) => ({
                        ...prev,
                        [project.id]: true,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="z-10 flex flex-col items-center justify-center h-full mt-16">
                <div className="divider w-1/2 sm:w-3/4 lg:w-1/2"></div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Constructions;
