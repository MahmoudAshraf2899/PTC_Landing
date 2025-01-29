import Image from "next/image";
import subHeroImage from "../../../public/icons/guarantee_section.png";

const guarantees = [
  "Providing various spaces and units surrounded by green spaces and lakes.",
  "Ensuring high-security systems and 24/7 surveillance.",
  "Delivering modern designs with premium quality materials.",
  "Offering flexible payment plans to suit every budget.",
];

const GuaranteeSection = () => {
  return (
    <div className="mt-20 px-6">
      {/* Section Title */}
      <h2 className="text-center CalistogaFont text-3xl md:text-5xl font-bold text-white">
        Your safety is our goal!
      </h2>

      {/* Guarantee Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
        {guarantees.map((text, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Circular Icon Container */}
            <div className="flex items-center justify-center rounded-full mainBackground h-[160px] w-[160px] md:h-[200px] md:w-[200px]">
              <Image
                src={subHeroImage}
                width={80}
                height={80}
                className="rounded-lg object-cover"
                alt="guarantee_section"
              />
            </div>
            {/* Guarantee Text */}
            <p className="mt-4 text-white text-[14px] md:text-[16px] font-medium max-w-[250px]">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuaranteeSection;
