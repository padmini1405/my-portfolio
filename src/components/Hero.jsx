import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-32 pb-20 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col items-center text-center">

                    <p className="text-indigo-400 text-lg mb-4">
                        Hello, My Name Is
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                        Padmini
                    </h1>

                    <div className="text-2xl md:text-5xl font-bold mb-8 flex flex-wrap justify-center gap-3">

                        <span>And I'm a</span>

                        <TypeAnimation
                            sequence={[
                                "Software Engineer",
                                2000,
                                "Full Stack Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-indigo-500"
                        />

                    </div>

                    <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-10">
                        I build scalable, production-ready applications with
                        clean UI, robust backend systems, and exceptional
                        user experiences.
                    </p>

                    <div className="flex justify-center gap-6 mb-10">

                        <a
                            href="https://github.com/padmini1405"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-indigo-400 transition"
                        >
                            <FaGithub size={28} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/padmini-krishnawamy/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-indigo-400 transition"
                        >
                            <FaLinkedin size={28} />
                        </a>

                        <a
                            href="mailto:getaruth1416@gmail.com"
                            className="hover:text-indigo-400 transition"
                        >
                            <FaEnvelope size={28} />
                        </a>

                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">

                        <a
                            href="#Projects"
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
                        >
                            View My Work
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 border border-indigo-500 hover:bg-indigo-500/10 rounded-lg transition"
                        >
                            Download Resume
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;