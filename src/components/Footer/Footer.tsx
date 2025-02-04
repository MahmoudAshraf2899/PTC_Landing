"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/icons/PTCLOGO.png";
import twitter from "../../../public/icons/twitter-svgrepo-com.png";
import instagram from "../../../public/icons/instagram-svgrepo-com.png";
import youtube from "../../../public/icons/youtube-168-svgrepo-com.png";
import facebook from "../../../public/icons/facebook-176-svgrepo-com.png";
import emailIcon from "../../../public/icons/email-open-svgrepo-com.png";
import phone from "../../../public/icons/call-svgrepo-com.png";
import location from "../../../public/icons/location-svgrepo-com.png";
const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [googleMaps, setGoogleMaps] = useState("");
  useEffect(() => {
    // Fetch data from API
    setIsLoading(true);
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const EmailResponse = await fetch(
          `${BASE_URL}/api/AppSettings/footer_email`
        ); // Replace with your actual API URL
        if (!EmailResponse.ok) throw new Error("Failed to fetch hero data");

        const EmailData = await EmailResponse.json();
        setEmail(EmailData.data.value);

        const PhoneResponse = await fetch(`${BASE_URL}/api/AppSettings/phone`); // Replace with your actual API URL
        if (!PhoneResponse.ok) throw new Error("Failed to fetch hero data");

        const PhoneData = await PhoneResponse.json();
        setPhoneNumber(PhoneData.data.value);

        const AddressResponse = await fetch(
          `${BASE_URL}/api/AppSettings/location`
        ); // Replace with your actual API URL
        if (!AddressResponse.ok) throw new Error("Failed to fetch hero data");

        const AddressData = await AddressResponse.json();
        setAddress(AddressData.data.value);

        const GoogleMapsResponse = await fetch(
          `${BASE_URL}/api/AppSettings/google_maps_location`
        ); // Replace with your actual API URL
        if (!GoogleMapsResponse.ok)
          throw new Error("Failed to fetch hero data");

        const GoogleMapsData = await GoogleMapsResponse.json();
        setGoogleMaps(GoogleMapsData.data.value);

        const DescriptionResponse = await fetch(
          `${BASE_URL}/api/AppSettings/footer_title`
        ); // Replace with your actual API URL
        if (!DescriptionResponse.ok)
          throw new Error("Failed to fetch hero data");

        const DescriptionData = await DescriptionResponse.json();
        setDescription(DescriptionData.data.value);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <footer className="bg-gradient-to-b from-[#292F33] to-[#000000] mt-20 px-6 md:px-12 lg:px-20">
      <div className="w-full pt-14 pb-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={logo} alt="Logo" className="w-32" />

          <p className="mt-4 interFont text-white text-[14px] max-w-xs">
            {description}
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
            <Image src={emailIcon} alt="email" width={30} height={30} />
            <p className="interFont text-[13px] text-white">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image src={phone} alt="phone" width={30} height={30} />
              <div>
                <p className="interFont text-[13px] text-white">
                  {phoneNumber}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 max-w-xs">
            <Image src={location} alt="location" width={30} height={30} />
            <p className="interFont text-[13px] text-white">
              <a href={googleMaps} target="_blank" className="">
                {address}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
