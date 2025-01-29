import Image from "next/image";
import adImage from "../../../public/icons/PTCLOGO-removebg-preview-left.png";

const AdSection = () => {
  return (
    <div className="relative min-h-screen bg-white mt-20 px-6 md:px-12 lg:px-36 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h3 className="text-black CalistogaFont text-3xl md:text-4xl lg:text-[42px] font-black leading-tight">
            Soon PTC as a Mobile App
          </h3>
          <p className="interFont font-semibold text-black mt-4 text-base md:text-lg">
            Looking for your dream home or the perfect investment property? PTC
            is here to make your search easier, faster, and more efficient. With
            a sleek, user-friendly design, finding the right property has never
            been more convenient.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={adImage}
            width={300}
            height={300}
            className="rounded-lg max-w-full h-auto"
            alt="PTC Mobile App Ad"
          />
        </div>
      </div>
    </div>
  );
};

export default AdSection;
