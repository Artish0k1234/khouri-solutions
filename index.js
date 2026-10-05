AOS.init({
    once: true,
    duration: 800,
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

// Multi-Language Switcher Dictionary
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
        port_tag: "Real-World Execution",
        port_title: "Real-World Project Gallery",
        bath_tag: "Residential Renovation",
        bath_title: "Luxury Marble & Matte Black Bathroom Suite",
        kit_tag: "Property Development",
        kit_title: "Open-Concept Contemporary Kitchen",
        contact_tag: "Let's Connect",
        contact_title: "We are your integrated growth partner."
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
        port_tag: "Réalisation Concrète",
        port_title: "Galerie de Projets Réels",
        bath_tag: "Rénovation Résidentielle",
        bath_title: "Salle de Bain Luxe en Marbre & Noir Mat",
        kit_tag: "Développement Immobilier",
        kit_title: "Cuisine Contemporaine à Aire Ouverte",
        contact_tag: "Connectons-nous",
        contact_title: "Nous sommes votre partenaire de croissance intégré."
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