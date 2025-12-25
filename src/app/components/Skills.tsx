import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend Core",
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Python"],
      color: "bg-violet-500",
    },
    {
      title: "Frontend & Mobile",
      skills: ["ReactJS", "Vue.js", "React Native", "Android SDK", "Java Swing"],
      color: "bg-fuchsia-500",
    },
    {
      title: "Data & Cloud",
      skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "Room DB"],
      color: "bg-cyan-500",
    },
    {
      title: "DevOps & Tools",
      skills: ["Git/GitHub", "Docker", "Postman", "IntelliJ", "Linux"],
      color: "bg-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Technological <span className="text-primary">Arsenal</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive stack enabling full-lifecycle application development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${category.color} animate-pulse`} />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "#fff" }}
                    className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium text-foreground/80 cursor-default transition-colors shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

