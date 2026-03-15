import { motion } from "framer-motion";
import { FlaskConical, Lightbulb, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">About Me</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: FlaskConical, title: "Chemical Engineering", desc: "Proficient in chemical process design, reaction engineering, and process simulation with a focus on industrial-scale applications and optimization." },
              { icon: Leaf, title: "Sustainability & Energy", desc: "Dedicated to advancing renewable energy integration and sustainable engineering practices to minimize environmental impact across industrial processes." },
              { icon: Lightbulb, title: "Analytical Problem Solving", desc: "Adept at applying first-principles thinking and data-driven methodologies to diagnose and resolve complex engineering challenges." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="engineering-card p-6"
              >
                <item.icon className="text-primary mb-4" size={24} />
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
            I am a B.Tech student at Pandit Deendayal Energy University (SPT), Gujarat, building a strong
            foundation in chemical process calculations, fluid mechanics, thermodynamics, and energy systems.
            My academic pursuits are complemented by hands-on industrial experience at Bansi Polymers, where
            I applied theoretical knowledge to real-world polymer processing and quality control challenges.
            I am committed to leveraging analytical skills and engineering fundamentals to contribute
            meaningfully to process optimization, sustainability initiatives, and emerging energy technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
