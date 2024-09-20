import seniorityPotati from '../../assets/seniorityPotati.png';
import horizontesPortatil from '../../assets/horizontesPortatil.png';

import html from '../../assets/herramientas/html5.svg';
import css from '../../assets/herramientas/Css.svg';
import javascript from '../../assets/herramientas/javascript.svg';

import react from '../../assets/herramientas/react.svg';
import vite from '../../assets/herramientas/vitejs.svg';

import express from '../../assets/herramientas/Express.js_light.svg';
import nodejs from '../../assets/herramientas/nodejs.svg';
import mongo from '../../assets/herramientas/mongodb.svg';

const trabajos = [
    {
        proyecto: "1",
        nombre: "Trebbol",
        img: seniorityPotati,
        descripcion: `Proyecto de Full Stack en equipo multidisciplinario. Este proyecto fue un desafío propuesto por la empresa Seniority.IA, con dos objetivos principales:

1. Diseñar un Sistema de Selección para el Programa Playbook Silver Economy, que ayude a las personas interesadas en nuestra formación a determinar el bloque del programa más adecuado para ellas.
2. Desarrollar una solución integral que ofrezca asistencia técnica especializada en UX (experiencia de usuario) adaptada a las necesidades de las personas mayores. Esto proporcionará a empresas y emprendedores las herramientas necesarias para seleccionar formación en UX amigable para personas mayores (Senior-Friendly) y les permitirá contratar servicios de asistencia técnica para proyectos enfocados en la Silver Economy.`,
        herramientas: [html, css, javascript, react, vite, express, nodejs, mongo],
        github: "https://github.com/Begofv/Desafio",
        link: "https://seniority.ia/"
    },
    {
        proyecto: "2",
        nombre: "Horizontes Lejanos",
        img: horizontesPortatil,
        descripcion: `Horizontes Lejanos es una página web de viajes creada en un proyecto intensivo de dos semanas por un equipo de cuatro personas. Esta aplicación ofrece a los usuarios la posibilidad de explorar y reservar destinos turísticos de manera intuitiva y eficiente, así como marcar sus viajes favoritos para valorarlos en el futuro.

El proyecto está estructurado en dos partes principales: el cliente (frontend) y el servidor (backend), lo que garantiza una experiencia de usuario fluida y una gestión eficiente de los datos.`,
        herramientas: [html, css, javascript, react, vite, express, nodejs, mongo],
        github: "https://github.com/Begofv/horizontes_lejanos",
        link: "https://horizonteslejanos.ia/"
    },
];

export default trabajos;
