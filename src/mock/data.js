import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Igor Guilherme Custodio', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Engenheiro da Computação, desenvolvedor web e iOS.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, eu sou o ',
  name: 'Igor Custodio',
  subtitle: 'Engenheiro da Computação, desenvolvedor web e iOS',
  cta: 'Conhecer mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: `Tenho ${(new Date()).getFullYear() - 1998} anos, formado em Engenharia da Computação, desenvolvedor há ${(new Date().getFullYear() - 2016)} anos.`,
  paragraphTwo: 'Possuo experiência atuando em diferentes tecnologias como sites (web) e aplicativos para iOS (iPhone), além de segmentos como bancários e serviços',
  paragraphThree: ' ',
  resume: null, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Banco Original',
    info: 'Carteiras Digitais - iOS',
    info2: 'Implementação da Carteira Digital Apple Wallet no app para iPhone do Banco Original em 2021.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Banco Original',
    info: 'Pix - iOS',
    info2: 'Implementação do Pix no app para iPhone do Banco Original em 2020.',
    url: 'https://original.com.br/pix',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Rentcars.com',
    info: 'Site - Vue.js, PHP com Symfony',
    info2: 'Atuação na equipe de produto que responsável pelo site e portal da Rentcars.com em 2019 e 2020.',
    url: 'http://rentcars.com.br',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Banco Bari',
    info: 'Internet Banking - Angular 7',
    info2: 'Desenvolvimento do site do Internet Banking do Banco Bari em 2019.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Banco RCI',
    info: 'Internet Banking - Angular 5',
    info2: 'Desenvolvimento do site do Internet Banking do Banco RCI em 2019.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Duopana (Squid)',
    info: 'Internet Banking - JavaScript e Webpack',
    info2: 'Duopana, agora Squid, é um gerenciador de comunidades e desenvolvi o site deles em 2019.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Unimed Uberaba',
    info: 'Portal - Angular 5',
    info2: 'Desenvolvimento do portal de contratação de plano da Unimed de Uberaba - MG em 2018 e 2019.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Experiências Anteriores',
    info: 'PHP, Swift e Java',
    info2: 'Minhas experiências anteriores se dão em projetos utilizando PHP nativo e com o framework Laravel, desenvolvimento de apps para iPhone utilizando Swift e suporte de sistema bancário em Java.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Gostaria de trabalhar comigo?',
  btn: 'Vamos conversar',
  email: 'igorgcustodio@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/igorgcustodio',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/igorgcustodio',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
