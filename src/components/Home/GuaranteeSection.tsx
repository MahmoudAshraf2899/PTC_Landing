import Image from "next/image";

import subHeroImage from "../../../public/icons/guarantee_section.png";

const GuaranteeSection = () => {
  return (
    <div className="mt-40">
      <h2 className="text-center CalistogaFont text-5xl font-bold text-white">
        Your safety is our goal!
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 mt-10 mb-10 pb-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 pt-4">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full mainBackground h-[200px] w-[200px]">
              <div className="">
                <Image
                  src={subHeroImage}
                  width={80}
                  height={80}
                  className="rounded-lg w-full"
                  alt="guarantee_section"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-white text-balance text-[14px] font-medium">
              Providing various spaces and units surrounded by green spaces and
              lakes.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 pt-4">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full mainBackground h-[200px] w-[200px]">
              <div className="">
                <Image
                  src={subHeroImage}
                  width={80}
                  height={80}
                  className="rounded-lg w-full"
                  alt="guarantee_section"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-white text-balance text-[14px] font-medium">
              Providing various spaces and units surrounded by green spaces and
              lakes.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 pt-4">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full mainBackground h-[200px] w-[200px]">
              <div className="">
                <Image
                  src={subHeroImage}
                  width={80}
                  height={80}
                  className="rounded-lg w-full"
                  alt="guarantee_section"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-white text-balance text-[14px] font-medium">
              Providing various spaces and units surrounded by green spaces and
              lakes.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 pt-4">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full mainBackground h-[200px] w-[200px]">
              <div className="">
                <Image
                  src={subHeroImage}
                  width={80}
                  height={80}
                  className="rounded-lg w-full"
                  alt="guarantee_section"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-white text-balance text-[14px] font-medium">
              Providing various spaces and units surrounded by green spaces and
              lakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GuaranteeSection;
