import { Video } from './types';

export const VIDEOS: Video[] = [
  
  {
	  id: 8, // El siguiente número después del último video que tengas
	  title: 'Campaña Publicitaria IA',
	  description: 'Spot realizado con inteligencia artificial para la campaña de publicidad de la Escuela Creativa. El video utiliza generación de imágenes y edición avanzada para transmitir el valor de la innovación educativa.',
	  thumbnailUrl: '/videos/escuela-ia-thumb.webp',    // Pon aquí la ruta a tu thumbnail
	  videoUrl: '/videos/escuela-ia.webm',              // Pon aquí la ruta al video .webm
	  year: '2025',
	  role: 'Director IA & Editor',
	  tools: ['Veo3', 'Premiere Pro', 'Stable Diffusion'],
	  category: 'Publicidad',
	},
  {
    id: 1,
    title: 'Poesía Visual Experimental',
    description: `Pieza audiovisual experimental que fusiona luz, imagen y movimiento. Este videopoema explora el lenguaje visual a través de tipografía cinética, texturas orgánicas y metáforas visuales, creando una narrativa sensorial que trasciende lo literal. Un trabajo personal que refleja mi interés en las formas híbridas de expresión audiovisual contemporánea.`,
    thumbnailUrl: '/videos/haiku.webp',
    videoUrl: '/videos/haiku.webm',
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
    videoUrl: '/videos/fashion-film.webm',
    year: '2023',
    role: 'Director & Editor',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    category: 'Cinematografía'
  },
  {
    id: 3,
    title: 'Corto editado sin guion',
    description: 'Ejercicio de edición narrativa trabajando con material existente sin guion previo. Desafío de construir una historia coherente y emotiva a través del montaje y la selección de tomas.',
    thumbnailUrl: '/videos/cortosinguion.webp',
    videoUrl: '/videos/corto-sin-guion.webm',
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
    videoUrl: '/videos/logo-ae.webm',
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
    'Edición Multicam',
    'Realización Broadcast',
    'DIT Workflows',
    'Operador Cámara',
    'Premiere Pro',
    'DaVinci Resolve'
  ],
  social: {
    email: 'nahuelgranollers@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nahuelgranollers',
  }
};

export const SERVICES = [
  {
    title: 'Edición de Video',
    description: 'Premiere Pro, DaVinci Resolve, After Effects. Montaje profesional multicámara y narrativa visual.',
    icon: '✂️'
  },
  {
    title: 'Dirección',
    description: 'Canon EOS, BlackMagic, ARRI. Dirección creativa, storyboarding y producción de contenido narrativo.',
    icon: '🎬'
  },
  {
    title: 'Realización',
    description: 'vMix, OBS, Switchers profesionales. Dirección técnica en directo y streaming multicámara.',
    icon: '📡'
  },
  {
    title: 'Operador Cámara',
    description: 'Sony, Panasonic, Canon, RED. Operación multicámara profesional y manejo de ópticas cine.',
    icon: '🎥'
  },
  {
    title: 'DigiTech',
    description: 'Capture One, Lightroom, DIT workflows. Gestión técnica digital en set y backup seguro.',
    icon: '💻'
  }
];

