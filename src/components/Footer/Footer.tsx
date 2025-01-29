import Image from "next/image";
import logo from "../../../public/icons/PTCLOGO.png";
import twitter from "../../../public/icons/twitter-svgrepo-com.png";
import instagram from "../../../public/icons/instagram-svgrepo-com.png";
import youtube from "../../../public/icons/youtube-168-svgrepo-com.png";
import facebook from "../../../public/icons/facebook-176-svgrepo-com.png";
import email from "../../../public/icons/email-open-svgrepo-com.png";
import phone from "../../../public/icons/call-svgrepo-com.png";
import location from "../../../public/icons/location-svgrepo-com.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#292F33] to-[#000000] mt-20 px-6 md:px-12 lg:px-20">
      <div className="w-full pt-14 pb-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Logo" className="w-32" />

          <p className="mt-4 interFont text-white text-[14px] max-w-xs">
            A Real Estate Company for developments and instructions. Best
            Solution for your Business!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {[twitter, instagram, youtube, facebook].map((icon, index) => (
              <a key={index} href="#" className="hover:opacity-75">
                <Image
                  src={icon}
                  alt="social-media"
                  width={35}
                  height={35}
                  className="bg-white rounded-full p-1"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <ul className="space-y-2 text-white text-[14px]">
            {[
              "Home",
              "About Us",
              "Developments",
              "Constructions",
              "Contact Us",
              "Privacy Policy",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-2">
            <Image src={email} alt="email" width={30} height={30} />
            <p className="interFont text-[13px] text-white">info@PTCEG.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image src={phone} alt="phone" width={30} height={30} />
              <div>
                <p className="interFont text-[13px] text-white">
                  +2 0 2 3345 1866
                </p>
                <p className="interFont text-[13px] text-white">
                  +2 0 2 3345 1866
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 max-w-xs">
            <Image src={location} alt="location" width={30} height={30} />
            <p className="interFont text-[13px] text-white">
              Sodic West Square Mall, 3rd floor, Beverly Hills, Sheikh Zayed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
