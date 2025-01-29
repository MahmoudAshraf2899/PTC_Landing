import Image from "next/image";

import adImage from "../../../public/icons/PTCLOGO-removebg-preview-left.png";
const AdSection = () => {
  return (
    <div className="relative h-screen bg-white mt-20 ">
      {/* Overlay */}

      <div className=" gap-4 z-10 flex items-center justify-center h-full">
        <div className="pl-36 pr-28 w-1/2">
          <h3 className="text-black CalistogaFont text-[42px] text-balance font-black">
            Soon PTC as a Mobile App
          </h3>
          <p className="text-wrap interFont font-semibold text-black">
            Looking for your dream home or the perfect investment property? PTC
            is here to make your search easier, faster, and more efficient. With
            a sleek, user-friendly design, finding the right property has never
            been more convenient.
          </p>
        </div>
        <div className="pr-28">
          <Image
            src={adImage}
            width={300}
            height={300}
            className="rounded-lg w-full h-full  "
            alt="guarantee_section"
          />
        </div>
      </div>
    </div>
  );
};

export default AdSection;
