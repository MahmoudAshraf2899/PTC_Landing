"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import subHeroImage from "../../../public/icons/SubHeroMain.jpg";
import Loader from "../Loader/loader";
import { useScrollToTop } from "../useScrollToTop/useScrollToTop";
import { toast } from "react-toastify";

const BASE_URL = "https://ptcbackend-001-site1.jtempurl.com";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [contactUsData, setContactUsData] = useState<{
    mainImage: string;
    title: string;
    description: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/ContactUs/1`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setContactUsData({
          ...result,
          mainImage: BASE_URL + result.data.mainImage,
          title: result.data.title,
          description: result.data.description,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.question.trim())
      newErrors.question = "Please enter your question";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}/api/ContactUs/SendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Your message has been sent successfully!");
      setFormData({ fullName: "", phoneNumber: "", email: "", question: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {useScrollToTop()}
      {isLoading || !imageLoaded["main"] ? <Loader /> : null}
      <div className="relative w-full fade-in-scale pb-20">
        {!imageLoaded["main"] && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
        )}
        <div className="w-full h-[500px] bg-cover bg-center relative">
          <Image
            src={contactUsData?.mainImage || subHeroImage}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className={`absolute opacity-55 inset-0 transition-opacity duration-500 ${
              imageLoaded["main"] ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
            onLoad={() => setImageLoaded((prev) => ({ ...prev, main: true }))}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-md p-6 px-14 mx-auto rounded-2xl shadow-lg w-full -mt-72 relative"
        >
          <h2 className="text-4xl text-center CalistogaFont font-black tracking-tight text-gray-800 mb-6">
            {contactUsData?.title}
          </h2>
          <span className="interFont text-center text-black text-[14px]">
            {contactUsData?.description}
          </span>

          <div className="mb-4 mt-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 w-full">
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl"
              placeholder="Your Question"
            />
            {errors.question && (
              <p className="text-red-500 text-sm">{errors.question}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mainBackground text-white py-3 rounded-lg"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
