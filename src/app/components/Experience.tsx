import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      role: "Bachelor of Science in Computing",
      company: "University of Greenwich",
      period: "2022 - 2026",
      description: "Specializing in Backend Development. GPA: 3.36.",
      achievements: [
        "GPA: 3.36",
        "Backend Development Specialist",
        "Final Year Student",
      ],
    },
    {
      type: "certificate",
      icon: Award,
      role: "VSTEP Certificate of English Proficiency",
      company: "University of Foreign Language Studies",
      period: "Sep 2023",
      description: "Achieved Overall score of 6.5.",
      achievements: [
        "demonstrated proficiency in academic English",
        "Writing & Speaking competent",
      ],

    },
    {
      type: "certificate",
      icon: Award,
      title: "IELTS Academic Certificate",
      organization: "IDP Education",
      period: "Jul 2022",
      description: "Achieved Overall score of 5.0.",
      achievements: [
        "Foundation for international education",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4">Education & Certifications</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            My academic journey and professional qualifications.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-violet-200 dark:bg-violet-900" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-violet-600 border-4 border-background" />

                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                          <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{exp.role || exp.title}</h3>
                          <div className="text-sm text-foreground/70 mb-2">
                            {exp.company || exp.organization} • {exp.period}
                          </div>

                          <p className="text-foreground/80 mb-4">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-foreground/70 flex items-start">
                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-600 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

