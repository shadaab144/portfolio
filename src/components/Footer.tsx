import { Code2, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-200 font-semibold">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Code2 size={20} className="text-crimson-500" />
            </motion.div>
            <span>{personalInfo.name}</span>
          </div>

          <p className="text-sm text-center text-gray-400">
            {personalInfo.role} &middot; Backend Development
          </p>

          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-crimson-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-crimson-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-400">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
