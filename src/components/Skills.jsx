const skills = [
  "DSA",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PHP",
  "Laravel",
  "Vue.js",
  "REST API",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}

        <h2 className="text-4xl font-bold text-center mb-12 " id="Skills">
          My Skills
        </h2>

        {/* Experience Card */}

        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">

          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
            Software Developer
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I am a seasoned Software Engineer with over 2 years of experience in web application development,
            specializing in building scalable, efficient, and secure solutions. My expertise lies in PHP and MySQL
            for backend development and database management, complemented by strong front-end skills in HTML, CSS, and JavaScript.
            Throughout my career, I have: Designed and developed RESTful APIs and integrated third-party services to enhance
            system functionality. Focused on data security and privacy, ensuring compliance with industry standards.
            Actively contributed to database design, query optimization, and data modeling. Collaborated with cross-functional
            teams and senior leadership to align technical solutions with business goals.
            Improved code quality through code reviews, bug resolution, and performance optimization.
            Utilized Git for version control, ensuring smooth development workflows and collaboration.
            I am passionate about delivering high-quality software that meets business requirements,
            while continuously improving system performance and user experience.
          </p>

        </div>

        {/* Skills Grid */}

        <h3 className="text-3xl font-bold text-center mb-8">
          What I know
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-md
                rounded-xl
                py-4
                px-3
                text-center
                font-medium
                hover:border-indigo-500
                hover:bg-indigo-500/10
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-default
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;