import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";

// 3D Tilt Card Component
function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full"
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="group relative h-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl hover:shadow-violet-500/10 transition-shadow duration-500 flex flex-col"
      >
        {/* Decorative Grid on Card */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

        {/* Header/Image Area */}
        <div className="relative h-48 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 p-6 flex flex-col justify-end border-b border-white/5">
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            {project.github && (
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/50 backdrop-blur-md hover:bg-white hover:text-black" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
              </Button>
            )}
          </div>

          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
            <span className="text-white text-xl font-bold">{project.title.charAt(0)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col relative z-10 bg-card/60 backdrop-blur-xl">
          <div className="mb-4">
            <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2 block">{project.category}</span>
            <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {project.stack.map((tech: string) => (
              <span key={tech} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wide rounded-md bg-white/5 text-muted-foreground border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Cross-Platform Sales System",
      category: "Full Stack Ecosystem",
      description: "A comprehensive ecosystem integrating Spring Boot REST API, Java Swing admin dashboard, and ReactJS customer web app. Features complex order processing and real-time revenue reports.",
      stack: ["Spring Boot", "ReactJS", "Java Swing", "MySQL"],
      color: "from-violet-600 to-indigo-600",
      github: "https://github.com/vduy1210/Finalyearproject",
    },
    {
      title: "Universal Yoga App",
      category: "Mobile Synchronization",
      description: "Offline-first Android admin app synced with a React Native customer app. Uses Firebase Firestore and Room Database for real-time class scheduling.",
      stack: ["Android SDK", "React Native", "Firebase", "SQLite"],
      color: "from-emerald-500 to-teal-500",
      github: "https://github.com/vduy1210/COMP1786_mobile_customer_react_app",
    },
    {
      title: "Vocabulary Builder",
      category: "SPA (Single Page App)",
      description: "Responsive SPA using Vue.js and Node.js (Express). Applied MVC architecture to build scalable RESTful APIs for vocabulary management.",
      stack: ["Vue.js", "Node.js", "Express", "MVC"],
      color: "from-emerald-400 to-green-500",
      github: "https://github.com/vduy1210/Comp1842",
    },
    {
      title: "CMS / Blog Manager",
      category: "PHP Web App",
      description: "Dynamic web application built with native PHP and MySQL. Hand-coded backend handling session authentication and CRUD operations without frameworks.",
      stack: ["PHP (Native)", "MySQL", "HTML/CSS"],
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/vduy1210/COMP1841-PHP",
    },
    {
      title: "Video Library Manager",
      category: "Desktop GUI",
      description: "Desktop app with Python Tkinter and SQL. Features video rating, playlist management, and OOP design patterns.",
      stack: ["Python", "Tkinter", "SQL", "OOP"],
      color: "from-yellow-500 to-orange-500",
      github: "https://github.com/vduy1210/1752-OOPPython",
    },
    {
      title: "Bookstore Data Manager",
      category: "Algorithms & Data Structures",
      description: "Java Core console app implementing custom data structures (Stack, Queue, LinkedList) for order management and performance testing.",
      stack: ["Java Core", "Algorithms", "Data Structures"],
      color: "from-red-500 to-rose-500",
      github: "https://github.com/vduy1210/1649A-Data-Structure",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden perspective-1000">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-violet-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Technical <span className="text-primary">Projects</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing diverse expertise from Systems Architecture to Mobile Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="h-[420px]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

