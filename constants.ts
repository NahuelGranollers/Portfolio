import { Video } from './types';

export const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'Poesía Visual Experimental - haiku',
    description: `Pieza audiovisual experimental que fusiona luz, imagen y movimiento. Este videopoema explora el lenguaje visual a través de tipografía cinética, texturas orgánicas y metáforas visuales, creando una narrativa sensorial que trasciende lo literal. Un trabajo personal que refleja mi interés en las formas híbridas de expresión audiovisual contemporánea.`,
    thumbnailUrl: '/videos/haiku.webp',  // ← Agregada barra inicial
    videoUrl: '/videos/haiku.webm',      // ← Agregada barra inicial
    year: '2023',
    role: 'Director Creativo & Editor',
    tools: ['Premiere Pro'],
    category: 'Arte Experimental'
  },
  {
    id: 2,
    title: 'Fashion Film',
    description: 'Cortometraje cinematográfico enfocado en moda. Dirección, cinematografía y edición completa, explorando la narrativa visual a través del estilo y la estética contemporánea.',
    thumbnailUrl: '/videos/fashionfilm.webp',
    videoUrl: '/videos/Fashion-Film.webm',
    year: '2023',
    role: 'Director & Editor',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    category: 'Cinematografía'
  },
  {
    id: 3,
    title: 'Corto con Material - sin guion',
    description: 'Ejercicio de edición narrativa trabajando con material existente sin guion previo. Desafío de construir una historia coherente y emotiva a través del montaje y la selección de tomas.',
    thumbnailUrl: '/videos/cortosinguion.webp',
    videoUrl: '/videos/Corto-Sin-Guion.webm',
    year: '2025',
    role: 'Editor',
    tools: ['Premiere Pro', 'Audition'],
    category: 'Edición'
  },
  {
    id: 4,
    title: 'Grabación y Edición de Cortometraje',
    description: `Trabajo de edición y cámara realizado en exteriores para un cortometraje de ficción. Participé durante la grabación en localización real, encargándome tanto de la captación de imagen como de la edición posterior en un entorno profesional. El video mostrado recoge únicamente algunos fragmentos seleccionados del corto completo por motivos de derechos y duración.`,
    thumbnailUrl: '/videos/corto-agnes-thumb.webp',
    videoUrl: '/videos/corto-agnes.webm',
    year: '2024',
    role: 'Editor y operador de cámara',
    tools: ['Premiere Pro', 'Canon EOS', 'DaVinci Resolve'],
    category: 'Cinematografía'
  },
  {
    id: 5,
    title: 'Codebreak - Juego Multijugador',
    description: 'Juego de lógica multijugador en tiempo real donde los jugadores deben descifrar códigos secretos.',
    thumbnailUrl: '/videos/codebreak.webp',
    videoUrl: '/videos/codebreak-demo.webm',
    year: '2025',
    role: 'Desarrollador Full Stack',
    tools: ['React', 'Node.js', 'Socket.io', 'TypeScript'],
    category: 'Desarrollo Web',
    externalLink: 'https://codebreak.onrender.com'
  },
  {
    id: 6,
    title: 'Pantallas en Resolume para betevé',
    description: 'Diseño integral de visuales dinámicas para el sistema Resolume de betevé, usadas en directo para anunciar invitados especiales y conciertos. Fue una propuesta creativa propia, explorando nuevas tendencias visuales (trending styles) e innovación en el flujo audiovisual del plató para televisión en vivo. Mezclé tipografías animadas, colores en tendencia y layouts adaptativos para dar un look fresco y único al programa.',
    thumbnailUrl: '/videos/resolume-beteve-thumb.webp',
    videoUrl: '/videos/pantallas-invitados.webm',
    year: '2025',
    role: 'Motion Designer & Creativo',
    tools: ['Resolume', 'After Effects', 'Photoshop'],
    category: 'Live Visuals',
    innovative: true
  },
  {
    id: 7,
    title: 'Logo Animado con AE',
    description: 'Animación de logotipo creada en After Effects utilizando principios de motion design. El proyecto explora transiciones fluidas y efectos visuales modernos para dar vida a la identidad de marca.',
    thumbnailUrl: '/videos/logoae.webp',
    videoUrl: '/videos/LOGO-AE.webm',
    year: '2024',
    role: 'Motion Designer',
    tools: ['After Effects', 'Illustrator'],
    category: 'Motion Graphics'
  },
];

// Información personal para las secciones About y Contact
export const PERSONAL_INFO = {
  name: 'Nahuel Granollers',
  title: 'Director Audiovisual & Técnico de Realización',
  tagline: 'Creando historias visuales que conectan y emocionan',
  about: {
    intro: 'Soy un creador audiovisual apasionado por contar historias a través del video y la animación. Mi trabajo combina técnica cinematográfica con diseño en movimiento para crear piezas visuales que cautivan y comunican.',
    experience: 'Con experiencia en dirección, edición y motion graphics, trabajo en proyectos que van desde fashion films hasta animación de interfaces. Me especializo en transformar conceptos abstractos en experiencias visuales memorables.',
    approach: 'Mi enfoque es colaborativo y orientado a resultados. Creo en la importancia de entender la visión del cliente y traducirla en contenido audiovisual que supere expectativas.'
  },
  skills: [
    'Edición de Video',
    'Motion Graphics',
    'Dirección Cinematográfica',
    'After Effects',
    'Premiere Pro',
    'DaVinci Resolve',
    'Color Grading',
    'Diseño de UI/UX',
    'Storytelling Visual'
  ],
  social: {
    email: 'nahuelgranollers@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nahuelgranollers',
  }
};

export const SERVICES = [
  {
    title: 'Edición de Video',
    description: 'Montaje profesional de material audiovisual para marcas, eventos y contenido digital.',
    icon: '🎬'
  },
  {
    title: 'Dirección Cinematográfica',
    description: 'Dirección y producción de cortometrajes, fashion films y contenido narrativo.',
    icon: '🎥'
  },
  {
    title: 'Color Grading',
    description: 'Corrección y gradación de color profesional para darle a tu proyecto el look perfecto.',
    icon: '🎨'
  }
];
