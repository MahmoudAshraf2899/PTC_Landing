import hero from "../../../public/icons/hero.jpg";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex  relative gap-10 justify-center p-28 h-[calc(100vh-80px)]">
      <div className="w-full ">
        <Image
          src={hero}
          alt="MainHeroImage"
          width={700}
          height={800}
          className="rounded-lg w-full"
        />
      </div>
      {/* Hero Section Main Title */}
      <div className="flex flex-col  w-[68%] h-auto items-start">
        <div>
          <h1 className="text-5xl  CalistogaFont md:text-5xl font-bold  text-white uppercase text-start mb-4 mt-6">
            Best Solution For Your Business
          </h1>
          {/* Developments & Constructions Buttons */}
          <div className="flex flex-row w-5/6 gap-4 mb-20">
            <button className="px-1 h-14 py-2 mainBackground rounded-lg shadow-lg w-full">
              Developments
            </button>
            <button className="px-1 py-2   rounded-lg ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
              Constructions
            </button>
          </div>
        </div>
        {/* Sub Title */}

        <div className="relative flex flex-row md:flex-row justify-between  items-start p-4 heroSubTextBackground CalistogaFont w-full px-4 py-4 rounded-lg shadow-lg">
          <div className="flex-1"></div>
          <div className="md:text-right flex-1 flex flex-col justify-start">
            <h3 className="text-3xl font-bold mb-2">Smarter Property Deals</h3>
            <p className="heroSubTextDescription text-balance">
              It is a long established fact that a reader will be distracted by
            </p>
          </div>
        </div>
        <div className="absolute  bottom-10 rightWidth  ">
          <Image
            src={subHeroImage} // Replace with the path to your image
            alt="Bottom Right Image"
            className="rounded-full h-[181px] w-[177px] subHeroImageBorder"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
