"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/icons/PTCLOGO.png";
import emailIcon from "../../../public/icons/email-open-svgrepo-com.png";
import phone from "../../../public/icons/call-svgrepo-com.png";
import location from "../../../public/icons/location-svgrepo-com.png";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";
interface SocialMediaPreview {
  id: string;
  iconPath: string;
  targetLink: string;
}
const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Developments", path: "/Developments" },
    { name: "Constructions", path: "/Constructions" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Privacy Policy", path: "/PrivacyPolicy" },
    { name: "Contact Us", path: "/ContactUs" },
  ];
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [googleMaps, setGoogleMaps] = useState("");
  const [socialMedia, setSocialMedia] = useState<
    { id: number; iconPath: string; targetLink: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch(`${BASE_URL}/api/AppSettings/footer_email`),
          fetch(`${BASE_URL}/api/AppSettings/phone`),
          fetch(`${BASE_URL}/api/AppSettings/location`),
          fetch(`${BASE_URL}/api/AppSettings/google_maps_location`),
          fetch(`${BASE_URL}/api/AppSettings/footer_title`),
          fetch(`${BASE_URL}/api/SocialMedia`),
        ]);

        const [
          EmailData,
          PhoneData,
          AddressData,
          GoogleMapsData,
          DescriptionData,
          SocialMediaData,
        ] = await Promise.all(responses.map((res) => res.json()));

        setEmail(EmailData.data.value);
        setPhoneNumber(PhoneData.data.value);
        setAddress(AddressData.data.value);
        setGoogleMaps(GoogleMapsData.data.value);
        setDescription(DescriptionData.data.value);

        // Map social media data
        setSocialMedia(
          SocialMediaData.data.map((item: SocialMediaPreview) => ({
            id: item.id,
            iconPath: `${BASE_URL}${item.iconPath.replace("\\", "/")}`, // Ensure proper URL format
            targetLink: item.targetLink,
          }))
        );
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#292F33] to-[#000000]  px-6 md:px-12 lg:px-20">
      <div className="w-full pt-14 pb-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-white">
          <Image src={logo} alt="Logo" className="w-32" />
          <p className="mt-4 interFont text-[14px] max-w-xs">{description}</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.targetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <Image
                  src={item.iconPath}
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
        <div className="flex flex-col items-center md:items-center lg:items-start">
          <ul className="space-y-2 text-white text-[14px]">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="hover:text-gray-400">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-white">
          <div className="flex items-center gap-2">
            <Image
              src={emailIcon}
              alt="email"
              width={25}
              height={25}
              className="lg:block xs:hidden"
            />
            <p className="interFont text-[13px]">
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={phone}
              alt="phone"
              width={25}
              height={25}
              className="lg:block xs:hidden"
            />
            <p className="interFont text-[13px]">{phoneNumber}</p>
          </div>
          <div className="flex items-start gap-2 max-w-xs">
            <Image
              src={location}
              alt="location"
              width={25}
              height={25}
              className="lg:block xs:hidden"
            />
            <p className="interFont text-[13px]">
              <a
                href={googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {address}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <h2 className="interFont text-white text-[12px]">
          @{new Date().getFullYear()} PTC Developments. All Rights Reserved.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
