import subHeroImage from "../../../public/icons/hero.jpg";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="mt-40">
      <h2 className="text-center CalistogaFont text-5xl uppercase font-bold text-white">
        Best Solution For Your Business
      </h2>
      <div className="flex flex-row justify-center items-center gap-10 mt-10 mb-10 pb-4">
        <div className="max-w-sm projectsSectionBackground rounded-lg   shadow-sm">
          <Image
            src={subHeroImage}
            alt=""
            className="w-full h-[310px] rounded-lg"
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2   font-bold interFont tracking-tight text-white text-[22px]">
                Serafy Mega City (Jeddah KSA)
              </h5>
            </a>
            <div className="divider"></div>
            <p className="mb-3 text-white text-[14px] interFont tracking-tight">
              It is a shopping center in the city of Jeddah, Saudi Arabia, that
              includes 200 stores and an area of ​​100 thousand square meters.
            </p>
            <button className="px-1 py-2   rounded-lg ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
              Show More
            </button>
          </div>
        </div>
        <div className="max-w-sm projectsSectionBackground rounded-lg shadow-sm">
          <Image
            src={subHeroImage}
            alt=""
            className="w-full h-[310px] rounded-lg"
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2   font-bold interFont tracking-tight text-white text-[22px]">
                Serafy Mega City (Jeddah KSA)
              </h5>
            </a>
            <div className="divider"></div>
            <p className="mb-3 text-white text-[14px] interFont tracking-tight">
              It is a shopping center in the city of Jeddah, Saudi Arabia, that
              includes 200 stores and an area of ​​100 thousand square meters.
            </p>
            <button className="px-1 py-2   rounded-lg ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
              Show More
            </button>
          </div>
        </div>
        <div className="max-w-sm projectsSectionBackground rounded-lg shadow-sm">
          <Image
            src={subHeroImage}
            alt=""
            className="w-full h-[310px] rounded-lg"
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2   font-bold interFont tracking-tight text-white text-[22px]">
                Serafy Mega City (Jeddah KSA)
              </h5>
            </a>
            <div className="divider"></div>
            <p className="mb-3 text-white text-[14px] interFont tracking-tight">
              It is a shopping center in the city of Jeddah, Saudi Arabia, that
              includes 200 stores and an area of ​​100 thousand square meters.
            </p>
            <button className="px-1 py-2   rounded-lg ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
              Show More
            </button>
          </div>
        </div>
      </div>
      <div className="text-center CalistogaFont text-5xl uppercase font-bold text-white">
        <button className="font-normal h-14  py-3 px-12 mainBackground rounded-lg shadow-lg text-[16px]">
          <span className="interFont">All Projects</span>
        </button>
      </div>
    </div>
  );
};
export default ProjectSection;
