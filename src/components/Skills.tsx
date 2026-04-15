import { Server, Monitor, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ReactNode> = {
  Backend: <Server size={20} className="text-gold-500" />,
  Frontend: <Monitor size={20} className="text-gold-500" />,
  Databases: <Database size={20} className="text-gold-500" />,
  'Cloud & DevOps': <Cloud size={20} className="text-gold-500" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-crimson-500 font-medium text-sm tracking-widest uppercase mb-2">What I Use</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">Skills & Tech Stack</h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-crimson-500 to-gold-500 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-crimson-500/40 hover:shadow-lg hover:shadow-crimson-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ duration: 0.3 }}>
                  {categoryIconMap[cat.category]}
                </motion.div>
                <h3 className="font-semibold text-gray-200">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * skillIdx + catIdx * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3.5 py-1.5 text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 rounded-full hover:border-crimson-500 hover:text-crimson-500 hover:bg-crimson-500/15 hover:shadow-md hover:shadow-crimson-500/15 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8"
        >
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-5">All Technologies</p>
          <div className="flex flex-wrap gap-2.5">
            {skillCategories.flatMap((c) => c.skills).map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3.5 py-1.5 text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 rounded-full hover:border-crimson-500 hover:text-crimson-500 hover:bg-crimson-500/15 hover:shadow-md hover:shadow-crimson-500/15 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
