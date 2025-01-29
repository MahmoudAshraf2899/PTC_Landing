import Image from "next/image";
import subHeroImage from "../../../public/icons/hero.jpg";

const projects = [
  {
    title: "Serafy Mega City (Jeddah KSA)",
    description:
      "It is a shopping center in the city of Jeddah, Saudi Arabia, that includes 200 stores and an area of ​​100 thousand square meters.",
    image: subHeroImage,
  },
  {
    title: "Downtown Riyadh Towers",
    description:
      "A luxurious residential and commercial tower located in the heart of Riyadh, offering state-of-the-art amenities.",
    image: subHeroImage,
  },
  {
    title: "Elite Business Park",
    description:
      "An advanced business hub featuring modern office spaces, green areas, and technology-driven infrastructure.",
    image: subHeroImage,
  },
];

const ProjectSection = () => {
  return (
    <div className="mt-20 px-6">
      {/* Section Title */}
      <h2 className="text-center CalistogaFont text-3xl md:text-5xl uppercase font-bold text-white">
        Best Solution For Your Business
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10 pb-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm projectsSectionBackground rounded-lg shadow-sm mx-auto"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-[310px] rounded-lg object-cover"
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 font-bold interFont tracking-tight text-white text-[22px]">
                  {project.title}
                </h5>
              </a>
              <div className="divider"></div>
              <p className="mb-3 text-white text-[14px] interFont tracking-tight">
                {project.description}
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
  );
};

export default ProjectSection;
