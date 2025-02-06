"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../Loader/loader";
import Link from "next/link";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";

interface Project {
  id: string;
  title: string;
  description: string;
  mainIMage: string;
}

const AllProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [projectData, setProjectsData] = useState<Project[]>([]);

  // Fetch Projects
  const fetchProjects = async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/Project/search?PageSize=5&CurrentPage=${page}`
      );
      if (!response.ok) throw new Error("Failed to fetch projects");

      const result = await response.json();
      if (Array.isArray(result.data)) {
        setProjectsData((prev) => [
          ...prev,
          ...result.data.map((project: Project) => ({
            id: project.id,
            title: project.title,
            description: project.description,
            mainIMage: BASE_URL + project.mainIMage,
          })),
        ]);
        setHasMore(result.page.totalPages != page);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    setIsLoading(false);
  };

  // Initial Fetch
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative h-screen">
        <Image
          src={subHeroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute opacity-55 inset-0"
          loading="eager"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white CalistogaFont text-center">
            {
              "Specialists in Residential, Commercial, and Investment Properties"
            }
          </h2>
          <h1 className="mt-4 CalistogaFont text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white text-center">
            Our Projects
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
            <div className="flex flex-col w-full sm:w-1/3 pr-4 sm:pl-10 lg:pr-28">
              <h2 className="text-4xl sm:text-4xl CalistogaFont font-black text-white uppercase">
                <Link
                  href={`/Projects/${project.id}`}
                  className="cursor-pointer"
                >
                  {project.title}
                </Link>
              </h2>
              <p className="leading-7 font-bold text-white interFont text-sm sm:text-base lg:text-[14px]">
                {project.description}
              </p>
            </div>
            <div
              className={`w-full sm:w-2/3 flex flex-col 
              ${
                index % 2 === 0
                  ? "items-center sm:items-end pr-4"
                  : "items-start sm:items-start pl-4"
              }   
              sm:pr-10 mt-8 sm:mt-0`}
            >
              <Image
                src={project.mainIMage}
                alt="project"
                className="rounded-lg w-full sm:w-[540px] sm:h-[290px] object-cover"
                width={540}
                height={290}
                loading="eager"
              />
            </div>
          </div>
          <div className="z-10 flex flex-col items-center justify-center h-full mt-16">
            <div className="divider w-1/2 sm:w-3/4 lg:w-1/2"></div>
          </div>
        </div>
      ))}

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={fetchProjects}
            className="px-4 py-2 mainBackground rounded-lg shadow-lg"
          >
            {isLoading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default AllProjects;
