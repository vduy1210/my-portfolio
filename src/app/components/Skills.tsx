import { motion } from "motion/react";
import {
  FaJava, FaNodeJs, FaPython, FaReact, FaVuejs,
  FaAndroid, FaGithub, FaDatabase
} from "react-icons/fa";
import {
  SiSpring, SiExpress, SiMysql, SiPostgresql,
  SiSqlite, SiFirebase, SiPostman, SiIntellijidea
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend Core",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpring },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: FaPython }
      ],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "ReactJS", icon: FaReact },
        { name: "Vue.js", icon: FaVuejs },
        { name: "React Native", icon: TbBrandReactNative },
        { name: "Android SDK", icon: FaAndroid },
        { name: "Java Swing", icon: FaJava }
      ],
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Data & Cloud",
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQLite", icon: SiSqlite },
        { name: "Firebase", icon: SiFirebase },
        { name: "Room DB", icon: FaDatabase }
      ],
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    },
    {
      title: " Tools",
      skills: [
        { name: "Git/GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "IntelliJ", icon: SiIntellijidea }
      ],
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
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
              className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card/80 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${category.color.replace('text-', 'bg-')} animate-pulse`} />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "#fff" }}
                    className="pl-3 pr-4 py-2 bg-background border border-border rounded-xl text-sm font-medium text-foreground/80 cursor-default transition-colors shadow-sm flex items-center gap-2 group hover:border-primary/50"
                  >
                    <skill.icon className={`w-4 h-4 ${category.color} transition-colors`} />
                    {skill.name}
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
