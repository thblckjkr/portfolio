import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Teo González Calzada | thblckjkr.tk', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Desarollador', // e.g: Welcome to my website
};

export const navbarData = {
  name: 'thblckjkr.dev_',
};

// HERO DATA
export const heroData = {
  title: 'Teo González Calzada',
  name: '',
  subtitle: '',
  cta: '',

  technologies: ['Web', 'de Scripts', 'Backend', 'Frontend'],

  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: 'https://twitter.com/thblckjkr',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thblckjkr/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thblckjkr/',
    },
  ],
};

// ABOUT DATA
export const aboutData = {
  title: 'Acerca de mí',
  img: 'profile.jpg',
  paragraphOne:
    'Desarrollador con experiencia en múltiples lenguajes, backend, frontend, desarrollo de escritorio, mantenimiento de servidores, networking, etc',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio/extension.png',
    title: 'Assginments assignment',
    info:
      'A little chrome extension to make possible the automatic schedule for academics. tring to mantain simple things simple. The extension was made trying to keep in mind simplicity and cleaness.',
    info2: "The extension had a good impact, almost 700 unique users on it's first week.",
    url:
      'https://chrome.google.com/webstore/detail/uajrz-schedule/hjfghlbhpighbjohdmhinpoehnoipdag',
    repo: 'https://github.com/thblckjkr/UAJRZ-schedule', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio/servers.png',
    title: 'Servers Monitor',
    info:
      "This project only works with PHP and MySQL on the backend, and a little bit of HTML, Bootstrap and JQuery on the frontend. It's fully compatible with any linux distribution and only needs SSH access to the server. Also, it doesn't install anything on the servers.",
    info2:
      'The project is oriented to use on small environments, it only needs an Apache environment and access to the destination servers via SSH, it leaves a small footprint on the main server.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'portfolio/chat.png',
    title: 'Simple Chat',
    info:
      ' A real-time chat interface made with Socket.IO (based on NodeJS on the server side), and with material design by google on the front end. JQuery on the front-end for comunicate with the server and HTML5 on the base of the chat. Also the project was integrated with an old PHP-MySQL login of another system.',
    info2:
      "This project was created to decrease the response time between areas. The chat doesn't save the conversations on a database, but every login and interaction metadata its saved on logs.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Contacto',
  cta: '¿Te gustaría contactarme?',
  btn: '¡Hablemos!',
  email: 'thblckjkr@hotmail.com',
};

// FOOTER DATA
export const footerData = {};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
