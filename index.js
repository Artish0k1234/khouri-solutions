AOS.init({
    once: true,
    duration: 800,
});

// Mobile Hamburger Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Hero Video Ending Trigger
const heroSection = document.getElementById('hero-section');
const video = document.getElementById('hero-video');

if (video) {
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 9.0) {
            heroSection.classList.add('show-ending');
        }
    });

    video.addEventListener('ended', () => {
        heroSection.classList.add('show-ending');
    });
}

// Carousel Functionality
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselContainer = document.getElementById('carousel-container');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.zIndex = i === index ? '10' : '1';
    });
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-slate-700');
            dot.classList.add('bg-corporate-gold');
        } else {
            dot.classList.remove('bg-corporate-gold');
            dot.classList.add('bg-slate-700');
        }
    });
    currentIndex = index;
}

function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
}

function startTimer() {
    slideInterval = setInterval(nextSlide, 6000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => { showSlide(index); resetTimer(); });
});

carouselContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { nextSlide(); resetTimer(); }
    else if (e.key === 'ArrowLeft') { prevSlide(); resetTimer(); }
});

carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
carouselContainer.addEventListener('mouseleave', startTimer);
startTimer();

// Multi-Language Switcher Dictionary (English & French)
const translations = {
    en: {
        nav_home: "Home",
        nav_overview: "Overview",
        nav_divisions: "Divisions",
        nav_portfolio: "Portfolio",
        nav_why_us: "Why Us",
        nav_contact: "Contact",
        nav_cta: "Partner With Us",
        hero_subtitle: "A Property Partner Business Providing Integrated Solutions",
        hero_title: "Building a Community Where Everyone Feels at Home",
        hero_desc: "We are not just another property management company. We are your integrated growth partner. Building Value. Creating Growth. Delivering Results.",
        hero_btn1: "Explore Our Divisions",
        hero_btn2: "Get in Touch",
        framework_tag: "Strategic Framework",
        framework_title: "Integrated Capabilities",
        framework_desc: "Auto-scrolling showcase (6-second intervals). Use arrows, dots, or your Left/Right Keyboard Arrows to navigate.",
        prob_tag: "Market Friction",
        prob_title: "The Problem Today",
        prob_subtitle: "Reactive management leaves you managing blind.",
        prob_1_title: "Lagging Data",
        prob_1_desc: "Property management companies today are reactive, and provide lagging data managing your business impersonally.",
        prob_2_title: "Fragmented Information",
        prob_2_desc: "Fragmented information creates stress, missed deadlines, weak reporting, and slower decisions.",
        prob_3_title: "Delayed Decisions",
        prob_3_desc: "Hard-to-read, disconnected data with no clear visibility into building health or forecasting.",
        div_tag: "Our Five Divisions",
        div_title: "One Partner. Five Integrated Disciplines.",
        div_1_name: "Property Management",
        div_1_sub: "Hands-on management that protects your NOI",
        div_1_col1_title: "Tenant Relations",
        div_1_col1_desc: "Full-service screening, onboarding, renewals, and retention.",
        div_1_col2_title: "Proactive Maintenance",
        div_1_col2_desc: "Coordinated preventive and responsive maintenance.",
        div_1_col3_title: "Regulatory Compliance",
        div_1_col3_desc: "Ongoing LTB and building-code compliance.",
        div_2_name: "Bookkeeping & Financial Management",
        div_2_sub: "Numbers you can trust, delivered on time",
        div_2_col1_title: "Portfolio Reporting",
        div_2_col1_desc: "Income statements, balance sheets, and custom reports.",
        div_2_col2_title: "Cash Flow Forecasting",
        div_2_col2_desc: "Forward-looking projections and budget variance analysis.",
        div_2_col3_title: "Tax Preparation Support",
        div_2_col3_desc: "Year-round, audit-ready documentation.",
        div_3_name: "Property Development",
        div_3_sub: "From concept to completion",
        div_3_col1_title: "Feasibility Analysis",
        div_3_col1_desc: "Highest-and-best-use studies before capital is committed.",
        div_3_col2_title: "Project Planning",
        div_3_col2_desc: "End-to-end planning through municipal approvals.",
        div_3_col3_title: "Completion Transition",
        div_3_col3_desc: "Seamless handoff into ongoing management.",
        div_4_name: "Architectural Services",
        div_4_sub: "Design that maximizes return",
        div_4_col1_title: "Concept Design",
        div_4_col1_desc: "Market-informed design concepts aligned with zoning.",
        div_4_col2_title: "Site Planning",
        div_4_col2_desc: "Optimized layouts maximizing density and ROI.",
        div_4_col3_title: "Permit Drawings",
        div_4_col3_desc: "Construction-ready documentation.",
        div_5_name: "Asset Management",
        div_5_sub: "Strategic guidance at every stage",
        div_5_col1_title: "Performance Reviews",
        div_5_col1_desc: "In-depth analysis to unlock property value.",
        div_5_col2_title: "Acquisition Analysis",
        div_5_col2_desc: "Financial modeling and market comparables.",
        div_5_col3_title: "Exit Strategy",
        div_5_col3_desc: "Strategic disposition planning.",
        port_tag: "Real-World Execution",
        port_title: "Real-World Project Gallery",
        bath_tag: "Residential Renovation",
        bath_title: "Luxury Marble & Matte Black Bathroom Suite",
        bath_desc: "Fully coordinated bathroom turnaround featuring custom tilework, LED vanity mirror, and premium fixtures.",
        kit_tag: "Property Development",
        kit_title: "Open-Concept Contemporary Kitchen",
        kit_desc: "End-to-end management from architectural layout to final finishes, maximizing property valuation and tenant appeal.",
        why_tag: "Why Choose Khouri Solutions",
        why_title: "One Partner. Every Discipline. Measurable Results.",
        why_1_title: "One Integrated Partner",
        why_1_desc: "Replace multiple vendors with a single firm coordinating operations, finance, development, and strategy.",
        why_2_title: "Cross-Discipline Expertise",
        why_2_desc: "Every team member understands how their work connects to the broader portfolio strategy.",
        why_3_title: "Transparent Communication",
        why_3_desc: "Regular reporting, clear accountability, and direct access to decision-makers at every level.",
        contact_tag: "Let's Connect",
        contact_title: "We are your integrated growth partner.",
        contact_desc: "Building Value. Creating Growth. Delivering Results. Let's discuss how we can support your portfolio.",
        contact_sub: "Direct Inquiries & Portfolios",
        contact_location: "Montréal, Québec • Available for Residential & Commercial Portfolios"
    },
    fr: {
        nav_home: "Accueil",
        nav_overview: "Aperçu",
        nav_divisions: "Divisions",
        nav_portfolio: "Portfolio",
        nav_why_us: "Pourquoi Nous",
        nav_contact: "Contact",
        nav_cta: "Devenir Partenaire",
        hero_subtitle: "Une Entreprise Partenaire Immobilière Offrant des Solutions Intégrées",
        hero_title: "Créer une Communauté Où Chacun Se Sent Chez Soi",
        hero_desc: "Nous ne sommes pas une simple société de gestion. Nous sommes votre partenaire de croissance intégré. Créer de la valeur. Stimuler la croissance. Obtenir des résultats.",
        hero_btn1: "Explorer Nos Divisions",
        hero_btn2: "Contactez-nous",
        framework_tag: "Cadre Stratégique",
        framework_title: "Capacités Intégrées",
        framework_desc: "Vitrine à défilement automatique (intervalles de 6 secondes). Utilisez les flèches, les points ou vos flèches de clavier.",
        prob_tag: "Friction du Marché",
        prob_title: "Le Problème Actuel",
        prob_subtitle: "La gestion réactive vous laisse piloter à l'aveugle.",
        prob_1_title: "Données Obsolètes",
        prob_1_desc: "Les sociétés de gestion actuelles sont réactives et fournissent des données tardives gérant votre entreprise de façon impersonnelle.",
        prob_2_title: "Informations Fragmentées",
        prob_2_desc: "Les informations fragmentées créent du stress, des délais manqués, des rapports faibles et des décisions plus lentes.",
        prob_3_title: "Décisions Tardives",
        prob_3_desc: "Des données difficiles à lire et déconnectées sans visibilité claire sur la santé des bâtiments.",
        div_tag: "Nos Cinq Divisions",
        div_title: "Un Partenaire. Cinq Disciplines Intégrées.",
        div_1_name: "Gestion Immobilière",
        div_1_sub: "Gestion proactive qui protège votre NOI",
        div_1_col1_title: "Relations Locataires",
        div_1_col1_desc: "Sélection complète, intégration, renouvellements et rétention.",
        div_1_col2_title: "Maintenance Proactive",
        div_1_col2_desc: "Entretien préventif et réactif coordonné.",
        div_1_col3_title: "Conformité Réglementaire",
        div_1_col3_desc: "Conformité continue TAL et codes du bâtiment.",
        div_2_name: "Tenue de Livres & Gestion Financière",
        div_2_sub: "Des chiffres fiables livrés à temps",
        div_2_col1_title: "Rapports de Portfolio",
        div_2_col1_desc: "États des résultats, bilans et rapports personnalisés.",
        div_2_col2_title: "Prévisions de Trésorerie",
        div_2_col2_desc: "Projections d'avenir et analyse des écarts budgétaires.",
        div_2_col3_title: "Support Fiscal",
        div_2_col3_desc: "Documentation prête pour les audits toute l'année.",
        div_3_name: "Développement Immobilier",
        div_3_sub: "De la conception à la réalisation",
        div_3_col1_title: "Analyse de Faisabilité",
        div_3_col1_desc: "Études de meilleur usage avant l'engagement des capitaux.",
        div_3_col2_title: "Planification de Projet",
        div_3_col2_desc: "Planification complète jusqu'aux approbations.",
        div_3_col3_title: "Transition de Fin",
        div_3_col3_desc: "Passage fluide vers la gestion continue.",
        div_4_name: "Services Architecturaux",
        div_4_sub: "Design maximisant le rendement",
        div_4_col1_title: "Design Conceptuel",
        div_4_col1_desc: "Concepts informés par le marché et le zonage.",
        div_4_col2_title: "Planification d'Implantation",
        div_4_col2_desc: "Agencements optimisant la densité et le ROI.",
        div_4_col3_title: "Plans de Permis",
        div_4_col3_desc: "Documentation prête pour la construction.",
        div_5_name: "Gestion d'Actifs",
        div_5_sub: "Conseil stratégique à chaque étape",
        div_5_col1_title: "Revues de Performance",
        div_5_col1_desc: "Analyses approfondies pour libérer la valeur.",
        div_5_col2_title: "Analyse d'Acquisition",
        div_5_col2_desc: "Modélisation financière et comparables du marché.",
        div_5_col3_title: "Stratégie de Sortie",
        div_5_col3_desc: "Planification stratégique de disposition.",
        port_tag: "Réalisation Concrète",
        port_title: "Galerie de Projets Réels",
        bath_tag: "Rénovation Résidentielle",
        bath_title: "Salle de Bain Luxe en Marbre & Noir Mat",
        bath_desc: "Rénovation complète avec carrelage sur mesure, miroir LED et accessoires haut de gamme.",
        kit_tag: "Développement Immobilier",
        kit_title: "Cuisine Contemporaine à Aire Ouverte",
        kit_desc: "Gestion de bout en bout maximisant la valorisation et l'attrait pour les locataires.",
        why_tag: "Pourquoi Choisir Khouri Solutions",
        why_title: "Un Partenaire. Chaque Discipline. Résultats Mesurables.",
        why_1_title: "Un Partenaire Intégré",
        why_1_desc: "Remplacez plusieurs fournisseurs par une seule firme coordonnant opérations, finance et stratégie.",
        why_2_title: "Expertise Multidisciplinaire",
        why_2_desc: "Chaque membre comprend comment son travail s'intègre à la stratégie globale.",
        why_3_title: "Communication Transparente",
        why_3_desc: "Rapports réguliers, responsabilité claire et accès direct aux décideurs.",
        contact_tag: "Connectons-nous",
        contact_title: "Nous sommes votre partenaire de croissance intégré.",
        contact_desc: "Créer de la valeur. Stimuler la croissance. Obtenir des résultats. Discutons de votre portfolio.",
        contact_sub: "Demandes Directes & Portfolios",
        contact_location: "Montréal, Québec • Disponible pour Portfolios Résidentiels & Commerciaux"
    }
};

const langSwitcher = document.getElementById('lang-switcher');
langSwitcher.addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
