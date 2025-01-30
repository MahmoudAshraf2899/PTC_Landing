const PrivacyPolicy = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('../../icons/hero.jpg')" }}
      ></div>

      {/* Privacy Policy Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10    -mt-24 relative">
        <h2 className="text-2xl md:text-3xl text-black CalistogaFont font-black mb-4">
          Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          PTC Real Estate Development is one of the leading companies in the
          real estate development sector in Egypt. Officially established in
          2015, the company aims to enrich the community with prestigious and
          vibrant residential, recreational, tourism, and commercial projects.
        </p>
        <p className="text-gray-700 mb-4">
          Our services at PTC Real Estate Development focus on developing
          residential communities, planning, designing, and constructing modern,
          upscale residential buildings, as well as smart residential projects
          that utilize the latest technologies. We also specialize in developing
          tourism and recreational resorts.
        </p>
        <p className="text-gray-700 mb-4">
          Thanks to a distinguished team with extensive experience in one of the
          fastest-growing sectors in the Middle East, we have built a remarkable
          portfolio as contractors and real estate developers. Our iconic
          projects in Egypt, recognized for their world-class standards,
          include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>New Alamein Towers</li>
          <li>
            Central Business District (CBD) in the New Administrative Capital
          </li>
          <li>The Latin District in New Alamein</li>
          <li>Sun Capital Compound, Arabella Mall</li>
          <li>The Gate Mall</li>
          <li>Opera Green Compound</li>
          <li>Rixos Hotel, Sharm El Sheikh</li>
        </ul>
        <p className="text-gray-700 mb-4">
          In addition, we have executed mega-projects in Saudi Arabia, such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Safaty Mega City in Jeddah (the largest regional mixed-use
            development)
          </li>
          <li>Novotel Hotel, Jeddah</li>
          <li>Al-Hajri Tower, Dammam</li>
        </ul>
        <p className="text-gray-700">
          These exceptional projects make us proud of our achievements and
          contributions to the real estate development sector, driven by our
          expertise and commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
