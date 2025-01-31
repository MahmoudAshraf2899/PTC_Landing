import Image from "next/image";

const Project = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('../../icons/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10    -mt-48 relative">
        {/*  Project Name */}
        <h2 className="text-2xl md:text-3xl text-black CalistogaFont font-black mb-4">
          THE LATIN QUARTER IN NEW ALAMEIN
        </h2>
        {/* Project Description */}
        <p className="text-gray-700 mb-4">
          PTC Real Estate Development is one of the leading companies in the
          real estate development sector in Egypt. Officially established in
          2015, the company aims to enrich the community with prestigious and
          vibrant residential, recreational, tourism, and commercial projects.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10  gap-4  grid grid-cols-3 mt-24 relative">
        <Image
          src="/icons/Contruction1.jpg"
          alt="Project 1"
          className="w-full h-full rounded-sm object-cover"
          width={250}
          height={250}
        />
        <Image
          src="/icons/Contruction1.jpg"
          alt="Project 1"
          className="w-full h-full rounded-sm object-cover"
          width={250}
          height={250}
        />
        <Image
          src="/icons/Contruction1.jpg"
          alt="Project 1"
          className="w-full h-full rounded-sm object-cover"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Project;
