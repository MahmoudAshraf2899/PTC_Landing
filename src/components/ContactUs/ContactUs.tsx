const ContactUs = () => {
  return (
    <div className="relative w-full fade-in-scale pb-20">
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('../../icons/hero.jpg')" }}
      ></div>

      <form className="bg-white max-w-md p-6 px-14 mx-auto rounded-2xl shadow-lg w-full -mt-72 relative  ">
        <h2 className="text-4xl text-center CalistogaFont font-black tracking-tight text-gray-800 mb-6 ">
          Contact Us
        </h2>
        <span className="interFont text-center  text-black text-[14px]">
          We’d love to hear from you! Whether you have a question, need more
          information, or want to explore our services
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
          <textarea
            id="question"
            name="question"
            className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
            placeholder="Your Question"
          />
        </div>

        <button
          type="submit"
          className="w-full  mainBackground text-white py-1 rounded-lg   focus:outline-none focus:ring-2 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
