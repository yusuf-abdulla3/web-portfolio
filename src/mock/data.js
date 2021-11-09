import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Abdulla | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My Name Is ',
  name: 'Yusuf Abdulla',
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
    info: 'I worked with a team to clean, process and explore datasets using python, and then make predictions based on our findings.',
    info2: '',
    url: 'https://github.com/yusuf-abdulla3/ITM760_Final_Project/tree/main/ITM760_Final_Project',
  },
  {
    id: nanoid(),
    img: 'capstone.png',
    title: 'Interview Scheduler',
    info: 'Worked with a team to develop a Project Charter, identify use cases, develop a Use Case Diagram, Use Case Desrciptions, Process Models, Entity Relationship Diagram, Class Diagram, and System Sequence Diagrams based on a case study.',
    info2: '',
    url: 'https://drive.google.com/file/d/1h8vkAEpqPQfB__S0rhH99FDCck06DpMo/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'expresstax.png',
    title: 'Jungle',
    info: 'I am currently in the middle of reconstructing a website for Express Tax and Bookkeeping services. They are a small business tax firm based in Mississauga, ON.',
    info2: '',
    url: 'http://www.xpresstax.ca',
  },
  {
    id: nanoid(),
    img: 'expresstax.png',
    title: 'Cafe Order-Pickup App',
    info: 'I am currently in the middle of reconstructing a website for Express Tax and Bookkeeping services. They are a small business tax firm based in Mississauga, ON.',
    info2: '',
    url: 'http://www.xpresstax.ca',
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
