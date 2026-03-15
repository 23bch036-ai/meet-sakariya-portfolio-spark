import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "Maintained a CGPA of 8.83 throughout the B.Tech program.",
  "Successfully completed an industrial internship at Bansi Polymers, gaining hands-on experience in polymer processing and quality control.",
  "Designed and presented a distillation column project using the McCabe-Thiele method, receiving commendation for accuracy and methodology.",
  "Conducted independent research on catalyst deactivation mechanisms, presenting findings in a departmental seminar.",
  "Authored a renewable energy research proposal evaluating solar thermal integration in chemical process plants.",
  "Recognized for excellence in laboratory experiments involving process control and instrumentation.",
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Achievements</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="engineering-card p-6 sm:p-8">
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed"
                >
                  <Award size={18} className="text-primary shrink-0 mt-0.5" />
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
