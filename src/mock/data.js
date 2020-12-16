import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yusuf Abdulla | Aspiring Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My Name Is ',
  name: 'Yusuf Abdulla',
  subtitle: "I'm An Aspriring Web Developer",
  cta: 'More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi! I'm a Business Technology Student at Ryerson University with a passion for Web Development.",
  paragraphTwo: "I enjoy taking on challenges and creating things on the internet, whether that be websites, applications or anything. My goal is to further my learning and to build high-performance and asthetically-appealing products that others can enjoy.",
  paragraphThree: "Some of my favourite things to do when I'm not working on a project are photography, basketball, hiking, and binge-watching movies!",
  resume: 'https://drive.google.com/file/d/11lKvyZi4vuU-AP_LWuVXTnM2PoUuPsGX/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'expresstax.png',
    title: 'Express Tax and Bookkeeping Services',
    info: ' I am currently in the middle of reconstructing a website for Express Tax and Bookkeeping services. They are a small business tax firm based in Mississauga, ON.',
    info2: '',
    url: 'http://www.xpresstax.ca',
  },
  {
    id: nanoid(),
    img: 'capstone1.png',
    title: 'Capstone Interim Report',
    info: ' Worked with a team to develop a Project Charter, identify use cases, develop a Use Case Diagram, Use Case Desrciptions, Process Models, Entity Relationship Diagram, Class Diagram, and System Sequence Diagrams based on a case study.',
    info2: '',
    url: 'https://drive.google.com/file/d/1mXG7PFo2DQV7TLkzu2LVC83ZXjKipnoU/view?usp=sharing',
  },
  {
    id: nanoid(),
    img: 'workinprogress.jpg',
    title: 'Elite Paintings',
    info: 'I am currently developing a website for an interior painting small business based in Mississauga, ON. This project is still under progress',
    info2: '',
    url: '',
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
