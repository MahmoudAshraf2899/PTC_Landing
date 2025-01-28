import subHeroImage from "../../../public/icons/hero.jpg";
import Image from "next/image";

const InterestSection = () => {
  return (
    <div className="relative h-screen bg-gray-800 mt-28">
      {/* Background Image */}
      <Image
        src={subHeroImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form className="bg-white p-8 px-14  rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-4xl CalistogaFont font-black tracking-tight text-gray-800 mb-6 ">
            Register your interest
          </h2>
          <span className="interFont text-center  text-black text-[14px]">
            Interested in finding out more about our projects? Fill out the form
            below and a member of our sales team will contact you shortly.
          </span>

          <div className="mb-4 mt-4">
            <input
              type="text"
              id="firstName"
              name="Full Name"
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl   focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Full Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Phone Number"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 w-full">
            <form className="max-w-sm mx-auto">
              <select
                id="countries"
                className="bg-gray-50 SelectProjectBorder mainColor text-sm rounded-xl focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5"
              >
                <option selected>Please Select a Project</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>

          <button
            type="submit"
            className="w-full  mainBackground text-white py-3 rounded-lg   focus:outline-none focus:ring-2 "
          >
            Register Your Interest
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestSection;
