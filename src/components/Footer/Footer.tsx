// import Link from "next/link";
import logo from "../../../public/icons/PTCLOGO.png";
import twitter from "../../../public/icons/twitter-svgrepo-com.png";
import instagram from "../../../public/icons/instagram-svgrepo-com.png";
import youtube from "../../../public/icons/youtube-168-svgrepo-com.png";
import facebook from "../../../public/icons/facebook-176-svgrepo-com.png";
import email from "../../../public/icons/email-open-svgrepo-com.png";
import phone from "../../../public/icons/call-svgrepo-com.png";
import location from "../../../public/icons/location-svgrepo-com.png";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#292F33] to-[#000000] mt-20">
      <div className="w-full pt-14 pb-14 grid grid-cols-3 md:grid-cols-3 gap-2 text-center md:text-left">
        {/* Left Section */}
        <div className="col-start-1 pl-10 ">
          <Image src={logo} alt="Logo" className="w-32" />

          <p className="mt-4 interFont pl-4  text-wrap text-left text-white text-[14px]">
            A Real Estate Company for developments and instructions. Best
            Solution for your Business!
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-start md:justify-start mt-4 pl-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src={twitter}
                alt="twitter"
                width={35}
                height={35}
                className="bg-white rounded-full p-1"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src={instagram}
                alt="instagram"
                width={35}
                height={35}
                className="bg-white rounded-full p-1"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src={youtube}
                alt="youtube"
                width={35}
                height={35}
                className="bg-white rounded-full p-1"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src={facebook}
                alt="facebook"
                width={35}
                height={35}
                className="bg-white rounded-full p-1"
              />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="col-start-2">
          <ul className="mt-4 space-y-2 text-center text-wrap interFont text-white text-[14px]">
            <li>Home</li>
            <li>
              <a href="/about" className=" hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/about" className="  hover:text-gray-400">
                Developments
              </a>
            </li>
            <li>
              <a href="/about" className="  hover:text-gray-400">
                Constructions
              </a>
            </li>
            <li>
              <a href="/about" className="  hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="  hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-start-3">
          <h3 className="text-lg font-semibold"></h3>
          <div className="mt-4 flex items-center justify-center gap-1 text-gray-400">
            <Image
              src={email}
              alt="email"
              width={30}
              height={30}
              className="rounded-full p-1"
            />
            <p className="interFont text-[13px] text-white">info@PTCEG.com</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1  ">
            <Image
              src={phone}
              alt="phone"
              width={30}
              height={30}
              className="rounded-full p-1"
            />
            <div className="flex flex-col">
              <p className="interFont text-[13px] text-white">
                {" "}
                +2 0 2 3345 1866
              </p>
              <p className="interFont text-[13px] text-white">
                {" "}
                +2 0 2 3345 1866
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-4 pl-44">
            <Image
              src={location}
              alt="location"
              width={30}
              height={30}
              className="rounded-full p-1"
            />
            <p className="interFont text-[13px] text-white  text-left text-balance">
              Sodic West Square Mall, ird floor, Beverly Hills, Sheikh Zayed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
