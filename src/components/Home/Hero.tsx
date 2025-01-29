import Image from "next/image";
import mainImage from "../../../public/icons/hero.jpg"; // Replace with actual path
import subImage from "../../../public/icons/SubHeroMain.jpg"; // Replace with actual path

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch bg-black p-6 lg:p-28 text-white rounded-lg overflow-hidden">
      {/* Left Side - Main Image */}
      <div className="w-full lg:w-2/4 relative mb-6 lg:mb-0">
        <Image
          src={mainImage}
          alt="Main Hero Image"
          className="w-full h-full object-cover rounded-lg"
          width={650}
          height={650}
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-2/4 p-6 lg:p-10 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-4xl font-bold CalistogaFont uppercase text-white">
          BEST SOLUTION FOR YOUR BUSINESS
        </h2>

        {/* Buttons */}
        <div className="mt-4 flex flex-col lg:flex-row gap-4">
          <button className="px-4 py-2   mainBackground rounded-lg shadow-lg w-full">
            Developments
          </button>
          <button className="px-4 py-2 rounded-lg  ConstuctionButton bg-inherit border MainBorder shadow-lg w-full">
            Constructions
          </button>
        </div>

        {/* Sub Image & Text Box */}
        <div className="relative mt-8 heroSubTextBackground p-4 rounded-lg shadow-lg">
          {/* Circular Sub Image */}
          <div className="absolute -top-4  hidden lg:block -left-20 lg:-left-[115px] w-32 h-32 lg:w-52 lg:h-52   rounded-full overflow-hidden">
            <Image
              src={subImage}
              alt="Sub Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text inside the box */}
          <div className="ml-16 lg:ml-20 ">
            <h3 className="text-lg CalistogaFont lg:text-3xl   font-semibold">
              Smarter Property Deals
            </h3>
            <p className="heroSubTextDescription">
              Trusted by professionals for buying, selling, and investing in
              real estate with advanced tools, market insights, and expert
              guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
