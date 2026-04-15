export const personalInfo = {
  name: 'Syed Shadaab Afdhal',
  role: 'Software Developer',
  tagline: 'Node.js | TypeScript | Backend Development',
  location: 'India',
  phone: '9052483677',
  email: 'shadaab144@gmail.com',
  // github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/shadaab-afdhal-26b810249?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  summary:
    'Software Developer with 3 years of experience focused on backend services using Node.js, TypeScript, and Express.js. Background in AWS production support with hands-on experience debugging live systems. Familiar with React.js and MongoDB along with relational databases.',
};

export const aboutDetails = {
  paragraphs: [
    'I am a backend-focused Software Developer with 3 years of professional experience building scalable REST APIs and services. My core stack revolves around Node.js, TypeScript, and Express.js, and I have worked extensively with both SQL and NoSQL databases including PostgreSQL, MySQL, and MongoDB.',
    'At Wissen Infotech, I have been part of a live production backend project where I debug real-time issues, optimize database queries, and collaborate with cross-functional teams to maintain backend stability. I bring a problem-solving mindset and a strong sense of ownership to every project I work on.',
    'Beyond backend development, I have hands-on exposure to AWS for production support and am comfortable working with Git workflows in collaborative team environments. I continuously look to improve code quality, system reliability, and developer experience.',
  ],
  highlights: [
    { label: 'Experience', value: '3 Years' },
    { label: 'Current Role', value: 'Software Developer at Wissen Infotech' },
    { label: 'Location', value: 'India' },
    { label: 'Education', value: 'B.Tech in CSE' },
  ],
};

export const experiences = [
  {
    company: 'Wissen Infotech',
    role: 'Software Developer',
    duration: 'July 2023 – Present',
    location: 'India',
    responsibilities: [
      'Developed backend services and REST APIs using Node.js, TypeScript, and Express.js',
      'Worked on a live production backend project, handling critical systems end-to-end',
      'Debugged production issues across application and database layers under time-sensitive conditions',
      'Worked with PostgreSQL, MySQL, and MongoDB for queries, data modeling, and issue investigation',
      'Improved API error handling and database queries to resolve recurring production issues',
      'Collaborated with cross-functional teams to improve overall backend stability and performance',
    ],
  },
];

export const skillCategories = [
  {
    category: 'Backend',
    skills: ['Node.js', 'TypeScript', 'JavaScript', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Git', 'GitHub'],
  },
];

export const projects = [
  {
    title: 'RESTful E-Commerce API',
    description:
      'A production-grade REST API for an e-commerce platform featuring product management, order processing, cart functionality, and JWT-based authentication. Implements layered architecture with service, controller, and repository patterns.',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'JWT'],
    github: 'https://github.com',
    highlights: ['Role-based access control', 'Paginated endpoints', 'Input validation & error middleware'],
  },
  {
    title: 'Authentication & Authorization Service',
    description:
      'A standalone microservice handling user registration, login, token refresh, and role management. Built with secure password hashing, refresh token rotation, and stateless JWT design for scalable deployments.',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'bcrypt'],
    github: 'https://github.com',
    highlights: ['JWT + Refresh Token flow', 'Secure cookie management', 'Rate limiting'],
  },

];

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2024',
    expiry: '2027',
    credentialId: '',
    verifyUrl: '',
    badge: 'CLF-C02',
  },
];

export const education = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'Jawaharlal Nehru Technological University, Anantapur',
  grade: 'First Class Distinction',
  year: '2023',
};
