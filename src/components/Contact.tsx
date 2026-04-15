import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const contactMethods = [
  {
    icon: <Mail size={20} className="text-steel-500" />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <Phone size={20} className="text-steel-500" />,
    label: 'Phone',
    value: `+91 ${personalInfo.phone}`,
    href: `tel:+91${personalInfo.phone}`,
  },
  {
    icon: <MapPin size={20} className="text-steel-500" />,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-steel-500 font-medium text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Contact</h2>
          <div className="mt-4 w-12 h-1 bg-steel-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-200 text-base leading-relaxed mb-8">
              I am currently open to new opportunities. Whether you have a question, a project idea, or just want to connect, feel free to reach out. I will get back to you as soon as possible.
            </p>

            <div className="space-y-4 mb-8">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-steel-500/40 hover:shadow-lg hover:shadow-steel-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-steel-600/10 rounded-lg flex items-center justify-center shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-slate-300 font-medium text-sm hover:text-steel-500 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 font-medium text-sm">{method.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-steel-500 text-slate-900 text-sm font-semibold rounded-xl hover:bg-steel-400 transition-colors shadow-lg shadow-steel-500/25"
              >
                <Linkedin size={17} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-steel-500/30 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-500/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me more about the opportunity or question..."
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-steel-500 focus:ring-2 focus:ring-steel-500/20 transition-all duration-300 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(56,189,248,0.25)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-steel-500 text-slate-900 text-sm font-semibold rounded-xl hover:bg-steel-400 transition-colors shadow-lg shadow-steel-500/25"
              >
                <Send size={15} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
