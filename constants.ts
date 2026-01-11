
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const USER_INFO = {
  name: "Alejandro Flores Carranza",
  role: {
    en: "Systems Engineer",
    es: "Ingeniero en Sistemas Computacionales"
  },
  email: "alejandrofc.jr@gmail.com",
  phone: "55-84-41-38-87",
  location: "Atizapán de Zaragoza, México",
  linkedin: "https://www.linkedin.com/in/alejandro-flores-carranza-b78426215/",
  github: "https://github.com/ByFlowersty",
  profilePhoto: "https://lh3.googleusercontent.com/pw/AP1GczMy5B5TPF7iRIJwJNGobMAp5Ft3oeuYJQHkuWogz2US5U1983od2BzsJUL70u1GNXcwYBMgIKTOPm56GQCz25DaTAK87AoXBDJxP9QCuOPokqxyvLWUD_epE6ngk-YG9Uwcgn8BPS7eQ5PhYYR0f8ecGQ=w622-h911-s-no-gm?authuser=0", // Reemplaza con tu foto real
  cvPreviewUrl: "https://drive.google.com/file/d/1fAkwYHE8AbgLkp8B6J2GgPirVoZTHSMg/preview",
  cvDownloadUrl: "https://drive.google.com/file/d/1fAkwYHE8AbgLkp8B6J2GgPirVoZTHSMg/view?usp=sharing"
};

export const PROJECTS_DATA: { [key: string]: { [lang: string]: ProjectItem } } = {
  "erebus": {
    en: {
      id: "erebus",
      title: "EREBUS (AI Core)",
      description: "AI vision and voice module for medication identification and safety guidance.",
      fullDescription: "EREBUS is a sophisticated AI engine integrated within the Carelux Point ecosystem. Designed as an accessibility and safety layer, it uses advanced Computer Vision to identify medication packaging in real-time. Once identified, the system utilizes Text-to-Speech (TTS) to provide audible guidance on dosage and critical warnings regarding potential adverse reactions.",
      tags: ["Artificial Intelligence", "Computer Vision", "TTS", "Healthcare Tech", "Safety"],
      image: "/images/projects/erebus_main.jpg",
      gallery: [
        "/images/projects/erebus_vision.jpg",
        "/images/projects/erebus_interface.jpg"
      ],
      impact: ["Enhanced medication safety for visually impaired users", "Instant detection of high-risk drug reactions", "Seamless integration with Carelux database", "Voice-guided patient empowerment"],
      techStack: ["Gemini API (Vision)", "Python", "TensorFlow", "React Native", "Web Speech API"]
    },
    es: {
      id: "erebus",
      title: "EREBUS (Core de IA)",
      description: "Módulo de visión artificial y voz para identificación de medicamentos y guía de seguridad.",
      fullDescription: "EREBUS es un motor de IA sofisticado integrado dentro del ecosistema de Carelux Point. Diseñado como una capa de accesibilidad y seguridad, utiliza Visión Artificial avanzada para identificar empaques de medicamentos en tiempo real a través de la cámara. Una vez identificado, el sistema utiliza síntesis de voz (TTS) para informar al usuario sobre el medicamento y alertar sobre posibles reacciones adversas.",
      tags: ["Inteligencia Artificial", "Visión Artificial", "TTS", "HealthTech", "Seguridad"],
      image: "/images/projects/erebus_main.jpg",
      gallery: [
        "/images/projects/erebus_vision.jpg",
        "/images/projects/erebus_interface.jpg"
      ],
      impact: ["Mejora en la seguridad de medicación para usuarios con discapacidad visual", "Detección instantánea de reacciones alérgicas de alto riesgo", "Integración fluida con la base de datos de Carelux", "Empoderamiento del paciente mediante guía por voz"],
      techStack: ["Gemini API (Vision)", "Python", "TensorFlow", "React Native", "Web Speech API"]
    }
  },
  "asistos": {
    en: {
      id: "asistos",
      title: "ASISTOS",
      description: "Platform for schools to manage attendance, tasks, and lesson planning.",
      fullDescription: "ASISTOS is a robust, tested, and refined platform specifically designed for educational institutions. It centralizes critical classroom management features like real-time attendance tracking, assignment distribution, and structured lesson planning.",
      tags: ["Education", "Management System", "SaaS", "Tested & Refined"],
      image: "/images/projects/asistos_main.jpg",
      gallery: [
        "/images/projects/asistos_dashboard.jpg",
        "/images/projects/asistos_attendance.jpg"
      ],
      impact: ["Centralized management of 500+ students", "Reduced teacher administrative time by 30%", "Improved planning accuracy"],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    es: {
      id: "asistos",
      title: "ASISTOS",
      description: "Plataforma escolar para gestión de asistencia, tareas y planeación de clases.",
      fullDescription: "ASISTOS es una plataforma robusta, probada y refinada diseñada específicamente para instituciones educativas. Centraliza funciones críticas de gestión en el aula como el seguimiento de asistencia en tiempo real, la distribución de tareas y la planeación estructurada de clases.",
      tags: ["Educación", "Sistema de Gestión", "SaaS", "Probado y Refinado"],
      image: "/images/projects/asistos_main.jpg",
      gallery: [
        "/images/projects/asistos_dashboard.jpg",
        "/images/projects/asistos_attendance.jpg"
      ],
      impact: ["Gestión centralizada de +500 estudiantes", "Reducción del 30% en tiempo administrativo docente", "Mejora en la precisión de planeación"],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
    }
  },
  "rutalia": {
    en: {
      id: "rutalia",
      title: "Rutalia",
      description: "Android Native application (Kotlin) to enhance public transport user experience.",
      fullDescription: "Rutalia is a mobile solution focused on improving urban mobility and public transport efficiency. Developed natively for Android using Kotlin, it implements modern UI patterns for a seamless transit experience. Although not deployed in production, it was extensively promoted and developed using Agile (SCRUM) methodologies.",
      tags: ["Android Native", "Kotlin", "UX Design", "Urban Mobility", "Agile SCRUM"],
      image: "/images/projects/rutalia_main.jpg",
      gallery: [
        "/images/projects/rutalia_ui_1.jpg",
        "/images/projects/rutalia_ui_2.jpg"
      ],
      impact: ["High-fidelity Android prototype showcased to stakeholders", "Workflow optimization for public transit tracking", "Strict adherence to Material Design standards", "Development managed via SCRUM methodologies"],
      techStack: ["Android SDK", "Kotlin", "Google Maps API", "Retrofit", "SCRUM"]
    },
    es: {
      id: "rutalia",
      title: "Rutalia",
      description: "Aplicación Android Nativo (Kotlin) para mejorar la experiencia del usuario en el transporte público.",
      fullDescription: "Rutalia es una solución móvil enfocada en mejorar la movilidad urbana y la eficiencia del transporte público. Desarrollada de forma nativa para Android usando Kotlin, implementa patrones de UI modernos para una experiencia de tránsito fluida. Aunque no llegó a probarse en producción, fue promocionada y trabajada bajo metodologías Ágiles (SCRUM).",
      tags: ["Android Nativo", "Kotlin", "Diseño UX", "Movilidad Urbana", "Agile SCRUM"],
      image: "/images/projects/rutalia_main.jpg",
      gallery: [
        "/images/projects/rutalia_ui_1.jpg",
        "/images/projects/rutalia_ui_2.jpg"
      ],
      impact: ["Prototipo Android de alta fidelidad promocionado públicamente", "Optimización de flujos para rastreo de transporte", "Adherencia estricta a estándares de Material Design", "Desarrollo gestionado mediante metodología SCRUM"],
      techStack: ["Android SDK", "Kotlin", "Google Maps API", "Retrofit", "SCRUM"]
    }
  },
  "carelux-point": {
    en: {
      id: "carelux-point",
      title: "Carelux Point",
      description: "Integral platform for pharmacies with facial recognition and RFID automation.",
      fullDescription: "Carelux Point is a comprehensive solution designed to modernize pharmaceutical retail. It integrates advanced identification technologies and now hosts the EREBUS AI core to streamline the entire supply chain and patient safety experience.",
      tags: ["Facial Recognition", "RFID", "Inventory Control", "Automation"],
      image: "/images/projects/carelux_main.jpg",
      certificate: { 
        name: "University Thesis Recognition", 
        url: "/images/certificates/carelux_cert.jpg" 
      },
      impact: ["40% reduction in checkout time", "Real-time stock tracking with 99.9% accuracy", "Automated patient history retrieval via biometrics"],
      techStack: ["React", "Node.js", "Python (OpenCV)", "PostgreSQL", "RFID Hardware"]
    },
    es: {
      id: "carelux-point",
      title: "Carelux Point",
      description: "Plataforma integral para farmacias con reconocimiento facial y automatización RFID.",
      fullDescription: "Carelux Point es una solución integral diseñada para modernizar el comercio farmacéutico. Integra tecnologías de identificación avanzadas y ahora alberga el núcleo de IA EREBUS para optimizar toda la cadena de suministro y la seguridad del paciente.",
      tags: ["Reconocimiento Facial", "RFID", "Control Inventario", "Automatización"],
      image: "/images/projects/carelux_main.jpg",
      certificate: { 
        name: "Reconocimiento de Tesis Universitaria", 
        url: "/images/certificates/carelux_cert.jpg" 
      },
      impact: ["Reducción del 40% en tiempo de pago", "Seguimiento de stock en tiempo real con 99.9% de precisión", "Recuperación automática de historial vía biometría"],
      techStack: ["React", "Node.js", "Python (OpenCV)", "PostgreSQL", "Hardware RFID"]
    }
  }
};

export const SKILLS_DATA: SkillCategory[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#", "C++", "Java", "PHP", "Kotlin", "SQL"] },
  { category: "Web & Backend", items: ["React", "Vite", "Node.js", "Tailwind CSS", "REST APIs"] },
  { category: "Systems & Cloud", items: ["Linux", "Cisco Networks", "VLANs", "Supabase", "Firebase"] },
  { category: "Methodologies", items: ["SCRUM", "Agile", "Result-Oriented Design", "Technical Documentation"] }
];

export const EXPERIENCE_DATA_ES: ExperienceItem[] = [
  { 
    company: "Walmart Express Esmeralda", 
    role: "Auxiliar Multifuncional B", 
    period: "Oct 2025 — Dic 2025", 
    description: ["Gestión operativa y logística en el área de abarrotes.", "Uso de dispositivos TC para control de inventarios.", "Optimización de exhibición de productos."] 
  },
  { 
    company: "Universidad Tres Culturas", 
    role: "Soporte Técnico (Voluntario)", 
    period: "2024 — 2025", 
    description: ["Mantenimiento de más de 55 unidades de cómputo.", "Configuración de SO Windows y resolución de problemas.", "Diagnóstico y reparación de hardware."] 
  },
  { 
    company: "Freelance / Académico", 
    role: "Proyectos de Ingeniería de Sistemas", 
    period: "2022 — 2025", 
    description: ["Desarrollo Full-stack de proyectos de tesis.", "Implementación de sistemas de identificación biométrica.", "Participación en hackatones nacionales de programación."] 
  }
];

export const EXPERIENCE_DATA_EN: ExperienceItem[] = [
  { 
    company: "Walmart Express Esmeralda", 
    role: "Multifunctional Assistant B", 
    period: "Oct 2025 — Dec 2025", 
    description: ["Operational and logistics management in grocery area.", "Use of TC devices for inventory control.", "Product display optimization."] 
  },
  { 
    company: "Universidad Tres Culturas", 
    role: "IT Support (Volunteer)", 
    period: "2024 — 2025", 
    description: ["Maintenance of 55+ computer units.", "Windows OS configuration and troubleshooting.", "Hardware diagnostic and repair."] 
  },
  { 
    company: "Freelance / Academic", 
    role: "Systems Engineering Projects", 
    period: "2022 — 2025", 
    description: ["Full-stack development of thesis projects.", "Implementation of biometric identification systems.", "Participation in national coding hackathons."] 
  }
];

export const TRANSLATIONS: any = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact", downloadCv: "CV", backHome: "Back to Home" },
    hero: { greeting: "Hello, I'm", badge: "Available for new opportunities", rolePrefix: "A", roleSuffix: "crafting refined digital experiences with purpose.", viewProjects: "View Projects", getInTouch: "Get in touch", github: "GitHub Profile" },
    about: { title: "Profile", education: "Education", languages: "Languages", quote: "Simple is hard, but simple is better.", intro: "Graduated in Systems Engineering. I have a constant growth mindset and passion for technology.", eduInst: "Tres Culturas Univ.", eduDeg: "B.S. Systems Engineering", langList: "Spanish, English" },
    experience: { title: "Experience", items: EXPERIENCE_DATA_EN },
    skills: { title: "Skills", categories: SKILLS_DATA },
    projects: { 
      title: "Projects", 
      subtitle: "A selection of technical work that defines my engineering approach.", 
      viewMore: "Learn More", 
      details: { 
        impact: "Impact", 
        impactLabel: "Impact",
        tech: "Tech", 
        cert: "Credential", 
        noCert: "Progressing", 
        viewCert: "View Certificate", 
        close: "Close",
        statusTimeline: "Status & Timeline",
        statusLabel: "Status",
        statusValue: "Production Ready",
        screenshots: "Project Screenshots",
        overview: "Project Overview",
        sidebarImpact: "Focusing on architectural efficiency and high-fidelity user interactions.",
        noCertMsg: "No official certificate available for this project. Focus is purely on functional excellence and Agile promotion."
      }, 
      items: Object.keys(PROJECTS_DATA).map(k => PROJECTS_DATA[k].en) 
    },
    contact: { title: "Let's connect", subtitle: "Have a project in mind or just want to say hi?", close: "Close", email: "Email", phone: "Phone", downloadPdf: "Download PDF", previewCv: "Curriculum Vitae Preview" },
    footer: { builtWith: "Elegance by design.", status: "Improving", private: "Private Portfolio" }
  },
  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", skills: "Habilidades", contact: "Contacto", downloadCv: "CV", backHome: "Volver al Inicio" },
    hero: { greeting: "Hola, soy", badge: "Disponible para nuevas oportunidades", rolePrefix: "Un", roleSuffix: "creando experiencias digitales refinadas con propósito.", viewProjects: "Ver Proyectos", getInTouch: "Contactar", github: "Perfil de GitHub" },
    about: { title: "Perfil", education: "Educación", languages: "Idiomas", quote: "Lo simple es difícil, pero lo simple es mejor.", intro: "Egresado de Ingeniería en Sistemas Computacionales. Poseo una mentalidad de crecimiento constante y pasión por la tecnología.", eduInst: "Univ. Tres Culturas", eduDeg: "Ing. en Sistemas Computacionales", langList: "Español, Inglés" },
    experience: { title: "Experiencia", items: EXPERIENCE_DATA_ES },
    skills: { title: "Habilidades", categories: SKILLS_DATA.map(s => ({
      ...s, 
      category: s.category === "Languages" ? "Lenguajes" : 
                s.category === "Methodologies" ? "Metodologías" : 
                s.category === "Systems & Cloud" ? "Sistemas y Redes" : 
                s.category === "Web & Backend" ? "Web y Backend" : s.category
    })) },
    projects: { 
      title: "Proyectos", 
      subtitle: "Una selección de trabajos técnicos que definen mi enfoque de ingeniería.", 
      viewMore: "Saber más", 
      details: { 
        impact: "Impacto", 
        impactLabel: "Impacto",
        tech: "Tech", 
        cert: "Credencial", 
        noCert: "En progreso", 
        viewCert: "Ver Certificado", 
        close: "Cerrar",
        statusTimeline: "Estado y Cronograma",
        statusLabel: "Estado",
        statusValue: "Listo para Producción",
        screenshots: "Capturas del Proyecto",
        overview: "Descripción General",
        sidebarImpact: "Enfocado en eficiencia arquitectónica e interacciones de usuario de alta fidelidad.",
        noCertMsg: "No hay certificado oficial disponible para este proyecto. El enfoque es puramente en la excelencia funcional y promoción ágil."
      }, 
      items: Object.keys(PROJECTS_DATA).map(k => PROJECTS_DATA[k].es) 
    },
    contact: { title: "Conectemos", subtitle: "¿Tienes un proyecto en mente o solo quieres saludar?", close: "Cerrar", email: "Correo", phone: "Teléfono", downloadPdf: "Descargar PDF", previewCv: "Vista Previa de Curriculum Vitae" },
    footer: { builtWith: "Diseñado con elegancia.", status: "Mejorando", private: "Portafolio Privado" }
  }
};
