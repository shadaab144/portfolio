import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-slate-800 pt-16 relative overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-steel-500/8 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-steel-600/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-steel-500 font-medium text-sm tracking-widest uppercase mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight mb-4"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl sm:text-2xl font-medium text-slate-200 mb-6"
          >
            {personalInfo.role}
            <span className="mx-3 text-steel-600">|</span>
            <span className="text-steel-500">{personalInfo.tagline}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56,189,248,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-steel-500 text-slate-900 text-sm font-semibold rounded-xl hover:bg-steel-400 transition-colors shadow-lg shadow-steel-500/30"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 border border-slate-600 text-white text-sm font-semibold rounded-xl hover:border-steel-500 hover:text-steel-500 hover:bg-steel-500/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 text-slate-300 hover:text-steel-500 border border-slate-600 hover:border-steel-500 rounded-xl transition-all duration-300 hover:bg-steel-500/8 hover:shadow-lg hover:shadow-steel-500/15"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 text-slate-300 hover:text-steel-500 border border-slate-600 hover:border-steel-500 rounded-xl transition-all duration-300 hover:bg-steel-500/8 hover:shadow-lg hover:shadow-steel-500/15"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex justify-center pb-10 mt-auto pt-16"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-slate-300 hover:text-steel-500 transition-colors duration-300 group"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
            <ArrowDown size={18} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
