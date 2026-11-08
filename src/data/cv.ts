// Contenido del CV en español e inglés, separado de la presentación
import type { Texto } from '../i18n';

export interface Experiencia {
  fecha: Texto;
  empresa: string;
  rol: Texto;
  descripcion: Texto;
  featured?: boolean;
}

export const experiencia: Experiencia[] = [
  {
    fecha: { es: 'Sep 2025 — Jul 2026', en: 'Sep 2025 — Jul 2026' },
    empresa: 'KN AGENCY',
    rol: { es: 'Editor Freelancer', en: 'Freelance Editor' },
    descripcion: {
      es: 'Editor de video para contenido CCV enfocado en redes sociales. Producción de piezas audiovisuales optimizadas para el consumo digital en distintas plataformas.',
      en: 'Video editor for short-form vertical content (CCV) focused on social media. Production of audiovisual pieces optimized for digital consumption across platforms.',
    },
    featured: true,
  },
  {
    fecha: { es: 'Sep 2023 — Jul 2024', en: 'Sep 2023 — Jul 2024' },
    empresa: 'EL LABORATORIO',
    rol: { es: 'Editor Freelancer', en: 'Freelance Editor' },
    descripcion: {
      es: 'Editor de video para producciones largas de YouTube y contenido CCV para creadores digitales. Gestión editorial del ritmo narrativo y la identidad visual.',
      en: 'Video editor for long-form YouTube productions and short-form content for digital creators. Editorial management of narrative pacing and visual identity.',
    },
  },
  {
    fecha: { es: 'Ene 2019 — Ene 2024', en: 'Jan 2019 — Jan 2024' },
    empresa: 'CONTRAPORTADA',
    rol: { es: 'Co-Creador · Comunicación Alternativa', en: 'Co-Creator · Alternative Media' },
    descripcion: {
      es: 'Generador de contenidos para redes sociales. Co-creador de la línea gráfica del colectivo, edición de video y animación de piezas de comunicación alternativa y social.',
      en: "Social media content creator. Co-created the collective's visual identity, and handled video editing and animation for alternative and social communication pieces.",
    },
  },
  {
    fecha: { es: 'Feb 2022 — Jul 2022', en: 'Feb 2022 — Jul 2022' },
    empresa: 'FUNDACIÓN PROBONO',
    rol: { es: 'Comunicador Audiovisual', en: 'Audiovisual Communicator' },
    descripcion: {
      es: 'Pre, pro y post producción de productos audiovisuales para redes sociales. Gestión integral del contenido digital de la fundación.',
      en: "Pre-production, production and post-production of audiovisual content for social media. End-to-end management of the foundation's digital content.",
    },
  },
  {
    fecha: { es: 'Nov 2022 — Dic 2022', en: 'Nov 2022 — Dec 2022' },
    empresa: 'ASERCOMUNITARIA',
    rol: { es: 'Comunicador Audiovisual', en: 'Audiovisual Communicator' },
    descripcion: {
      es: 'Camarógrafo para circuitos cerrados de televisión (streaming) y producción/edición de video para las diferentes comunas de Medellín.',
      en: "Camera operator for closed-circuit television (streaming) and video production/editing for Medellín's different districts.",
    },
  },
  {
    fecha: { es: 'Ene 2018 — Ene 2019', en: 'Jan 2018 — Jan 2019' },
    empresa: 'BELIVE PRODUCCIONES',
    rol: { es: 'Asistente de Producción', en: 'Production Assistant' },
    descripcion: {
      es: 'Camarógrafo y despliegue de logística para circuito cerrado de televisión y eventos en streaming.',
      en: 'Camera operator and logistics deployment for closed-circuit television and live-streamed events.',
    },
  },
  {
    fecha: { es: 'Feb 2017 — Ago 2017', en: 'Feb 2017 — Aug 2017' },
    empresa: 'UNIVERSIDAD EAFIT',
    rol: { es: 'Asistente · Centro Multimedial', en: 'Assistant · Multimedia Center' },
    descripcion: {
      es: 'Camarógrafo, asistente de producción, editor, facilitador de equipos y acompañamiento a estudiantes en el centro multimedial universitario.',
      en: "Camera operator, production assistant, editor, equipment facilitator and student support at the university's multimedia center.",
    },
  },
];

export interface Educacion {
  anio: string;
  titulo: Texto;
  institucion: string;
}

export const educacion: Educacion[] = [
  {
    anio: '2018 — 2022',
    titulo: { es: 'Comunicación Audiovisual', en: 'Audiovisual Communication' },
    institucion: 'Politécnico Colombiano Jaime Isaza Cadavid',
  },
  {
    anio: '2012 — 2018',
    titulo: { es: 'Tecnología en Producción de Televisión', en: 'Technology Degree in Television Production' },
    institucion: 'Politécnico Colombiano Jaime Isaza Cadavid',
  },
  {
    anio: '2011',
    titulo: { es: 'Técnica en Manejo de Equipos de Audio y Video', en: 'Technical Degree in Audio and Video Equipment Operation' },
    institucion: 'SENA',
  },
];

export interface GrupoHabilidades {
  titulo: Texto;
  items: Texto[];
}

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: { es: 'Edición & Post', en: 'Editing & Post' },
    items: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut', 'Motion Graphics', 'Color Grading'],
  },
  {
    titulo: { es: 'Diseño & Gráfica', en: 'Design & Graphics' },
    items: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      { es: 'Línea Gráfica', en: 'Graphic Style' },
      { es: 'Identidad Visual', en: 'Visual Identity' },
      { es: 'Animación 2D', en: '2D Animation' },
    ],
  },
  {
    titulo: { es: 'Producción', en: 'Production' },
    items: [
      { es: 'Producción Audiovisual', en: 'Audiovisual Production' },
      { es: 'Camarografía', en: 'Camera Operation' },
      'Streaming / CCV',
      { es: 'Contenido Social Media', en: 'Social Media Content' },
      'YouTube / Long-form',
    ],
  },
];

export const contacto = {
  email: 'davidlop717@gmail.com',
  telefono: '300 419 7679',
  telefonoHref: '+573004197679',
  behance: 'https://www.behance.net/davidlopera4',
};
