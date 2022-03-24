import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Teo González Calzada | thblckjkr.tk', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer', // e.g: Welcome to my website
};

export const navbarData = {
  language: 'en',
  address: 'teogonzalez.dev',
};

// HERO DATA
export const heroData = {
  title: 'Teo González Calzada',
  technologies: ['Web', 'Scripts', 'Pipelines', 'Backend', 'Frontend'],

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
  title: 'About me',
  img: 'profile.jpg',
  paragraphOne:
    'Developer with experience in multiple languages, backend, frontend, desktop development, server maintenance, networking, etc',
  paragraphTwo: 'I love music, video games and anime.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio/POS.png',
    title: 'Custom POS',
    info:
      "Custom POS, made with Flutter, that connects to a device that has it's own custom local wifi network.",
    info2: "The extension had a good impact, almost 700 unique users on it's first week.",
    // url:'',
  },
  {
    id: nanoid(),
    img: 'portfolio/insomnia.png',
    title: 'Insomnia Gitlab extension',
    info:
      "A extension for insomnia that let's you store your API requests on a gist on github or gitlab. Providing a simple and easy way to share your API requests, for free.",
    info2:
      'This extension started as a fork of a similar extension that worked only with github, and rewrote it to work with gitlab and support multiple provviders. It was one of the most downloaded extensions for about a year.',
    url: 'https://insomnia.rest/plugins/insomnia-plugin-sync-gist-multiprovider',
    repo: 'https://github.com/thblckjkr/insomnia-plugin-sync-gist-multiprovider', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio/extension.png',
    title: 'UACJ assignments',
    info:
      'A little chrome extension to make possible the automatic schedule for academics. The extension was made trying to keep in mind simplicity and cleaness.',
    info2: "The extension had a good impact, almost 700 unique users on it's first week.",
    url:
      'https://chrome.google.com/webstore/detail/uajrz-schedule/hjfghlbhpighbjohdmhinpoehnoipdag',
    repo: 'https://github.com/thblckjkr/UAJRZ-schedule', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio/jrzrobot.png',
    title: 'Juarez Robot Challenge',
    info:
      'Webpage created for the Juarez Robot Challenge organization, that took place at the city of Juarez in 2019.',
    info2:
      'It inculded an admin page with information of the signups, and other tools (Site is down, link to archive.org)',
    url: 'https://web.archive.org/web/20190427025406/http://juarezrobotchallenge.com/',
    // repo: '', // if no repo, the button will not show up
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
      "This project was created to decrease the response time between areas. The chat doesn't save the conversations on a database, but every login and interaction metadata is saved on a log.",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Contact Me',
  cta: '¿Would you like to contact me?',
  btn: "Let's talk!",
  email: 'contact@thblckjkr.tk',
};

// FOOTER DATA
export const footerData = {};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
