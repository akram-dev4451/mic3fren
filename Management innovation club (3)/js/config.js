// Configuration and constants for MIC Website

export const CONFIG = {
    APP_NAME: 'Management Innovation Club',
    VERSION: '2.0',
    SCHOOL: 'ESSG Annaba',
    SCHOOL_URL: 'https://essg-annaba.dz/fr/accueil/',
    
    // Social media links
    SOCIAL: {
        youtube: 'https://www.youtube.com/@ManagementInnovationClub',
        instagram: 'https://www.instagram.com/management_innovation_club',
        tiktok: 'https://www.tiktok.com/@management_innova'
    },
    
    // Degree options
    DEGREES: [
        { value: 'CP1', label: { en: '1st Year License (CP1)', fr: '1ère Année de Licence (CP1)' } },
        { value: 'CP2', label: { en: '2nd Year License (CP2)', fr: '2ème Année de Licence (CP2)' } },
        { value: 'M1', label: { en: '1st Year Master (M1)', fr: '1ère Année de Master (M1)' } },
        { value: 'M2', label: { en: '2nd Year Master (M2)', fr: '2ème Année de Master (M2)' } },
        { value: 'M3', label: { en: '3rd Year Master (M3)', fr: '3ème Année de Master (M3)' } }
    ],
    
    // Cell options
    CELLS: [
        { value: 'External relations', label: { en: 'External Relations', fr: 'Relations Extérieures' } },
        { value: 'Marketing and communication', label: { en: 'Marketing and Communication', fr: 'Marketing et Communication' } },
        { value: 'Organization', label: { en: 'Organization', fr: 'Organisation' } },
        { value: 'Human resources', label: { en: 'Human Resources', fr: 'Ressources Humaines' } }
    ],
    
    // Skills for marketing
    SKILLS: [
        { value: 'photography', label: { en: 'Photography', fr: 'Photographie' } },
        { value: 'graphic_design', label: { en: 'Graphic Design', fr: 'Design Graphique' } },
        { value: 'video_editing', label: { en: 'Video Editing', fr: 'Montage Vidéo' } },
        { value: 'video_animation', label: { en: 'Video Animation', fr: 'Animation Vidéo' } },
        { value: 'appear_in_videos', label: { en: 'Appear in Club Videos (instagram and tiktok)', fr: 'Apparaître dans les Vidéos du Club (instagram et tiktok)' } },
        { value: 'social_media_management', label: { en: 'Social Media Management', fr: 'Gestion des Réseaux Sociaux' } },
        { value: 'content_writing', label: { en: 'Content Writing (FR & EN)', fr: 'Rédaction de Contenu (FR & EN)' } },
        { value: 'communication_strategy', label: { en: 'Communication Strategy', fr: 'Stratégie de Communication' } }
    ],
    
    // Form validation rules
    VALIDATION: {
        fullName: {
            required: true,
            minLength: 2,
            maxLength: 50
        },
        familyName: {
            required: true,
            minLength: 2,
            maxLength: 50
        },
        birthday: {
            required: true
        },
        phone: {
            required: true,
            pattern: /^[0-9]{10}$/,
            maxLength: 10
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    }
};

// Theme configuration
export const THEME = {
    colors: {
        primary: '#0a149e',
        secondary: '#1e3a8a',
        accent: '#3b82f6',
        light: '#dbeafe',
        darkBg: '#0f172a',
        cardBg: '#ffffff',
        textDark: '#1e293b',
        textLight: '#64748b',
        border: '#e2e8f0',
        success: '#10b981',
        error: '#ef4444'
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem'
    },
    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 25px rgba(0, 0, 0, 0.15)'
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1200px'
    }
};

// Event information
export const EVENTS = [
    {
        id: 1,
        title: { en: 'Stagera', fr: 'Stagera' },
        description: { 
            en: 'An exclusive event where companies share their experience to prepare students for future careers by:', 
            fr: 'Un événement exclusif où les entreprises partagent leur expérience pour préparer les étudiants aux carrières futures par:' 
        },
        features: [
            { en: 'Enter the Student in the workshops in the way of getting know about the companies that they can apply in the future', fr: 'Introduire l\'étudiant dans les ateliers de manière à connaître les entreprises auxquelles ils peuvent postuler à l\'avenir' },
            { en: 'Preparing students to be job-ready by equipping them with the essential skills and competencies required for the future, enabling them to enter the job market with high productivity and creativity', fr: 'Préparer les étudiants à être prêts pour l\'emploi en les dotant des compétences et compétences essentielles requises pour l\'avenir, leur permettant d\'entrer sur le marché du travail avec une productivité et une créativité élevées' },
            { en: 'Creating direct employment opportunities for students by connecting them with companies and facilitating their integration into the professional environment', fr: 'Créer des opportunités d\'emploi directes pour les étudiants en les connectant avec des entreprises et en facilitant leur intégration dans l\'environnement professionnel' }
        ],
        year: 2025,
        photos: [
            "event pictures/stagera1.jpg",
            "event pictures/stagera 2.jpg",
            "event pictures/stagera 5.jpg",
            "event pictures/stagera 6.jpg"
        ]
    },
    {
        id: 2,
        title: { en: 'HackMinds', fr: 'HackMinds' },
        description: { 
            en: 'A competition where groups of students collaborate and work together to solve a problem proposed by a company. Students present their solutions to a panel of experts. This experience enhances students\' teamwork, critical thinking, and problem-solving skills.', 
            fr: 'Une compétition où des groupes d\'étudiants collaborent et travaillent ensemble pour résoudre un problème proposé par une entreprise. Les étudiants présentent leurs solutions à un panel d\'experts. Cette expérience améliore l\'esprit d\'équipe, la pensée critique et les compétences en résolution de problèmes des étudiants.' 
        },
        features: [],
        year: 2025,
        photos: [
            "event pictures/hm1.jpg",
            "event pictures/hm2.jpg",
            "event pictures/hm3.jpg",
            "event pictures/hm4.jpg"
        ]
    },
    {
        id: 3,
        title: { en: 'MindWaves', fr: 'MindWaves' },
        description: { 
            en: 'An event focused on sharing ideas from different topics like Success, History, Technology & Innovation and more. A platform to let your ideas spread freely and open new ways of thinking.', 
            fr: 'Un événement axé sur le partage d\'idées de différents sujets comme le Succès, l\'Histoire, la Technologie & l\'Innovation et plus. Une plateforme pour laisser vos idées se propager librement et ouvrir de nouvelles façons de penser.' 
        },
        features: [],
        year: 2025,
        photos: [
            "event pictures/mw1.jpg",
            "event pictures/mw2.jpg",
            "event pictures/mw3.jpg",
            "event pictures/mw4.jpg"
        ]
    },
    {
        id: 4,
        title: { en: 'Participate in ACF', fr: 'Participer à l\'ACF' },
        description: { 
            en: 'Acf or Algeria Entrepreneurship, Training & Digital Economy Exhibition. is a large expo and conference orginazed at Sheraton hotel where People and Entrepreneurs meet to talk about : • Startups and entrepreneurship • Technology and digital economy • Training and education programs • E-commerce and online services • Investment and startup funding companies , banks , startups and essg students come to show their projects and network', 
            fr: 'ACF ou Exposition Algérienne d\'Entrepreneuriat, Formation & Économie Numérique. est une grande expo et conférence organisée à l\'hôtel Sheraton où les gens et les entrepreneurs se rencontrent pour parler de : • Startups et entrepreneuriat • Technologie et économie numérique • Programmes de formation et d\'éducation • Commerce électronique et services en ligne • Sociétés d\'investissement et de financement de startups, banques, startups et étudiants ESSG viennent présenter leurs projets et réseauter' 
        },
        features: [
            { en: 'find a jobs and internships Opportunities', fr: 'trouver des opportunités d\'emplois et de stages' },
            { en: 'Discover Startups and new ideas', fr: 'Découvrir des Startups et de nouvelles idées' },
            { en: 'learn from conferences and workshops', fr: 'apprendre des conférences et ateliers' },
            { en: 'Networking With business owners and investors', fr: 'Réseautage avec propriétaires d\'entreprises et investisseurs' },
            { en: 'inspiration for Starting a business', fr: 'inspiration pour démarrer une entreprise' }
        ],
        year: 2026,
        photos: [
            "event pictures/acf1.jpg",
            "event pictures/acf2.jpg",
            "event pictures/acf3.jpg"
        ]
    },
    {
        id: 5,
        title: { en: 'InnoStation', fr: 'InnoStation' },
        description: { 
            en: 'is an interactive event organized at ESSG. It serves as a specialized platform designed to bridge the gap between academic theory and professional practice through hands-on learning.', 
            fr: 'est un événement interactif organisé à l\'ESSG. Il sert de plateforme spécialisée conçue pour combler le fossé entre la théorie académique et la pratique professionnelle grâce à l\'apprentissage pratique.' 
        },
        features: [
            { en: 'It offers a variety of practical workshops led by professionals and experts to build real-world competencies.', fr: 'Il offre une variété d\'ateliers pratiques dirigés par des professionnels et des experts pour développer des compétences réelles.' },
            { en: 'Participants gain exposure to high-demand fields, including: AI , design and Public Speaking', fr: 'Les participants sont exposés à des domaines très demandés, notamment : IA, design et prise de parole en public' },
            { en: 'It provides a unique opportunity to interact and exchange ideas with qualified trainers and industry experts.', fr: 'Il offre une opportunité unique d\'interagir et d\'échanger des idées avec des formateurs qualifiés et des experts de l\'industrie.' },
            { en: 'Unlike traditional lectures, the event is hosted in an enriching and dynamic setting focused on "learning by doing."', fr: 'Contrairement aux conférences traditionnelles, l\'événement se déroule dans un cadre enrichissant et dynamique axé sur "l\'apprentissage par la pratique".' },
            { en: 'It encourages students to think creatively, create new projects, and innovate within their fields of study.', fr: 'Il encourage les étudiants à penser de manière créative, à créer de nouveaux projets et à innover dans leurs domaines d\'étude.' }
        ],
        year: 2024,
        photos: [
            "event pictures/is1.jpg",
            "event pictures/is2.jpg",
            "event pictures/is3.jpg"
        ]
    },
    {
        id: 6,
        title: { en: 'StartEast', fr: 'StartEast' },
        description: { 
            en: 'is a major startup and innovation Exhibition, the event serves as a gateway for students to enter the world of entrepreneurship. It is organized in partnership with the ESSG Incubator and the Hedge Accelerator to help students transform their ideas into real business concepts , it helps the student by ;', 
            fr: 'est une grande exposition de startups et d\'innovation, l\'événement sert de passerelle pour que les étudiants entrent dans le monde de l\'entrepreneuriat. Il est organisé en partenariat avec l\'Incubateur ESSG et l\'Accélérateur Hedge pour aider les étudiants à transformer leurs idées en concepts commerciaux réels, il aide l\'étudiant par ;' 
        },
        features: [
            { en: 'Learn the fundamental concepts of the startup ecosystem, including the roles of incubators and accelerators.', fr: 'Apprendre les concepts fondamentaux de l\'écosystème des startups, y compris les rôles des incubateurs et accélérateurs.' },
            { en: 'Receive direct advice and mentorship for your own projects from professional entrepreneurs and project leaders.', fr: 'Recevoir des conseils directs et un mentorat pour vos propres projets de la part d\'entrepreneurs professionnels et de chefs de projet.' },
            { en: 'Network with the innovators "shaping the future" and learn from their personal success stories and challenges.', fr: 'Réseauter avec les innovateurs "façonnant l\'avenir" et apprendre de leurs histoires de succès personnelles et défis.' },
            { en: 'Gain the tools and inspiration needed to evolve a simple idea into a structured startup project.', fr: 'Acquérir les outils et l\'inspiration nécessaires pour faire évoluer une idée simple en un projet de startup structuré.' },
            { en: 'Connect directly with the school\'s incubator and the Hedge Accelerator to find support for your future ambitions.', fr: 'Se connecter directement avec l\'incubateur de l\'école et l\'Accélérateur Hedge pour trouver un soutien pour vos ambitions futures.' }
        ],
        year: 2024,
        photos: [
            "event pictures/se1.jpg",
            "event pictures/se2.jpg",
            "event pictures/se3.jpg",
            "event pictures/se4.jpg"
        ]
    }
];

// About content
export const ABOUT = {
    title: 'What is MIC?',
    description: `Management Innovation Club is a non-profit cultural scientific organization dedicated to developing students' 
    scientific research culture while encouraging innovation and entrepreneurship. We organize workshops, lectures, and 
    scientific meetings that enhance academic and practical skills, bridging the gap between theoretical knowledge and 
    real-world applications.`,
    location: 'ESSG Annaba',
    focus: [
        'Scientific research culture',
        'Innovation mindset',
        'Business management',
        'Real-world applications',
        'Student development'
    ]
};

// Firebase Configuration
export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCpWrga98HreN4nOqf7UUtONJgzdt_yoAw",
    authDomain: "mic23-ae782.firebaseapp.com",
    projectId: "mic23-ae782",
    storageBucket: "mic23-ae782.firebasestorage.app",
    messagingSenderId: "127313940468",
    appId: "1:127313940468:web:4e1eae5084e9aac34ab3a1",
    measurementId: "G-QPKS7WQC02"
};

// Export all configurations
export default {
    CONFIG,
    THEME,
    EVENTS,
    ABOUT,
    FIREBASE_CONFIG
};
