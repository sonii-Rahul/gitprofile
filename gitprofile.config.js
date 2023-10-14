// gitprofile.config.js

const config = {
  github: {
    username: 'sonii-Rahul', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rahul-soni-b02a37217',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rsonisbr@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    
    'JavaScript',
    'React.js',
    'Node.js',
    'Oracle MySQL',
    'Git',
    'java',
    'Unix',
    'C',
    'Networking',
    'BrupSuit',
  
    'CSS',

  ],
  experiences: [
    {
      company: 'CyberOps',
      position: 'Training',
      from: 'June 2022',
      to: 'Nov 2022',
      companyLink: '',
    },
 
  ],
   certifications: [
    {
      name: 'Data Structures using C',
      body: 'All  About Data Structures and Algorithms',
      year: 'March 2023',
      link: ''
    },
    {
      name: 'Oracle Core Java',
      body: 'All  About Data Structures and Algorithms',
      year: 'March 2023',
      link: ''
    },
  ], 
  education: [
    {
      institution: 'Dayananda Sagar Institution ',
      degree: 'MCA',
      from: '2022',
      to: 'present',
    },
    {
      institution: 'Govt. College Of Sambhar Lake ',
      degree: 'B.COm',
      from: '2019',
      to: '2021',
    },
    
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        '',
      imageUrl: '0',
      link: 'h',
    },
  
  ],
  // Display blog posts from your medium or dev account. (Optional)

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary""
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
