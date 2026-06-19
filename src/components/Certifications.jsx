import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dsaImg from "../assets/Certificates/DSA-scaler.png";
import promptImg from "../assets/Certificates/promt-engineering.png";
import systemImg from "../assets/Certificates/DSA-scaler.png";
import threeDImg from "../assets/Certificates/3D-webinar.png";

const certifications = [
  {
    title: "Data Structures & Algorithms",
    provider: "Scaler Academy",
    image: dsaImg,
  },
  // {
  //   title: "System Design Certification",
  //   provider: "Scalable Architecture & Design",
  //   image: systemImg,
  // },
  {
    title: "Prompt Engineering Certification",
    provider: "AI & Generative AI Applications",
    image: promptImg,
  },
  {
    title: "3D-Webinar",
    provider: "Design-Develop-Deploy Webinar",
    image: threeDImg,
  },
];

const Certifications = () => {
  return (
    <section  className="py-24 px-4 sm:px-6 bg-[#0a0a16]/30">
      <div className="max-w-7xl mx-auto" id="Certifications">
        
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Certifications
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Continuous learning and professional development.
        </p>

        {/* CONTAINER FOR SLIDER + CUSTOM NAVIGATION ARROWS */}
        <div className="relative cert-slider-container px-2 sm:px-12">
          
          {/* CUSTOM NAVIGATION ARROWS PLACED EXACTLY BELOW / ALONG SIDEWAYS RESPONSIVELY */}
          <button className="cert-prev-btn absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-indigo-500 hover:border-indigo-500 items-center justify-center transition-all duration-200 cursor-pointer z-10 shadow-lg backdrop-blur-md">
            ←
          </button>
          
          <button className="cert-next-btn absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-indigo-500 hover:border-indigo-500 items-center justify-center transition-all duration-200 cursor-pointer z-10 shadow-lg backdrop-blur-md">
            →
          </button>

          <div className="projects-swiper-wrapper custom-cert-swiper">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".cert-prev-btn",
                nextEl: ".cert-next-btn",
              }}
              pagination={{ 
                clickable: true,
                el: ".cert-custom-pagination"
              }}
              spaceBetween={24}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {certifications.map((cert, index) => (
                <SwiperSlide key={index} className="custom-slide">
                  <div
                    className="
                      flex
                      flex-col
                      w-full
                      h-full
                      bg-white/5
                      backdrop-blur-md
                      border
                      border-white/10
                      rounded-2xl
                      overflow-hidden
                      hover:border-indigo-500
                      hover:-translate-y-2
                      transition-all
                      duration-300
                      group
                    "
                  >
                    {/* BUMPED CONTAINER HEIGHT (h-60 to h-64 on medium+) FOR SHARPER, LARGER DISPLAY */}
                    <div className="w-full h-52 sm:h-60 md:h-64 bg-black/20 overflow-hidden flex items-center justify-center p-3 border-b border-white/10">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-zinc-900/20">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors tracking-wide">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mt-4 flex items-center gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        {cert.provider}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* MOBILE NAV + PAGINATION LAYER SAFELY ISOLATED BELOW THE SLIDES */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button className="cert-prev-btn md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer">
              ←
            </button>
            
            {/* Target rendering layer for pagination dots */}
            <div className="cert-custom-pagination flex justify-center items-center w-auto"></div>
            
            <button className="cert-next-btn md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer">
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;