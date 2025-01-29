import Image from "next/image";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import project from "../../../public/icons/Contruction1.jpg";

const Constructions = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <Image
          src={subHeroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute opacity-55 inset-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white CalistogaFont text-center">
            Each unit is designed to be a unique residential and investment
            opportunity.
          </h2>
          <h1 className="mt-4 CalistogaFont text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white text-center">
            Our Constructions
          </h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-20 px-4 sm:px-8">
        {/* Text Section */}
        <div className="flex flex-col w-full sm:w-1/3 pl-4 sm:pl-10 lg:pl-28">
          <h2 className="text-4xl sm:text-4xl CalistogaFont font-black text-white uppercase">
            THE LATIN QUARTER IN NEW ALAMEIN
          </h2>
          <p className="leading-7 font-bold text-white interFont text-sm sm:text-base lg:text[14px]">
            The company successfully executed a significant number of
            distinguished buildings in this prominent project in collaboration
            with Gamma Company and the New Urban Communities Auth... See More.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-2/3 flex flex-col items-center sm:items-end pr-4 sm:pr-10 mt-8 sm:mt-0">
          <Image
            src={project}
            alt="project"
            className="rounded-lg w-full sm:w-[540px] sm:h-[290px] object-cover"
          />
        </div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center h-full mt-16">
        <div className="divider w-1/2 sm:w-3/4 lg:w-1/2"></div>
      </div>
    </>
  );
};

export default Constructions;
