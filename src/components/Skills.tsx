import { motion } from "framer-motion";
import { Cpu, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Tools",
    icon: Cpu,
    skills: [
      "Aspen HYSYS",
      "Aspen Plus",
      "AutoCAD",
      "ChemCAD",
      "Data Analysis",
      "MATLAB",
      "Microsoft Excel",
      "Process Simulation",
      "Python",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Adaptability",
      "Communication",
      "Critical Thinking",
      "Leadership",
      "Problem Solving",
      "Teamwork",
      "Technical Presentation",
      "Time Management",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Skills</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="engineering-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="text-primary" size={20} />
                  <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-[15px] text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
