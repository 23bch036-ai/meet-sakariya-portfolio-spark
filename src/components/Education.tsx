import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Chemical Process Calculations",
  "Chemical Reaction Engineering",
  "Distillation and Separation Processes",
  "Energy Systems",
  "Fluid Mechanics",
  "Fuel and Energy Technology",
  "Heat Transfer",
  "Mass Transfer",
  "Material Science",
  "Mechanical Unit Operations",
  "Process Control",
  "Process Simulation",
  "Renewable Energy Systems",
  "Sustainability",
  "Thermodynamics",
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Education</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={14} className="text-primary-foreground" />
            </div>

            <div className="engineering-card p-6 ml-4">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-base font-semibold text-foreground">
                  Bachelor of Technology in Engineering
                </h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                  CGPA: 8.83
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pandit Deendayal Energy University (SPT), Gujarat
              </p>

              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md border border-border"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
