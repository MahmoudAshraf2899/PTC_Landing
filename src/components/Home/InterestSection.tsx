"use client";
import { useEffect, useState } from "react";
import subHeroImage from "../../../public/icons/hero.jpg";
import Image from "next/image";
import Loader from "../Loader/loader";
import { toast } from "react-toastify";

const BASE_URL = "http://ptc-api.ptceg.com";

interface Project {
  id: string;
  title: string;
}

const InterestSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    project: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [projectData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/api/Lookup/projects`);
        if (!response.ok) throw new Error("Failed to fetch projects");

        const result = await response.json();
        if (Array.isArray(result.data)) {
          setProjectsData(result.data);
        } else {
          console.error("Invalid response format: expected an array in 'data'");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
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
    if (!formData.project.trim()) newErrors.project = "Please select a project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}/api/Project/interest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Your interest has been registered successfully!");
      setFormData({ fullName: "", phoneNumber: "", email: "", project: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div
        className="relative h-screen bg-gray-800 mt-28"
        id="interest-section"
      >
        <Image
          src={subHeroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 xs:p-10 lg:p-0 flex items-center justify-center h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 px-14 rounded-2xl shadow-lg w-full max-w-md"
          >
            <h2 className="lg:text-4xl CalistogaFont xs:text-2xl text-center font-black tracking-tight text-gray-800 lg:mb-6 xs:mb-3">
              Register your interest
            </h2>
            <span className="interFont text-center text-black xs:text-[12px] lg:text-[14px]">
              Interested in finding out more about our projects? Fill out the
              form below and a member of our sales team will contact you
              shortly.
            </span>

            <div className="mb-4 mt-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
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
                className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
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
                className="w-full p-3 interFont text-[14px] text-slate-500 interestSectionBorder bg-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="bg-gray-50 SelectProjectBorder fade-in-scale mainColor text-sm focus:outline-none rounded-xl focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5"
              >
                <option value="">Select a Project</option>
                {projectData.map((project) => (
                  <option key={project.id} value={project.title}>
                    {project.title}
                  </option>
                ))}
              </select>
              {errors.project && (
                <p className="text-red-500 text-sm">{errors.project}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mainBackground text-white py-3 rounded-lg focus:outline-none focus:ring-2"
            >
              {isSubmitting ? "Submitting..." : "Register Your Interest"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InterestSection;
