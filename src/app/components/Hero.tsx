import { Button } from "./ui/button";
import { ArrowRight, Terminal, Github } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px]" />

        {/* Code Rain Effect / Grid (Simplified with CSS Grid) */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-8 border border-secondary/20 backdrop-blur-md"
            >
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-medium">Full Stack Architecture Specialist</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl mb-6 font-bold tracking-tight">
              <span className="block mb-2">Building Scalable</span>
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Backend Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              I architect robust systems using
              <span className="text-foreground font-semibold"> Java Spring Boot</span>,
              <span className="text-foreground font-semibold"> ReactJS</span>, and
              <span className="text-foreground font-semibold"> Cloud Technologies</span>.
              Translating complex business logic into efficient code.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-2xl text-lg shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-8 rounded-2xl text-lg border-2 hover:bg-foreground/5"
              >
                <a href="https://github.com/vduy1210" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { number: "6+", label: "Projects Completed" },
              { number: "Java", label: "Core Expertise" },
              { number: "3.36", label: "GPA" },
              { number: "Full Stack", label: "Capabilities" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

