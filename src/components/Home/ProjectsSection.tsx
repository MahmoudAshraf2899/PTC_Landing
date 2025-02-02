"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../Loader/loader";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";
interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}
const ProjectSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectsData] = useState<
    {
      id: string;
      name: string;
      description: string;
      image: string;
    }[]
  >([]);

  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/Project`);
        if (!response.ok) throw new Error("Failed to fetch hero data");

        const result = await response.json();
        if (Array.isArray(result.data)) {
          setProjectsData(
            result.data.map((project: Project) => ({
              id: project.id,
              name: project.name,
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
      {isLoading && <Loader />}
      <div className="mt-20 px-6">
        {/* Section Title */}
        <h2 className="text-center CalistogaFont text-3xl md:text-5xl uppercase font-bold text-white">
          Best Solution For Your Business
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10 pb-4">
          {projectData?.map((item) => (
            <div
              key={item.id}
              className="max-w-sm projectsSectionBackground rounded-lg shadow-sm mx-auto"
            >
              {projectData == null ? (
                <>
                  <div className="skeleton h-full"></div>
                </>
              ) : (
                <Image
                  src={item.image == undefined ? subHeroImage : item.image}
                  alt={item.name}
                  className="max-w-full w-full h-[310px] rounded-lg object-cover"
                  width={500}
                  height={500}
                  priority
                />
              )}

              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 font-bold interFont tracking-tight text-white text-[22px]">
                    {item.name}
                  </h5>
                </a>
                <div className="divider"></div>
                <p className="mb-3 text-white text-[14px] interFont tracking-tight">
                  {item.description}
                </p>
                <button className="px-1 py-2 rounded-lg ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="text-center">
          <button className="font-normal h-14 py-3 px-12 mainBackground rounded-lg shadow-lg text-[16px]">
            <span className="interFont">All Projects</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
