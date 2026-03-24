/**
 * config.js
 * Centralized configuration file for the portfolio
 */

const PORTFOLIO_CONFIG = {
    name: "Silver",
    // Character configuration
    characterIndex: {
        gifPath: "assets/gif/kuromi.gif",
        altText: "Kuromi Avatar"
    },
    characterAbout: {
        gifPath: "assets/gif/miku.gif",
        altText: "Miku Avatar"
    },
    topNavLeftGif: "assets/gif/ks.gif",
    
    // External links
    links: {
        github: "https://github.com/your-username",
        twitter: "https://twitter.com/your-username"
    },
    
    // Character dialogue phrases
    dialogPhrasesIndex: [
        "Este es el rincón de Silver en la Wired.",
        "Haz clic en el Filesystem para navegar."
    ],
    dialogPhrasesAbout: [
        "Estás viendo la biografía de Silver.",
        "Miku está aquí para guiarte.",
        "Explora los diferentes canales de datos."
    ],

    // Tools & Technologies with Simple Icons slugs
    tools: {
        languages: [
            { name: "JavaScript", icon: "javascript" },
            { name: "HTML5", icon: "html5" },
            { name: "CSS3", icon: "css3" },
            { name: "Python", icon: "python" },
            { name: "C++", icon: "cplusplus" },
            { name: "C#", icon: "csharp" }
        ],
        libraries: [
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Express", icon: "express" },
            { name: ".NET", icon: "dotnet" },
            { name: "ABP Framework", icon: "abpframework" }
        ],
        databases: [
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MongoDB", icon: "mongodb" }
        ],
        devops: [
            { name: "Git", icon: "git" },
            { name: "Docker", icon: "docker" },
            { name: "Linux", icon: "linux" }
        ]
    },

    // Daily Apps
    apps: [
        { name: "VSCode", icon: "visualstudiocode" },
        { name: "Obsidian", icon: "obsidian" },
        { name: "Figma", icon: "figma" },
        { name: "Discord", icon: "discord" }
    ]
};

// Initialize config on load
document.addEventListener('DOMContentLoaded', () => {
    // Setup links
    const ghLink = document.getElementById('link-github');
    const twLink = document.getElementById('link-twitter');
    
    if (ghLink) ghLink.href = PORTFOLIO_CONFIG.links.github;
    if (twLink) twLink.href = PORTFOLIO_CONFIG.links.twitter;

    // Setup character
    const characterImg = document.getElementById('anime-character');
    const navCharacterIcon = document.querySelector('.nav-character-icon');
    const isAboutPage = document.body.getAttribute('data-page') === 'about';
    
    const charConfig = isAboutPage ? PORTFOLIO_CONFIG.characterAbout : PORTFOLIO_CONFIG.characterIndex;
    
    if (charConfig && characterImg) {
        characterImg.src = charConfig.gifPath;
        characterImg.alt = charConfig.altText;
    }

    if (navCharacterIcon && PORTFOLIO_CONFIG.topNavLeftGif) {
        navCharacterIcon.src = PORTFOLIO_CONFIG.topNavLeftGif;
    }
    
    // Setup character

    const getIconUrl = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${slug.replace('.', 'dot')}.svg`;

    // Output tools lists if on about-me page
    const populateList = (id, items) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = items.map(item => `
                <li class="tech-item" title="${item.name}">
                    <img src="${getIconUrl(item.icon)}" alt="${item.name}" class="tech-icon-svg">
                    <span class="tech-label">${item.name}</span>
                </li>
            `).join('');
        }
    };

    populateList('list-langs', PORTFOLIO_CONFIG.tools.languages);
    populateList('list-libs', PORTFOLIO_CONFIG.tools.libraries);
    populateList('list-dbs', PORTFOLIO_CONFIG.tools.databases);
    populateList('list-devops', PORTFOLIO_CONFIG.tools.devops);

    const appsEl = document.getElementById('list-apps');
    if (appsEl) {
        appsEl.innerHTML = PORTFOLIO_CONFIG.apps.map(app => `
            <div class="app-item-box" title="${app.name}">
                <img src="${getIconUrl(app.icon)}" alt="${app.name}" class="app-icon-svg">
                <span class="app-label">${app.name}</span>
            </div>
        `).join('');
    }
});
