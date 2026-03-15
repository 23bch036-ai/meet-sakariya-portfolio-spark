import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Lightbulb } from "lucide-react";

const responsibilities = [
  "Monitored and optimized polymer processing parameters to ensure product consistency.",
  "Assisted in troubleshooting mechanical unit operations and fluid flow discrepancies.",
  "Conducted quality control tests on raw materials and finished polymer products.",
];

const learnings = [
  "Practical application of Fluid Mechanics in industrial piping systems.",
  "Understanding of industrial safety protocols and large-scale manufacturing workflows.",
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="engineering-card p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Engineering Intern</h3>
                <p className="text-sm text-primary font-medium">Bansi Polymers</p>
                <p className="text-xs text-muted-foreground mt-1">Gujarat, India</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Responsibilities</span>
                </div>
                <ul className="space-y-2">
                  {responsibilities.map((r, i) => (
                    <li key={i} className="text-[15px] text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Key Learnings</span>
                </div>
                <ul className="space-y-2">
                  {learnings.map((l, i) => (
                    <li key={i} className="text-[15px] text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
