import Image from "next/image";
import logo from "../../public/icons/PTCLOGO.png";
import hero from "../../public/icons/hero.jpg";
import subHeroImage from "../../public/icons/SubHeroMain.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="min-h-screen bg-cover bg-center">
        {/* Navigation */}
        <nav className="flex justify-between items-center pl-24 pr-28 px-6 py-4 bg-opacity-60">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-row gap-8 pl-10">
            {/* Navigation Links */}
            <div className="md:flex navFont text-[16px] hover:text-slate-100 active:text-slate-100">
              <Link href="/">Home</Link>
            </div>

            <div className="md:flex navFont text-[16px] hover:text-slate-100 active:text-slate-100">
              <Link href="/Developments">Developments</Link>
            </div>

            <div className="md:flex navFont text-[16px] hover:text-slate-100 active:text-slate-100">
              <Link href="/Constructions">Constructions</Link>
            </div>

            <div className="md:flex navFont text-[16px] hover:text-slate-100 active:text-slate-100">
              <Link href="/Home">About Us</Link>
            </div>
            <div className="md:flex navFont text-[16px] hover:text-slate-100 active:text-slate-100">
              <Link href="/Home">Contact Us</Link>
            </div>
          </div>
          {/* Introduction && Enquire */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-slate-100  flex item-center gap-2 rounded-lg shadow-lg">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z"
                    fill="#eee"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    fill="#EEE"
                  ></path>{" "}
                </g>
              </svg>
              <span>Introduction</span>
            </button>
            <button className="px-4 py-2  mainBackground  rounded-lg shadow-lg">
              Enquire
            </button>
          </div>
        </nav>

        {/* Main Content */}
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
          <div className="flex flex-col  w-3/2 h-auto items-start">
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
            <div className="flex flex-row justify-end items-center heroSubTextBackground rounded-lg CalistogaFont  w-full px-4 py-4">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full"></div>
                <div>
                  <h3 className="text-start text-3xl font-bold  text-nowrap mb-2">
                    Smarter Property Deals
                  </h3>
                  <p className="heroSubTextDescription text-start  text-[14px]">
                    Trusted by professionals for buying, selling and invest in
                    real estate with advanced tools, market, insights and expert
                    guidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 rightWidth p-4">
          <Image
            src={subHeroImage} // Replace with the path to your image
            alt="Bottom Right Image"
            className="rounded-full h-[181px] w-[177px] subHeroImageBorder"
            // style={{ clipPath: "circle(40%)" }}
          />
        </div>
      </div>
    </section>
  );
}
