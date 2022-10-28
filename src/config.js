module.exports = {
  siteTitle: 'Vincent Otieno | Software Engineer | DevOps Engineer | Content Writer',
  siteDescription:
    'Vincent Otieno is a Software Engineer, DevOps Engineer and a content writer who loves learning constantly, working and helping others in tech community.',
  siteKeywords:
    'Otieno Vincent, VinneyJ, Vincent, Otieno, software developer, software engineer, content writer, freelancer, real estate, web developer, Python developer, django, flask, technical writer, Backend engineer, DevOps Engineer',
  siteUrl: 'https://VinneyJ.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Vincent Otieno',
  location: 'Nairobi, Kenya',
  email: 'vincentjayden49@gmail.com',
  github: 'https://github.com/VinneyJ',
  twitterHandle: '@#',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/VinneyJ',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vincent-otieno1/',
    },

  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Memories',
      url: '/pensieve',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

