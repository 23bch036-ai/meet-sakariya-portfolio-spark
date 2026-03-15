import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import meetPhoto from "@/assets/meet-photo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center font-mono text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                8.83 CGPA
              </span>
              <span className="text-sm text-muted-foreground">B.Tech Engineering</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-foreground mb-4">
              Meet Sakariya
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Engineering Student · Problem Solver · Future Innovator
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A detail-oriented engineering undergraduate at Pandit Deendayal Energy University
              with a strong academic record (CGPA 8.83) and hands-on industrial experience.
              Specializing in chemical process engineering, sustainability, and process optimization
              with a focus on delivering measurable, real-world impact.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail size={16} /> Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/meet-sakariya-306384328?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-foreground px-5 py-2.5 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden engineering-card">
                <img
                  src={meetPhoto}
                  alt="Meet Sakariya"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
