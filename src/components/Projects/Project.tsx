"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loader from "../Loader/loader";
import Image from "next/image";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import { useScrollToTop } from "../useScrollToTop/useScrollToTop";

import { BaseURL } from "../../constants/Bases";

interface MediaItem {
  id: number;
  mediaId: string;
  mediaUrl: string;
  mediaUID: string;
  mediaType: number;
}

function Project() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState<{
    title: string;
    description: string;
    mainImageUrl: string;
    media: MediaItem[];
  } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${BaseURL.ptc}/api/Project/${id}`);
        if (!response.ok) throw new Error("Failed to fetch project data");

        const data = await response.json();
        setProjectData({
          title: data.data.title,
          description: data.data.description,
          mainImageUrl: BaseURL.ptc + data.data.mainImageUrl,
          media: data.data.media.map((item: MediaItem) => ({
            ...item,
            mediaUrl: BaseURL.ptc + item.mediaUrl,
          })),
        });
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  return (
    <>
      {useScrollToTop()}
      {isLoading && <Loader />}

      {!isLoading && projectData && (
        <div className="relative w-full">
          {/* Background Image */}
          <div className="w-full h-[500px] bg-cover bg-center relative">
            <Image
              src={projectData?.mainImageUrl || subHeroImage}
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="absolute opacity-55 inset-0 transition-opacity duration-500"
              loading="eager"
            />
          </div>

          <div className="max-w-4xl min-h-[250px] mx-auto bg-white p-6 md:p-10 -mt-48 relative">
            {/* Project Name */}
            <h2 className="text-2xl md:text-3xl uppercase text-black CalistogaFont font-black mb-4">
              {projectData?.title}
            </h2>
            {/* Project Description */}
            <p className="text-gray-700 mb-4">{projectData?.description}</p>
          </div>

          {/* Gallery */}
          <div className="max-w-4xl mb-4 mx-auto bg-white p-6 md:p-10 gap-4 grid lg:grid-cols-3 xs:grid-cols-1 mt-24 relative">
            {projectData?.media.map((item, index) => (
              <div key={item.id} onClick={() => setSelectedIndex(index)}>
                {item.mediaType === 1 ||
                item.mediaUrl.includes("jpg") ||
                item.mediaUrl.includes("JPEG") ||
                item.mediaUrl.includes("png") ||
                item.mediaUrl.includes("svg") ? (
                  <img
                    src={item.mediaUrl}
                    alt="Project"
                    className="w-full h-full rounded-sm object-cover cursor-pointer"
                    width={250}
                    height={250}
                  />
                ) : (
                  <video
                    className="w-full h-full rounded-sm object-cover cursor-pointer"
                    src={item.mediaUrl}
                    controls
                  />
                )}
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedIndex !== null && (
            <Lightbox
              media={projectData.media}
              currentIndex={selectedIndex}
              onClose={() => setSelectedIndex(null)}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Project;

/**
 * Lightbox component
 */
function Lightbox({
  media,
  currentIndex,
  onClose,
}: {
  media: MediaItem[];
  currentIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(currentIndex);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl font-bold"
      >
        ✖
      </button>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute lg:left-10 left-4 z-50 text-white text-4xl font-bold"
      >
        <svg
          width="34px"
          height="34px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>

      {/* Media Display */}
      <div className="relative max-w-4xl max-h-[80vh] flex justify-center items-center">
        {media[index].mediaType === 1 ||
        media[index].mediaUrl.includes("jpg") ||
        media[index].mediaUrl.includes("JPEG") ||
        media[index].mediaUrl.includes("png") ||
        media[index].mediaUrl.includes("svg") ? (
          <img
            src={media[index].mediaUrl}
            alt="Media"
            className="max-w-full max-h-[80vh] object-cover rounded-lg"
          />
        ) : (
          <video
            src={media[index].mediaUrl}
            className="max-w-full max-h-[80vh] object-cover rounded-lg"
            controls
            autoPlay
          />
        )}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute lg:right-10 right-7 text-white text-4xl font-bold"
      >
        <svg
          width="34px"
          height="34px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fffafa"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}
