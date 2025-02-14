import React from "react";
import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";
const mentors = [
  {
    id: 1,
    name: "Mon Sreynet",
    role: "Frontend Developer",
    image: "../src/assets/aboutUs/SreyNet.png",
    socials: {
      github: "#",
      telegram: "#",
      linkedin: "#",
      email: "#",
    },
  },
  {
    id: 2,
    name: "Moung Meyneang",
    role: "Backend Developer",
    image: "../src/assets/aboutUs/meyneang.png",
    socials: {
      github: "#",
      telegram: "#",
      linkedin: "#",
      email: "#",
    },
  },
];
export default function AboutUsPage() {
  return (
    <>
      <section>
        <div className=" bg-gray-900 flex flex-col items-center justify-center px-4 py-20">
          <div className="absolute top-10 left-10">
            <div className="w-6 h-6 bg-pink-400 rounded-full opacity-75 blur-lg" />
            <div className="w-4 h-4 bg-pink-300 rounded-full absolute top-1 left-1" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 relative">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500 
            drop-shadow-[0_0_25px_rgba(74,222,128,0.5)]">
                Nurture Your Natural Beauty, Reveal Your Radiance..
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Discover our curated collection of premium skincare essentials.
              Each product is carefully selected to enhance your natural beauty,
              combining advanced dermatological science with the purest natural
              ingredients. Experience transformative skincare that's as unique
              as you are.
            </p>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent -z-10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-20" />
          <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5 -z-10" />
        </div>
      </section>
      <section>
        <div className="relative bg-pink-100 min-h-screen overflow-hidden">
          <div className="text-center pt-20 pb-12">
            <h2 className="inline-block text-4xl md:text-5xl font-bold text-gray-800 px-6 py-2 rounded-xl bg-gray-800/10 mb-6">
              Meet Our Devoloper
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Meet our team of talented developers who are passionate about
              helping you succeed.
            </p>
          </div>

          <div className="container mx-auto px-4 pb-20">
            <div className="flex flex-wrap justify-center gap-12">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="relative group">
                  {/* Mentor Card */}
                  <div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 
                            hover:shadow-xl hover:-translate-y-2">
                    {/* Name Tag */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-800 text-[#98FB98] px-6 py-2 rounded-full whitespace-nowrap">
                        {mentor.name}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-64 h-80 overflow-hidden rounded-xl mb-6 mt-6">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center gap-4 pt-4">
                      <a
                        href={mentor.socials.github}
                        className="text-gray-800 hover:text-gray-600 transition-colors">
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={mentor.socials.telegram}
                        className="text-gray-800 hover:text-gray-600 transition-colors">
                        <FaTelegram size={24} />
                      </a>
                      <a
                        href={mentor.socials.linkedin}
                        className="text-gray-800 hover:text-gray-600 transition-colors">
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href={mentor.socials.email}
                        className="text-gray-800 hover:text-gray-600 transition-colors">
                        <FaEnvelope size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wave Decoration */}
        </div>
      </section>
    </>
  );
}
