import { projects } from "../Data/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto" id="Projects">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-8">
          A collection of personal and professional projects
          showcasing my expertise in full-stack development.
        </p>

        {/* CUSTOM NAVIGATION BUTTONS */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            className="
              project-prev
              w-12
              h-12
              rounded-full
              bg-white/10
              border
              border-white/10
              hover:bg-indigo-500
              transition
              text-xl
              cursor-pointer
            "
          >
            ←
          </button>

          <button
            className="
              project-next
              w-12
              h-12
              rounded-full
              bg-white/10
              border
              border-white/10
              hover:bg-indigo-500
              transition
              text-xl
              cursor-pointer
            "
          >
            →
          </button>
        </div>

        {/* SWIPER CONTAINER */}
        <div className="projects-swiper-wrapper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".project-prev",
              nextEl: ".project-next",
            }}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} className="custom-slide">

                <article
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
                    hover:-translate-y-2
                    hover:border-indigo-500
                    hover:shadow-lg
                    hover:shadow-indigo-500/20
                    transition-all
                    duration-300
                  "
                >
                  {/* MAIN CARD BODY */}
                  <div className="flex flex-col flex-grow">
                    {/* IMAGE */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover"
                    />

                    {/* TEXT WRAPPER */}
                    <div className="p-6 flex flex-col flex-grow">
                      {project.category && (
                        <span className="text-indigo-400 text-sm font-medium mb-1 block">
                          {project.category}
                        </span>
                      )}

                      <h3 className="text-xl font-semibold mb-3">
                        {project.title}
                      </h3>

                      {/* Flex-grow forces paragraph space expansion */}
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              px-3
                              py-1
                              text-xs
                              rounded-full
                              bg-indigo-500/10
                              text-indigo-300
                              border
                              border-indigo-500/20
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FIXED BOTTOM ACTION BUTTON ROW */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1
                          text-center
                          py-2
                          rounded-lg
                          bg-indigo-600
                          hover:bg-indigo-500
                          transition
                          text-sm
                          font-medium
                        "
                      >
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex-1
                          text-center
                          py-2
                          rounded-lg
                          border
                          border-indigo-500
                          hover:bg-indigo-500/10
                          transition
                          text-sm
                          font-medium
                        "
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>

                </article>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Projects;