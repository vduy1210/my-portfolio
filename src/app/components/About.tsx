import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Server, Database, Code, Globe, Facebook, Github, Mail } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const values = [
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Designing robust systems that can handle high traffic and complex data flows.",
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Ensuring secure and efficient data storage / retrieval strategies.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and self-documenting code.",
    },
    {
      icon: Globe,
      title: "API First",
      description: "Building reliable RESTful services for cross-platform integration.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-violet-900/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-wider text-secondary mb-4 block">
              Behind the Code
            </span>
            <h2 className="text-5xl md:text-6xl mb-6 font-bold">
              About <span className="text-primary">Me</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-20" />
              <ImageWithFallback
                src="/profile.jpg"
                alt="Vu Duy"
                className="w-full max-w-xs aspect-[4/5] object-cover rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />

              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl z-20 border border-white/10">
                <div className="text-3xl mb-1">🚀</div>
                <div className="text-sm font-medium">Backend Specialist</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold">
                Hello, I'm <span className="text-primary">Vu Duy.</span>
              </h3>

              <h4 className="text-xl text-foreground/80 font-medium">
                Turning complex problems into elegant backend solutions.
              </h4>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a final-year student at the <strong className="text-foreground">University of Greenwich</strong> with a strong focus on Backend Development.
                I specialize in building scalable systems using <strong className="text-foreground">Spring Boot</strong>, React, and MySQL.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about clean architecture and performance, I've progressed from simple tools to complex full-stack ecosystems.
                With strong English proficiency (IELTS 5.0 & VSTEP 6.5), I'm ready to contribute to professional development teams.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.facebook.com/lnvduy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-600/10 text-blue-500 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-600/20 transition-all flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://github.com/vduy1210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gray-800/50 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-gray-800/80 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="mailto:lenguyenvuduy123456@gmail.com"
                  className="px-5 py-2.5 bg-violet-600/10 text-violet-500 rounded-full text-sm font-medium border border-violet-500/20 hover:bg-violet-600/20 transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </motion.div>

          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-colors hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

