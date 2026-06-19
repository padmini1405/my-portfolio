import profileImage from "../assets/Certificates/my-pic.jpeg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="About"
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}

          <div className="flex justify-center">

            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover border-4 border-indigo-500 shadow-xl"
            />

          </div>

          {/* Content */}

          <div>

            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <div className="text-2xl font-semibold mb-6">

              <span>I'm Padmini and I'm a </span>

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-500"
              />

            </div>

            <p className="text-gray-400 leading-relaxed">
              Results-driven Full Stack Developer with over 2 years of
              professional experience building enterprise-grade web
              applications using Laravel and Vue.js.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              Experienced in designing scalable backend architectures,
              database optimization, authentication systems, REST APIs,
              and modern frontend development. Currently expanding my
              expertise into the MERN ecosystem while leveraging strong
              software engineering fundamentals gained through real-world
              production projects.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;