import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Abdulla | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My Name Is  ',
  name: ' Yusuf Abdulla',
  subtitle: "I'm a recent graduate focused in ",
  cta: 'More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi! I'm a Full Stack Web Developer with an academic background in Information Technology Management and a passion for building creative and effective applications.",
  paragraphTwo: "I enjoy exploring datasets and discovering how I can use them to solve real-life problems. I have always been fond of problem-solving, which is how I like to look at big datasets. To me, they are large problems I want to solve.",
  paragraphThree: "I have experience with Web Development, which helps gives me the ability to better communicate when working with developers.",
  resume: 'https://resume.creddle.io/resume/hotd8oqyo94', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ciao.jpg',
    title: 'Ciao',
    info: 'Collaborated with a team to develop a full stack application that allows its users to create virtual greetings containing text, images, gifs and videos that they can build with others and send to a recipient.',
    info2: 'Tech Stack: PostgreSQL, Express, React.js, Node.js, Bootstrap, Giphy API, Unsplash API',
    url: 'https://github.com/yusuf-abdulla3/Ciao',
  },
  {
    id: nanoid(),
    img: 'scheduler.png',
    title: 'Interview Scheduler',
    info: 'An full stack app that allows users to book, edit, and delete interviewers with select interviewers based on their weekly availability.',
    info2: 'Tech Stack: PostgreSQL, Express, React.js, Node.js',
    url: 'https://github.com/yusuf-abdulla3/scheduler',
  },
  {
    id: nanoid(),
    img: 'noimage.png',
    title: 'Jungle',
    info: "I'm baby wolf artisan prism cardigan, pickled food truck drinking vinegar pabst typewriter four dollar.",
    info2: 'Tech Stack: Ruby on Rails, PostGreSQL, Stripe API',
    url: 'https://github.com/yusuf-abdulla3/jungle-rails',
  },
  {
    id: nanoid(),
    img: 'cafe.jpg',
    title: 'Cafe Order-Pickup App',
    info: 'Collborated with a team to develop a restaurant order-pickup app in which the the customer can order any item on the menu. The order is then sent to the cafe via SMS using Twilio API. The restaurant inputs the amount of time it will take for the order to be completed which is then communicated to the customer via SMS using Twilio API.',
    info2: 'PostgreSQL, Express, Node.js, Bootstrap, Twilio API',
    url: 'https://github.com/xazzer81/UberDrink',
  },
  {
    id: nanoid(),
    img: 'tweeter.png',
    title: 'Tweeter',
    info: 'I am currently in the middle of reconstructing a website for Express Tax and Bookkeeping services. They are a small business tax firm based in Mississauga, ON.',
    info2: '',
    url: 'https://github.com/xazzer81/UberDrink',
  },
  {
    id: nanoid(),
    img: 'tinyapp.png',
    title: 'Tiny App',
    info: 'I am currently in the middle of reconstructing a website for Express Tax and Bookkeeping services. They are a small business tax firm based in Mississauga, ON.',
    info2: '',
    url: 'https://github.com/xazzer81/UberDrink',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'y.abdulla37@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/yusuf-abdulla',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yusuf-abdulla/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yusuf-abdulla3',
    },
    
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
