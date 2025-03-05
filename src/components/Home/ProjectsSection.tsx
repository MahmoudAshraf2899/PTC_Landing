"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../Loader/loader";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import Link from "next/link";

const BASE_URL = "http://ptc-api.ptceg.com";
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
        <h2 className="text-center fade-in-scale CalistogaFont text-3xl md:text-5xl uppercase font-bold text-white">
          Best Solution For Your Business
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 fade-in-scale sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10 pb-4">
          {projectData?.map((item) => (
            <div
              key={item.id}
              className="max-w-sm w-full projectsSectionBackground rounded-lg shadow-sm mx-auto flex flex-col h-full"
            >
              {/* Image Section */}
              {projectData == null ? (
                <div className="skeleton h-[310px] w-full"></div>
              ) : (
                <Image
                  src={item.image == undefined ? subHeroImage : item.image}
                  alt={item.name}
                  className="w-full h-[310px] rounded-lg object-cover"
                  width={500}
                  height={500}
                  priority
                />
              )}

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <a href="#">
                  <Link
                    href={`/Projects/${item.id}`}
                    onClick={() => {
                      setIsLoading(true);
                    }}
                    className="mb-2 font-bold interFont tracking-tight lg:text-left text-white xs:text-[18px] xs:text-center lg:text-[22px]"
                  >
                    {item.name}
                  </Link>
                </a>
                <div className="divider"></div>

                {/* Description - Takes up space but doesn't push the button down */}
                <p className="text-white mb-2 lg:text-left xs:text-[13px] xs:text-center lg:text-[14px] interFont tracking-tight flex-grow overflow-hidden">
                  {item.description}
                </p>

                {/* Button - Always at Bottom */}
                <Link
                  href={`/Projects/${item.id}`}
                  className="px-1 py-2  rounded-lg ConstuctionButton bg-inherit border MainBorder hover:text-white hover:bg-[#24BDBD] shadow-lg w-full text-center block mt-auto"
                  onClick={() => {
                    setIsLoading(true);
                  }}
                >
                  Show More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="text-center">
          <Link
            key={"Projects"}
            href={"/Projects"}
            className="
          font-normal interFont h-14 py-3 px-12 mainBackground rounded-lg shadow-lg text-[16px]"
          >
            All Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
