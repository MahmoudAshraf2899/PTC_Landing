"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "../Loader/loader";
const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";
interface MediaItem {
  id: number;
  mediaId: string;
  mediaUrl: string;
  mediaUID: string;
  mediaType: number;
}
/**
 * A single project component, including a background image, project name, description, and image gallery.
 *
 *
 */
function Project() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState<{
    title: string;
    description: string;
    mainImageUrl: string;
    media: {
      id: number;
      mediaId: string;
      mediaUrl: string;
      mediaUID: string;
      mediaType: number;
    }[]; // Added nodes array
  } | null>(null);

  useEffect(() => {
    // Fetch data from API
    if (!id) return;
    setIsLoading(true);
    const fetchProjectData = async () => {
      try {
        setIsLoading(true);
        const projectId = id as string;

        const response = await fetch(`${BASE_URL}/api/Project/${projectId}`);
        if (!response.ok) throw new Error("Failed to fetch project data");

        const data = await response.json();
        setProjectData({
          ...data,
          title: data.data.title,
          description: data.data.description,
          mainImageUrl: BASE_URL + data.data.mainImageUrl,
          media: data.data.media.map((item: MediaItem) => ({
            ...item,
            mediaUrl: BASE_URL + item.mediaUrl,
          })),
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, []);
  return (
    <>
      {isLoading == true ? (
        <Loader />
      ) : (
        <>
          <div className="relative w-full">
            {/* Background Image */}
            <div
              className="w-full h-[500px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${projectData?.mainImageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10    -mt-48 relative">
              {/*  Project Name */}
              <h2 className="text-2xl md:text-3xl uppercase text-black CalistogaFont font-black mb-4">
                {projectData?.title}
              </h2>
              {/* Project Description */}
              <p className="text-gray-700 mb-4">{projectData?.description}</p>
            </div>

            {/* Gallery */}
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10  gap-4  grid grid-cols-3 mt-24 relative">
              {projectData?.media.map((item) =>
                item.mediaType == 2 ? (
                  <>
                    <img
                      src={item.mediaUrl}
                      alt="Project 1"
                      className="w-full h-full rounded-sm object-cover"
                      width={250}
                      height={250}
                      key={item.id}
                    />
                  </>
                ) : (
                  <video
                    className="w-full h-full rounded-sm object-cover"
                    src={item.mediaUrl}
                    key={item.id}
                  />
                )
              )}
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

export default Project;
