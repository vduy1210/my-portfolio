import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/vduy1210", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:lenguyenvuduy123456@gmail.com", label: "Email" },
  ];


  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t py-16 relative overflow-hidden">
      {/* Background decoration */}
      {/* Background decoration Removed */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-violet-200/20 to-transparent dark:from-violet-900/10 rounded-full blur-3xl" /> */}


      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-3xl font-bold text-primary">
                Vu Duy
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Backend Developer specializing in modern web ecosystems.
                Building scalable solutions with Java Spring Boot and React.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-muted hover:bg-primary hover:text-white border border-border flex items-center justify-center group transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />

                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter or CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg mb-4">Let's Work Together</h4>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Open to exciting opportunities and collaborations.
                Drop me a message!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Get In Touch
              </a>

            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60"
          >
            <p className="flex items-center gap-2">
              © {currentYear} Vu Duy. Built with
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
              and Java
            </p>

            <p>All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
