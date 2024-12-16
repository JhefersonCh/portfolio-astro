import Angular from '../components/icons/Angular.astro';
import AngularMat from '../components/icons/AngularMat.astro';
import Bootstrap from '../components/icons/Bootstrap.astro';
import Express from '../components/icons/Express.astro';
import Nest from '../components/icons/Nest.astro';
import React from '../components/icons/React.astro';
import Tailwind from '../components/icons/Tailwind.astro';

export const TAGS = {
  ANGULAR: {
    name: 'ANGULAR',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: Angular,
  },
  NESTJS: {
    name: 'NESTJS',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: Nest,
  },
  ANGULAR_MAT: {
    name: 'ANGULAR MATERIAL',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: AngularMat,
  },
  BOOTSTRAP: {
    name: 'BOOTSTRAP',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: Bootstrap,
  },
  REACT: {
    name: 'REACT',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: React,
  },
  EXPRESS: {
    name: 'EXPRESS',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: Express,
  },
  TAILWIND: {
    name: 'TAILWINDCSS',
    class: 'bg-black text-white hover:bg-white/15 transition',
    icon: Tailwind,
  },
};

export const PROJECTS = [
  {
    id: 1,
    title: 'ProjectZen',
    gallery: [
      {
        src: '/projects/projectzen.jpg',
        alt: 'ProjectZen1',
      },
    ],
    completeDescription:
      'ProjectZen es un proyecto de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas. También permite a los usuarios crear y editar proyectos, y asignar tareas a los miembros del equipo. \n ProjectZen nació como un proyecto universitario, fue desarrollado con Angular, NestJs, TypeOrm, Bootstrap y TypeScript durante aproximadamente 3 meses, y se desplegó en Netlify.',
    description:
      'ProjectZen es un proyecto de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas. También permite a los usuarios crear y editar proyectos, y asignar tareas a los miembros del equipo.',
    link: 'https://project-zen.netlify.app',
    github: 'https://github.com/JhefersonCh/frontend-project-zen',
    img: '/projects/projectzen.jpg',
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 2,
    title: 'NotesHub',
    gallery: [
      {
        src: '/projects/noteshub.webp',
        alt: 'NotesHub1',
      },
      {
        src: '/projects/noteshub2.webp',
        alt: 'NotesHub2',
      },
      {
        src: '/projects/noteshub3.webp',
        alt: 'NotesHub3',
      },
      {
        src: '/projects/noteshub4.webp',
        alt: 'NotesHub4',
      },
    ],
    completeDescription:
      'NotesHub es un proyecto para la gestión de notas personales, donde se pueden crear, editar y eliminar notas. Manejando el estado, prioridad, categorías y más características. \n \n NotesHub fue desarrollado con React, Express, Sequalize, Tailwind y JavaScript durante aproximadamente 3 semanas, para la Universidad, y se desplegó en Vercel.',
    description:
      'NotesHub es un proyecto para la gestión de notas personales, donde se pueden crear, editar y eliminar notas. Manejando el estado, prioridad, categorías y más características.',
    link: 'https://mynotehub.vercel.app/',
    img: '/projects/noteshub.webp',
    github: 'https://github.com/JhefersonCh/notes_app_frontend',
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND],
  },
  {
    id: 3,
    title: 'PreUNAB',
    gallery: [
      {
        src: '/projects/preunab.webp',
        alt: 'Preunab1',
      },
    ],
    description:
      'PreUNAB es un proyecto universitario que permite a los estudiantes de la UNAB realizar sus ensayos, prácticas y otros. \n Los docentes de la UNAB pueden acceder a este proyecto para monitorear el avance de sus estudiantes.',
    link: 'https://preunab-dev.unab.cl/',
    img: '/projects/preunab.webp',
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 4,
    title: 'iKARO',
    gallery: [
      {
        src: '/projects/ikaro.webp',
        alt: 'iKaro1',
      },
    ],
    description:
      'iKaro es un proyecto para la aclaldía de Sibundoy, implementada para el manejo de los documentos de contratación de la alcaldía.',
    link: 'https://clm.test.kamilainnovation.co/',
    img: '/projects/ikaro.webp',
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
];
