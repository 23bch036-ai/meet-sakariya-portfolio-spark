import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, X, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap, Settings2, FlaskConical } from "lucide-react";

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  const handleDownload = () => {
    // Create a printable version
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html><head><title>Meet Sakariya - Resume</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1a2e; padding: 40px; max-width: 800px; margin: auto; font-size: 14px; line-height: 1.5; }
        h1 { font-size: 24px; margin-bottom: 4px; }
        h2 { font-size: 16px; color: #3b82f6; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin: 16px 0 8px; }
        .contact { font-size: 12px; color: #6b7280; margin-bottom: 16px; }
        .section { margin-bottom: 12px; }
        ul { padding-left: 18px; }
        li { margin-bottom: 4px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .skill-item { font-size: 13px; }
        @media print { body { padding: 20px; } }
      </style></head><body>
        <h1>Meet Sakariya</h1>
        <div class="contact">23bch036@spt.pdpu.ac.in · Gujarat, India · LinkedIn: Meet Sakariya</div>
        <h2>Objective</h2>
        <p>Engineering student with CGPA 8.83 seeking opportunities to apply chemical engineering knowledge in process optimization, sustainability, and renewable energy.</p>
        <h2>Education</h2>
        <p><strong>B.Tech in Engineering</strong> — Pandit Deendayal Energy University (SPT) · CGPA: 8.83</p>
        <h2>Experience</h2>
        <p><strong>Engineering Intern</strong> — Bansi Polymers, Gujarat</p>
        <ul>
          <li>Monitored and optimized polymer processing parameters</li>
          <li>Assisted in troubleshooting mechanical unit operations</li>
          <li>Conducted quality control tests on raw materials</li>
        </ul>
        <h2>Skills</h2>
        <div class="grid">
          <div><strong>Technical:</strong> Aspen HYSYS, Aspen Plus, MATLAB, Python, Excel, Data Analysis</div>
          <div><strong>Engineering:</strong> Thermodynamics, Fluid Mechanics, Heat Transfer, Mass Transfer, Process Control</div>
        </div>
        <h2>Projects</h2>
        <ul>
          <li>Distillation Column Design using McCabe-Thiele Method</li>
          <li>Equal Percentage Control Valve Experiment</li>
          <li>Catalyst Deactivation Temperature Study</li>
          <li>Renewable Energy Research Proposal</li>
        </ul>
        <h2>Achievements</h2>
        <ul>
          <li>Maintained CGPA of 8.83</li>
          <li>Completed internship at Bansi Polymers</li>
          <li>Presented catalyst deactivation research in departmental seminar</li>
        </ul>
        <script>window.print();</script>
      </body></html>
    `);
    printWindow.document.close();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
      >
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h3 className="text-lg font-semibold text-foreground">Resume</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download size={16} /> Download PDF
            </button>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted text-muted-foreground">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 sm:p-10">
          {/* Name & Contact */}
          <div className="text-center mb-8 border-b border-border pb-6">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Meet Sakariya</h1>
            <p className="text-sm text-muted-foreground mb-3">Engineering Student · Problem Solver · Future Innovator</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Mail size={12} /> 23bch036@spt.pdpu.ac.in</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> Gujarat, India</span>
              <span className="flex items-center gap-1"><Linkedin size={12} /> Meet Sakariya</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-[13px] font-medium text-foreground">B.Tech in Engineering</p>
                <p className="text-xs text-muted-foreground">PDEU (SPT), Gujarat</p>
                <p className="font-mono text-xs text-primary mt-1">CGPA: 8.83</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings2 size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Technical Tools</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {["Aspen HYSYS", "Aspen Plus", "Data Analysis", "MATLAB", "Microsoft Excel", "Process Simulation", "Python"].map(s => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Soft Skills</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {["Critical Thinking", "Problem Solving", "Teamwork", "Technical Presentation"].map(s => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column (2/3) */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Experience</h4>
                </div>
                <p className="text-[13px] font-medium text-foreground">Engineering Intern — Bansi Polymers</p>
                <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                  <li>• Monitored and optimized polymer processing parameters</li>
                  <li>• Assisted in troubleshooting mechanical unit operations and fluid flow</li>
                  <li>• Conducted quality control tests on raw materials and finished products</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Projects</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li><span className="font-medium text-foreground">Distillation Column Design</span> — McCabe-Thiele method for theoretical stage determination</li>
                  <li><span className="font-medium text-foreground">Control Valve Experiment</span> — Flow coefficient analysis for equal percentage valves</li>
                  <li><span className="font-medium text-foreground">Catalyst Deactivation Study</span> — Temperature effects on catalyst lifetime</li>
                  <li><span className="font-medium text-foreground">Renewable Energy Proposal</span> — Solar thermal integration feasibility study</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">Achievements</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• CGPA 8.83 throughout B.Tech program</li>
                  <li>• Completed industrial internship at Bansi Polymers</li>
                  <li>• Presented catalyst deactivation research in departmental seminar</li>
                  <li>• Authored renewable energy research proposal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const handleDownloadResume = () => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(`
    <html><head><title>Meet Sakariya - Resume</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1a2e; padding: 40px; max-width: 800px; margin: auto; font-size: 14px; line-height: 1.5; }
      h1 { font-size: 24px; margin-bottom: 4px; }
      h2 { font-size: 16px; color: #3b82f6; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; margin: 16px 0 8px; }
      .contact { font-size: 12px; color: #6b7280; margin-bottom: 16px; }
      ul { padding-left: 18px; }
      li { margin-bottom: 4px; }
      .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      @media print { body { padding: 20px; } }
    </style></head><body>
      <h1>Meet Sakariya</h1>
      <div class="contact">23bch036@spt.pdpu.ac.in · Gujarat, India · LinkedIn: Meet Sakariya</div>
      <h2>Objective</h2>
      <p>Engineering student with CGPA 8.83 seeking opportunities to apply chemical engineering knowledge in process optimization, sustainability, and renewable energy.</p>
      <h2>Education</h2>
      <p><strong>B.Tech in Engineering</strong> — Pandit Deendayal Energy University (SPT) · CGPA: 8.83</p>
      <h2>Experience</h2>
      <p><strong>Engineering Intern</strong> — Bansi Polymers, Gujarat</p>
      <ul>
        <li>Monitored and optimized polymer processing parameters</li>
        <li>Assisted in troubleshooting mechanical unit operations and fluid flow</li>
        <li>Conducted quality control tests on raw materials and finished products</li>
      </ul>
      <h2>Skills</h2>
      <div class="grid">
        <div><strong>Technical:</strong> Aspen HYSYS, Aspen Plus, MATLAB, Python, Excel, Data Analysis</div>
        <div><strong>Engineering:</strong> Thermodynamics, Fluid Mechanics, Heat Transfer, Mass Transfer, Process Control</div>
      </div>
      <h2>Projects</h2>
      <ul>
        <li>Distillation Column Design using McCabe-Thiele Method</li>
        <li>Equal Percentage Control Valve Experiment</li>
        <li>Catalyst Deactivation Temperature Study</li>
        <li>Renewable Energy Research Proposal</li>
      </ul>
      <h2>Achievements</h2>
      <ul>
        <li>Maintained CGPA of 8.83</li>
        <li>Completed internship at Bansi Polymers</li>
        <li>Presented catalyst deactivation research in departmental seminar</li>
      </ul>
      <script>window.print();<\/script>
    </body></html>
  `);
  printWindow.document.close();
};

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium tracking-tight text-foreground mb-2">Resume</h2>
          <div className="w-12 h-0.5 bg-primary rounded-full mb-8" />

          <div className="engineering-card p-8 text-center">
            <FileText className="mx-auto text-primary mb-4" size={48} strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-foreground mb-2">My Resume</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              A comprehensive overview of my education, experience, technical competencies, and project portfolio.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <FileText size={16} /> View Resume
              </button>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                <Download size={16} /> Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Resume;
