// Contenido del CV, separado de la presentación (src/pages/index.astro)
// para facilitar el mantenimiento — parte del proceso de refactorización.

export interface Experiencia {
  fecha: string;
  empresa: string;
  rol: string;
  descripcion: string;
  featured?: boolean;
}

export const experiencia: Experiencia[] = [
  {
    fecha: "Sep 2025 — julio 2026",
    empresa: "KN AGENCY",
    rol: "Editor Freelancer",
    descripcion:
      "Editor de video para contenido CCV enfocado en redes sociales. Producción de piezas audiovisuales optimizadas para el consumo digital en distintas plataformas.",
    featured: true,
  },
  {
    fecha: "Sep 2023 — julio 2024",
    empresa: "EL LABORATORIO",
    rol: "Editor Freelancer",
    descripcion:
      "Editor de video para producciones largas de YouTube y contenido CCV para creadores digitales. Gestión editorial del ritmo narrativo y la identidad visual.",
  },
  {
    fecha: "Ene 2019 — Ene 2024",
    empresa: "CONTRAPORTADA",
    rol: "Co-Creador · Comunicación Alternativa",
    descripcion:
      "Generador de contenidos para redes sociales. Co-creador de la línea gráfica del colectivo, edición de video y animación de piezas de comunicación alternativa y social.",
  },
  {
    fecha: "Feb 2022 — Jul 2022",
    empresa: "FUNDACIÓN PROBONO",
    rol: "Comunicador Audiovisual",
    descripcion:
      "Pre, pro y post producción de productos audiovisuales para redes sociales. Gestión integral del contenido digital de la fundación.",
  },
  {
    fecha: "Nov 2022 — Dic 2022",
    empresa: "ASERCOMUNITARIA",
    rol: "Comunicador Audiovisual",
    descripcion:
      "Camarógrafo para circuitos cerrados de televisión (streaming) y producción/edición de video para las diferentes comunas de Medellín.",
  },
  {
    fecha: "Ago 2019 — Oct 2019",
    empresa: "ALCALDÍA ENVIGADO",
    rol: "Editor & Animador · Campaña",
    descripcion:
      "Acompañamiento editorial para la campaña del candidato Andrés Torres. Edición y animación de productos para múltiples redes sociales.",
  },
  {
    fecha: "Ene 2018 — Ene 2019",
    empresa: "BELIVE PRODUCCIONES",
    rol: "Asistente de Producción",
    descripcion:
      "Camarógrafo y despliegue de logística para circuito cerrado de televisión y eventos en streaming.",
  },
  {
    fecha: "Feb 2017 — Ago 2017",
    empresa: "UNIVERSIDAD EAFIT",
    rol: "Asistente · Centro Multimedial",
    descripcion:
      "Camarógrafo, asistente de producción, editor, facilitador de equipos y acompañamiento a estudiantes en el centro multimedial universitario.",
  },
];

export interface Educacion {
  anio: string;
  titulo: string;
  institucion: string;
}

export const educacion: Educacion[] = [
  {
    anio: "2018 — 2022",
    titulo: "Comunicación Audiovisual",
    institucion: "Politécnico Colombiano Jaime Isaza Cadavid",
  },
  {
    anio: "2012 — 2018",
    titulo: "Tecnología en Producción de Televisión",
    institucion: "Politécnico Colombiano Jaime Isaza Cadavid",
  },
  {
    anio: "2011",
    titulo: "Técnica en Manejo de Equipos de Audio y Video",
    institucion: "SENA",
  },
];

export interface GrupoHabilidades {
  titulo: string;
  items: string[];
}

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: "Edición & Post",
    items: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "CapCut",
      "Motion Graphics",
      "Color Grading",
    ],
  },
  {
    titulo: "Diseño & Gráfica",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Línea Gráfica",
      "Identidad Visual",
      "Animación 2D",
    ],
  },
  {
    titulo: "Producción",
    items: [
      "Producción Audiovisual",
      "Camarografía",
      "Streaming / CCV",
      "Contenido Social Media",
      "YouTube / Long-form",
    ],
  },
];

export const contacto = {
  email: "davidlop717@gmail.com",
  telefono: "300 419 7679",
  telefonoHref: "+573004197679",
  behance: "https://www.behance.net/davidlopera4",
};
