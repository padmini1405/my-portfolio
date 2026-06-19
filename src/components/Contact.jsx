import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto" id="Contact">

        <h2 className="text-4xl font-bold text-center mb-6">
         My Contact
        </h2>
        <h5 className="text-2xl text-center mb-1">
         Get in touch
        </h5>

        <p className="text-center text-gray-400 mb-12">
          I'm always open to discussing new opportunities,
          collaborations, and interesting projects.
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10">

          <div className="space-y-8">

            {/* Location */}

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-gray-400">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Email */}

            <div className="flex items-center gap-4">
              <MdEmail className="text-indigo-400 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>
                <p className="text-gray-400">
                  getaruth1416@gmail.com
                </p>

              </div>
            </div>

            {/* LinkedIn */}

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-indigo-400 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  https://www.linkedin.com/in/padmini-krishnawamy/
                </a>
              </div>
            </div>

            {/* GitHub */}

            <div className="flex items-center gap-4">
              <FaGithub className="text-indigo-400 text-2xl" />

              <div>
                <h3 className="font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  https://github.com/padmini1405
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;