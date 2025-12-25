import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS configuration is missing. Please check .env file.");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Vu Duy",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lenguyenvuduy123456@gmail.com",
      href: "mailto:lenguyenvuduy123456@gmail.com",
      color: "from-violet-500 to-fuchsia-500",
    },

    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vduy1210",
      href: "https://github.com/vduy1210",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+84) 819 032 089",
      href: "tel:+84819032089",
      color: "from-green-500 to-emerald-500",
    },
  ];


  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-200/30 to-rose-200/30 dark:from-orange-900/10 dark:to-rose-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-wider text-violet-500 dark:text-violet-400 mb-4 block">
              Let's Collaborate
            </span>
            <h2 className="text-5xl md:text-6xl mb-6">
              Get In <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Touch</span>
            </h2>

            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's create something amazing together!
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Top Row: Form + Resume Card */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-rose-500 rounded-3xl blur-2xl opacity-10" />
                  <Card className="p-8 rounded-3xl relative h-full flex flex-col justify-center">
                    <h3 className="text-3xl mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm mb-2 text-foreground/70">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="h-12 rounded-xl border-2 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm mb-2 text-foreground/70">
                            Your Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="h-12 rounded-xl border-2 focus:border-orange-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm mb-2 text-foreground/70">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="rounded-xl border-2 focus:border-orange-500"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white h-12 rounded-xl group shadow-lg shadow-violet-500/20"
                      >
                        <Send className={`mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform ${isSubmitting ? 'animate-pulse' : ''}`} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Card>
                </div>
              </motion.div>

              {/* Resume Card (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="relative rounded-3xl overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-600" />
                  <Card className="p-8 rounded-3xl bg-transparent border-none text-white relative h-full flex flex-col justify-between">
                    <div>
                      <div className="text-5xl mb-4">💼</div>
                      <h3 className="text-2xl mb-3">Open to Opportunities</h3>
                      <p className="mb-6 opacity-90 leading-relaxed text-lg">
                        Currently seeking internships and entry-level positions where I can contribute
                        my design skills and continue growing.
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full bg-white text-violet-600 hover:bg-white/90 rounded-xl h-12 shadow-lg font-bold"
                      asChild
                    >
                      <a href="/Vu_Duy_CV.pdf" download="Vu_Duy_CV.pdf" target="_blank" rel="noopener noreferrer">
                        Download Resume
                      </a>
                    </Button>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row: Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block h-full"
                  >
                    <Card className="p-6 rounded-2xl hover:shadow-xl transition-all group border-violet-500/10 hover:border-violet-500/30 h-full flex flex-col items-center text-center justify-center gap-4 bg-card/50 backdrop-blur-sm">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60 mb-1">{info.label}</div>
                        <div className="font-medium text-lg">{info.value}</div>
                      </div>
                    </Card>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
