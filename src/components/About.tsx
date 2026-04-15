import { GraduationCap, MapPin, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutDetails, personalInfo, education } from '../data/portfolioData';

const iconMap = {
  Experience: <Briefcase size={18} className="text-crimson-500" />,
  'Current Role': <Star size={18} className="text-crimson-500" />,
  Location: <MapPin size={18} className="text-crimson-500" />,
  Education: <GraduationCap size={18} className="text-crimson-500" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-crimson-500 font-medium text-sm tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50">About Me</h2>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-crimson-500 to-gold-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-5">
            {aboutDetails.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="text-gray-200 leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="pt-4 border-t border-gray-800"
            >
              <p className="text-sm text-gray-300 mb-2 font-medium">Contact</p>
              <div className="flex flex-col gap-1.5 text-sm text-gray-200">
                <span>{personalInfo.email}</span>
                <span>+91 {personalInfo.phone}</span>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutDetails.highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-start gap-3 hover:border-crimson-500/40 hover:shadow-lg hover:shadow-crimson-500/10 transition-all duration-300"
                >
                  <div className="mt-0.5">
                    {iconMap[item.label as keyof typeof iconMap]}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-200 font-semibold text-sm leading-snug">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-crimson-500/40 hover:shadow-lg hover:shadow-crimson-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap size={20} className="text-crimson-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-200">{education.degree}</p>
                  <p className="text-sm text-gray-300 mt-0.5">{education.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800">
                <span className="text-xs bg-crimson-600/10 text-crimson-500 border border-crimson-600/20 font-medium px-2.5 py-1 rounded-full">
                  {education.grade}
                </span>
                <span className="text-xs text-gray-300">Graduated {education.year}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
