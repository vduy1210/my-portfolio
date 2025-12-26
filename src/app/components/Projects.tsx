import { Button } from "./ui/button";
import { Github, ArrowRight, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

function ProjectRow({ project, index }: { project: any, index: number }) {
  const isEven = index % 2 === 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images]);

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-24 last:mb-0 ${!isEven ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* "Image" / Visual Side */}
      <div className="w-full md:w-1/2">
        <div className="relative group overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500">
          {/* Decorative Header Bar */}
          <div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-2 z-10 relative">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>

          {/* Content Placeholder for Image */}
          <div className="aspect-video bg-muted relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <AnimatePresence mode="wait">
              {project.images && project.images.length > 0 ? (
                <motion.img
                  key={project.images[currentImageIndex]}
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.95 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity"
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full absolute inset-0">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/10">
                      <Folder className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Indicators (Dots) */}
            {project.images && project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {project.images.map((_: any, idx: number) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-primary w-4" : "bg-primary/30"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Text / info Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${project.badgeColor}`}>
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: string) => (
            <span key={tech} className="px-3 py-1.5 text-sm font-medium text-foreground/80 bg-muted rounded-lg border border-border">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2">
          {project.github && (
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 px-8 shadow-lg shadow-primary/20 group" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> Code Repository
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          )}
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
      badgeColor: "bg-blue-500/10 text-blue-600",
      github: "https://github.com/vduy1210/Finalyearproject",
      images: [
        "/Cross-Platform%20Sales%20System/2.png",
        "/Cross-Platform%20Sales%20System/Web-Menu.png",
        "/Cross-Platform%20Sales%20System/Product%20management.png",
        "/Cross-Platform%20Sales%20System/Order.png",
        "/Cross-Platform%20Sales%20System/1.png"
      ]
    },
    {
      title: "Universal Yoga App",
      category: "Mobile Synchronization",
      description: "Offline-first Android admin app synced with a React Native customer app. Uses Firebase Firestore and Room Database for real-time class scheduling.",
      stack: ["Android SDK", "React Native", "Firebase", "SQLite"],
      badgeColor: "bg-teal-500/10 text-teal-600",
      github: "https://github.com/vduy1210/COMP1786_mobile_customer_react_app",
      images: [
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20161755.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20161615.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20161845.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20161921.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20161942.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20162004.png",
        "/Universal%20Yoga%20App/Screenshot%202025-12-26%20162033.png"
      ]
    },
    {
      title: "Vocabulary Builder",
      category: "SPA (Single Page App)",
      description: "Responsive SPA using Vue.js and Node.js (Express). Applied MVC architecture to build scalable RESTful APIs for vocabulary management.",
      stack: ["Vue.js", "Node.js", "Express", "MVC"],
      badgeColor: "bg-green-500/10 text-green-600",
      github: "https://github.com/vduy1210/Comp1842",
      images: [
        "/Vocab%20web/Screenshot%202025-12-26%20162344.png",
        "/Vocab%20web/Screenshot%202025-12-26%20162210.png"
      ]
    },
    {
      title: "CMS / Blog Manager",
      category: "PHP Web App",
      description: "Dynamic web application built with native PHP and MySQL. Hand-coded backend handling session authentication and CRUD operations without frameworks.",
      stack: ["PHP (Native)", "MySQL", "HTML/CSS"],
      badgeColor: "bg-pink-500/10 text-pink-600",
      github: "https://github.com/vduy1210/COMP1841-PHP",
      images: [
        "/CMS%20%20Blog%20Manager/Screenshot%202025-12-26%20163436.png",
        "/CMS%20%20Blog%20Manager/Screenshot%202025-12-26%20163507.png",
        "/CMS%20%20Blog%20Manager/Screenshot%202025-12-26%20163534.png"
      ]
    },
    {
      title: "Video Library Manager",
      category: "Desktop GUI",
      description: "Desktop app with Python Tkinter and SQL. Features video rating, playlist management, and OOP design patterns.",
      stack: ["Python", "Tkinter", "SQL", "OOP"],
      badgeColor: "bg-orange-500/10 text-orange-600",
      github: "https://github.com/vduy1210/1752-OOPPython",
      images: [
        "/Video%20Library%20Manager/Screenshot%202025-12-26%20162715.png",
        "/Video%20Library%20Manager/Screenshot%202025-12-26%20162915.png"
      ]
    },
    {
      title: "Bookstore Data Manager",
      category: "Algorithms & Data Structures",
      description: "Java Core console app implementing custom data structures (Stack, Queue, LinkedList) for order management and performance testing.",
      stack: ["Java Core", "Algorithms", "Data Structures"],
      badgeColor: "bg-red-500/10 text-red-600",
      github: "https://github.com/vduy1210/1649A-Data-Structure",
      images: ["/Bookstore%20Data%20Manager/Screenshot%202025-12-26%20163156.png"]
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background with simple grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dive into my technical case studies.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
