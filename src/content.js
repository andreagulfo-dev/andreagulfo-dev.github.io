export const PROFILE = {
  email: "andreagulfo25@gmail.com",
  github: "https://github.com/andreagulfo-dev",
  linkedin: "https://www.linkedin.com/in/andrea-gulfo-a89511387/",
  cv: { it: null, en: null },
};

export const STRINGS = {
  it: {
    "meta.title": "Andrea Gulfo · Studente di Ingegneria Informatica",
    "meta.description":
      "Portfolio di Andrea Gulfo, studente di Ingegneria Informatica e dell'Automazione al Politecnico di Bari.",
    skip: "Vai al contenuto",
    "nav.label": "Principale",
    "nav.about": "Profilo",
    "nav.skills": "Competenze",
    "nav.projects": "Progetti",
    "nav.contact": "Contatti",
    "lang.label": "Lingua",
    "theme.label": "Cambia tema",
    "hero.meta": "Politecnico di Bari · Ingegneria Informatica e dell'Automazione",
    "hero.lead": "Studente di Ingegneria Informatica, appassionato di tecnologia e interessato allo sviluppo software.",
    "hero.cta": "Scorri",
    "path.label": "Profilo",
    "skills.label": "Competenze",
    "skills.title": "Competenze tecniche.",
    "skills.legend": "Le voci in evidenza sono quelle che ho studiato o utilizzato di più; le altre sono conoscenze di base.",
    "projects.label": "Progetti",
    "projects.title": "Progetti.",
    "projects.intro": "Per ogni progetto indico il contesto e il mio contributo. Dove ho usato strumenti di AI, lo specifico.",
    "projects.empty.title": "In aggiornamento.",
    "projects.empty.text": "Questa sezione verrà aggiornata con i prossimi progetti.",
    "status.online": "Online",
    "status.offline": "Offline",
    "p.context": "Contesto",
    "p.did": "Contributo",
    "p.tools": "Tecnologie",
    "link.site": "Visita il sito",
    "link.code": "Vedi il codice",
    "contact.label": "Contatti",
    "contact.title": "Disponibile per nuove esperienze.",
    "contact.text": "Sono alla ricerca di esperienze formative: stage, collaborazioni o progetti. Per contattarmi, scrivimi via email.",
    "contact.cv": "Scarica il CV",
    "footer.built": "Ospitato su GitHub Pages",
  },
  en: {
    "meta.title": "Andrea Gulfo · Computer Engineering Student",
    "meta.description":
      "Portfolio of Andrea Gulfo, Computer and Automation Engineering student at Politecnico di Bari.",
    skip: "Skip to content",
    "nav.label": "Main",
    "nav.about": "Profile",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "theme.label": "Toggle theme",
    "hero.meta": "Politecnico di Bari · Computer & Automation Engineering",
    "hero.lead": "Computer Engineering student, passionate about technology and interested in software development.",
    "hero.cta": "Scroll",
    "path.label": "Profile",
    "skills.label": "Skills",
    "skills.title": "Technical skills.",
    "skills.legend": "Highlighted items are what I've studied or used the most; the others are basic knowledge.",
    "projects.label": "Projects",
    "projects.title": "Projects.",
    "projects.intro": "For each project I describe the context and my contribution. Where I used AI tools, I say so.",
    "projects.empty.title": "Work in progress.",
    "projects.empty.text": "This section will be updated with future projects.",
    "status.online": "Online",
    "status.offline": "Offline",
    "p.context": "Context",
    "p.did": "Contribution",
    "p.tools": "Technologies",
    "link.site": "Visit the site",
    "link.code": "See the code",
    "contact.label": "Contact",
    "contact.title": "Open to new opportunities.",
    "contact.text": "I'm looking for hands-on experience: internships, collaborations or projects. To get in touch, email me.",
    "contact.cv": "Download CV",
    "footer.built": "Hosted on GitHub Pages",
  },
};

export const STEPS = [
  {
    id: "start",
    tag: { it: "Inizi", en: "Beginnings" },
    title: { it: "Capire come funziona.", en: "Understanding how it works." },
    body: {
      it: [
        "Sono *appassionato di informatica da sempre*: mi affascina la tecnologia e ciò che si nasconde dietro il funzionamento dei dispositivi che usiamo ogni giorno.",
        "Questa curiosità mi ha spinto a sperimentare e a realizzare *piccoli progetti* per conto mio.",
      ],
      en: [
        "I've been *passionate about computing for as long as I can remember*: I'm fascinated by technology and by what lies behind the devices we all use every day.",
        "That curiosity led me to experiment and to build *small projects* of my own.",
      ],
    },
  },
  {
    id: "hobby",
    tag: { it: "Interessi", en: "Interests" },
    title: { it: "Oltre lo studio.", en: "Beyond my studies." },
    body: {
      it: ["Coltivo la passione per la *musica* e per i *videogiochi*, e mi piace restare aggiornato su ciò che accade nel mondo, in ambiti anche molto diversi."],
      en: ["I'm passionate about *music* and *video games*, and I like staying up to date with what's happening in the world, across many different fields."],
    },
  },
  {
    id: "uni",
    tag: { it: "Formazione", en: "Education" },
    title: { it: "Percorso di studi.", en: "Academic path." },
    rows: [
      {
        label: { it: "In corso", en: "Ongoing" },
        value: {
          it: "Politecnico di Bari · Laurea triennale in Ingegneria Informatica e dell'Automazione, curriculum Sistemi e Applicazioni Informatiche",
          en: "Politecnico di Bari · Bachelor's degree in Computer and Automation Engineering, track Sistemi e Applicazioni Informatiche",
        },
      },
      {
        label: { it: "2018 – 2023", en: "2018 – 2023" },
        value: {
          it: "I.T.S.E.T. “Manlio Capitolo” · Indirizzo Informatica · Tursi",
          en: "I.T.S.E.T. “Manlio Capitolo” · Computer science track · Tursi",
        },
      },
    ],
  },
];

export const SKILLS = [
  {
    label: { it: "Linguaggi", en: "Languages" },
    items: [
      { name: "Java", level: "core" },
      { name: "C++", level: "core" },
      { name: "Python", level: "light" },
    ],
  },
  {
    label: { it: "Web", en: "Web" },
    items: [
      { name: "WordPress", level: "core" },
      { name: "Elementor", level: "core" },
      { name: "HTML", level: "light" },
      { name: "CSS", level: "light" },
      { name: "PHP", level: "core" },
    ],
  },
  {
    label: { it: "Dati", en: "Data" },
    items: [
      { name: { it: "Basi di dati", en: "Databases" }, level: "core" },
      { name: "SQL", level: "core" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "amako",
    year: "2026",
    status: "online",
    title: { it: "Studio Amako", en: "Studio Amako" },
    subtitle: { it: "Sito web per una fotografa", en: "Website for a photographer" },
    context: {
      it: "Sito vetrina per il lavoro di una fotografa: presentazione, progetti in evidenza e contatti.",
      en: "Showcase website for a photographer's work: introduction, featured projects and contact details.",
    },
    did: {
      it: "Sviluppo del sito con WordPress ed Elementor, con personalizzazioni in CSS e scripting. Il sito è ospitato su Aruba.",
      en: "Development of the site with WordPress and Elementor, with custom CSS and scripting. The site is hosted on Aruba.",
    },
    tools: ["WordPress", "Elementor", "CSS", "Scripting", "Aruba"],
    link: "https://www.studioamako.com/",
    code: null,
  },
];
