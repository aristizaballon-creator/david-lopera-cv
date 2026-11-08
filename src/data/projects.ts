export type VideoTipo = "horizontal" | "vertical";

export interface Video {
  id: string;
  titulo: string;
  tipo: VideoTipo;
}

export interface Proyecto {
  id: string;
  titulo: string;
  rol: string;
  descripcion: string;
  videos: Video[];
}

export function getYouTubeId(input: string): string {
  const regExp = /^.*(youtu\.be\/|shorts\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = input.match(regExp);
  return match && match[2].length === 11 ? match[2] : input;
}

export const proyectos: Proyecto[] = [
  {
    id: "kn-agency",
    titulo: "KN AGENCY",
    rol: "Video Promocional",
    descripcion:
      "Edición de video para contenido CCV enfocado en redes sociales. Producción de piezas audiovisuales optimizadas para el consumo digital.",
    videos: [
      { id: "CdoO5kS8W7M", titulo: "Short 1", tipo: "vertical" },
      { id: "ZrwN9PEf_Jk", titulo: "Short 2", tipo: "vertical" },
      { id: "zmRlM_HHXLY", titulo: "Short 3", tipo: "vertical" },
      { id: "E1BGZHQQCMs", titulo: "Short 4", tipo: "vertical" },
      { id: "aYY0KzpH8Wo", titulo: "Short 5", tipo: "vertical" },
      { id: "xOg-tXg0Fjo", titulo: "Short 6", tipo: "vertical" },
      { id: "QamJF_BcFnY", titulo: "Short 7", tipo: "vertical" },
      { id: "l98rv5m4DR0", titulo: "Short 8", tipo: "vertical" },
      { id: "0Twjo2yOWhE", titulo: "Short 9", tipo: "vertical" },
      { id: "jB1CIm_ijwM", titulo: "Short 10", tipo: "vertical" },
      { id: "KOmkOd4NM_Q", titulo: "Short 11", tipo: "vertical" },
    ],
  },
  {
    id: "bulffy",
    titulo: "BULFFY",
    rol: "Contenido Audiovisual",
    descripcion:
      "Producción y edición de contenido audiovisual para redes sociales, adaptando formatos horizontales y verticales.",
    videos: [
      { id: "mES3kbwu38g", titulo: "Video Principal", tipo: "horizontal" },
      { id: "J5VbucNFGpA", titulo: "Short 1", tipo: "vertical" },
      { id: "MmeT5d4de54", titulo: "Short 2", tipo: "vertical" },
      { id: "NBYml9EJahs", titulo: "Short 3", tipo: "vertical" },
      { id: "O5vFFXMMNhM", titulo: "Short 4", tipo: "vertical" },
      { id: "PzHjp4eum6Y", titulo: "Short 5", tipo: "vertical" },
      { id: "TQRhboFILI8", titulo: "Short 6", tipo: "vertical" },
      { id: "aZyR5vU9W0Q", titulo: "Short 7", tipo: "vertical" },
      { id: "quao5CKbfxg", titulo: "Short 8", tipo: "vertical" },
      { id: "r5ZE49C4--0", titulo: "Short 9", tipo: "vertical" },
      { id: "U3r8SEYf_eI", titulo: "Short 10", tipo: "vertical" },
    ],
  },
  {
    id: "el-laboratorio",
    titulo: "EL LABORATORIO",
    rol: "Contenido Digital",
    descripcion:
      "Editor de video para producciones largas de YouTube y contenido CCV para creadores digitales.",
    videos: [
      { id: "4HCKfANQI6c", titulo: "Short 1", tipo: "vertical" },
      { id: "CVwhGitdhGU", titulo: "Short 2", tipo: "vertical" },
      { id: "F-_CLRith0k", titulo: "Short 3", tipo: "vertical" },
      { id: "OWI6NhANFWw", titulo: "Short 4", tipo: "vertical" },
      { id: "dDmHF-6KrVY", titulo: "Short 5", tipo: "vertical" },
      { id: "w1wZbvfuNDM", titulo: "Short 6", tipo: "vertical" },
      { id: "wZT5zbZcj9o", titulo: "Short 7", tipo: "vertical" },
      { id: "KBdZAv-mQYE", titulo: "Short 8", tipo: "vertical" },
      { id: "mBG3sV-_zJ0", titulo: "Short 9", tipo: "vertical" },
      { id: "uAoDblsycuk", titulo: "Short 10", tipo: "vertical" },
      { id: "HQZ6K6CE7kA", titulo: "Horizontal 1", tipo: "horizontal" },
      { id: "vhpR2Pnrteo", titulo: "Horizontal 2", tipo: "horizontal" },
      { id: "XZ-hZGJPR00", titulo: "Horizontal 3", tipo: "horizontal" },
      { id: "3vYYBgGJtiA", titulo: "Horizontal 4", tipo: "horizontal" },
    ],
  },

  {
    id: "pp-y-ppl",
    titulo: "PP Y PPL",
    rol: "Camarógrafo y Editor de Video",
    descripcion: "Camarografía para circuito cerrado de televisión y streaming",
    videos: [
      { id: "QVTDZmBsj3U", titulo: "Horizontal 1", tipo: "horizontal" },
      { id: "kXeZGzhcEbc", titulo: "Horizontal 2", tipo: "horizontal" },
      { id: "zq_7LeH5YeI", titulo: "Horizontal 3", tipo: "horizontal" },
      { id: "Ubu23vyGZ6M", titulo: "Horizontal 4", tipo: "horizontal" },
      { id: "tcbxuuEnzic", titulo: "Horizontal 5", tipo: "horizontal" },
    ],
  },
  {
    id: "freelo",
    titulo: "FREELO",
    rol: "Realizador de contenidos audiovisuales",
    descripcion: "Creación de contenidos audiovisuales para plataformas y redes sociales",
    videos: [
      { id: "W4gb4ESJvyw", titulo: "Short 1", tipo: "vertical" },
      { id: "b_RM3xvjKq8", titulo: "Short 2", tipo: "vertical" },
      { id: "TZ2JmUfhDOo", titulo: "Short 3", tipo: "vertical" },
      { id: "mNaI7ZLdQmU", titulo: "Short 4", tipo: "vertical" },
      { id: "r51mHFR6LLM", titulo: "Short 5", tipo: "vertical" },
      { id: "ywwusWKZGkI", titulo: "Short 6", tipo: "vertical" },
      { id: "bWqUXSuTfDQ", titulo: "Short 7", tipo: "vertical" },
      { id: "yOWWmwc_ohE", titulo: "Short 8", tipo: "vertical" },
      { id: "mWExqra81kQ", titulo: "Short 9", tipo: "vertical" },
      { id: "vdQc2elNLEg", titulo: "Short 10", tipo: "vertical" },
      { id: "lwIFo09ssQs", titulo: "Short 11", tipo: "vertical" },
      { id: "uTQUKmspfAA", titulo: "Short 12", tipo: "vertical" },
      { id: "V6p6XENF20M", titulo: "Short 13", tipo: "vertical" },
      { id: "50OPG4zTHRE", titulo: "Short 14", tipo: "vertical" },
      { id: "_rPXSjesnxw", titulo: "Short 15", tipo: "vertical" },
      { id: "GVzmhnjiclU", titulo: "Short 16", tipo: "vertical" },
      { id: "ANbexiqxFTw", titulo: "Short 17", tipo: "vertical" },
      { id: "G63sj-Xsbh8", titulo: "Short 18", tipo: "vertical" },
    ],
  },
];
