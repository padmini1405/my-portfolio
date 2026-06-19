import {
  Trophy,
  Code2,
  BookOpen,
  Award,
} from "lucide-react";

const stats = [
  {
    title: "DSA Problems",
    value: "500+",
    icon: Code2,
  },
  {
    title: "Scaler Academy",
    value: "Completed",
    icon: BookOpen,
  },
  {
    title: "Industry Experience",
    value: "2 Years",
    icon: Trophy,
  },
  {
    title: "Certifications",
    value: "4+",
    icon: Award,
  },
];

const Stats = () => {
  return (
    <section id="stats">

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl"
            >
              <Icon />

              <h3 className="text-4xl font-bold mt-4">
                {item.value}
              </h3>

              <p>{item.title}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Stats;