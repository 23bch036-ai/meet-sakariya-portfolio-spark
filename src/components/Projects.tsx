import { motion } from "framer-motion";
import { FlaskConical, Settings2, Thermometer, Leaf } from "lucide-react";

const projects = [
  {
    icon: FlaskConical,
    title: "Distillation Column Design using McCabe-Thiele Method",
    desc: "Designed a binary distillation column using the McCabe-Thiele graphical method to determine the number of theoretical stages, reflux ratio, and feed stage location.",
    tech: ["Mass Transfer", "Thermodynamics", "Excel"],
    learning: "Deepened understanding of vapor-liquid equilibrium and stage-wise separation processes.",
  },
  {
    icon: Settings2,
    title: "Equal Percentage Control Valve Experiment",
    desc: "Conducted experiments on control valve characteristics, analyzing flow coefficients and comparing inherent vs installed characteristics for equal percentage valves.",
    tech: ["Process Control", "Instrumentation", "Data Analysis"],
    learning: "Gained practical insight into control system dynamics and valve sizing methodology.",
  },
  {
    icon: Thermometer,
    title: "Catalyst Deactivation Temperature Study",
    desc: "Investigated the effect of temperature on catalyst deactivation rates in chemical reactors, analyzing sintering and poisoning mechanisms.",
    tech: ["Reaction Engineering", "MATLAB", "Chemical Kinetics"],
    learning: "Understood the interplay between reaction kinetics, catalyst lifetime, and operating conditions.",
  },
  {
    icon: Leaf,
    title: "Renewable Energy Research Proposal",
    desc: "Developed a comprehensive research proposal evaluating the feasibility of integrating solar thermal energy into existing chemical process plants.",
    tech: ["Renewable Energy", "Process Simulation", "Sustainability"],
    learning: "Explored the techno-economic analysis framework for renewable energy integration in industry.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="engineering-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <p.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">{p.title}</h3>
                </div>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  <span className="font-medium text-foreground not-italic">Learned:</span> {p.learning}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
