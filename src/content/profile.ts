import type { Locale } from '@/i18n/config';

type L = Record<Locale, string>;

export const person = {
  name: 'Sinan-Deniz Çeviker',
  email: 'denizceviker12@gmail.com',
  whatsapp: { href: 'https://wa.me/40732405829', display: '+40 732 405 829' },
  linkedin: 'https://www.linkedin.com/in/sinan-ceviker',
  github: 'https://github.com/sinan2000',
  cv: '/cv_Ceviker_Sinan_Deniz.pdf',
  studio: 'https://snsautomation.tech',
  url: 'https://www.sinan.ro',
  /** Groningen Airport Eelde: the scope's home station. */
  station: 'EHGG',
  timeZone: 'Europe/Amsterdam',
} as const;

/** Track kinds double as the strip colours in the rack and the blip symbols on the scope. */
export type TrackKind = 'role' | 'project' | 'competition' | 'education';

export type Track = {
  /** ATC-style callsign: ASCII capitals, shown in the data tag and on the strip. */
  callsign: string;
  kind: TrackKind;
  /** Start of the track as a decimal year; sets the distance from the centre. */
  start: number;
  active: boolean;
  /** Bearing on the scope in degrees, clockwise from north. */
  bearing: number;
  /** Compact period for the data tag, ASCII only. */
  tag: string;
  role: L;
  org: L;
  period: L;
  result: L;
  details: L;
  links: { label: L; href: string }[];
};

export const tracks: Track[] = [
  {
    callsign: 'CAL',
    kind: 'project',
    start: 2026.75,
    active: true,
    bearing: 160,
    tag: 'BETA',
    role: { en: 'Built it, solo', ro: 'Construită de mine, singur' },
    org: { en: 'Calories, own app', ro: 'Calories, aplicație proprie' },
    period: { en: 'Oct 2026, public beta', ro: 'oct. 2026, beta public' },
    result: {
      en: 'An offline-first calorie and macro tracker with barcode scanning, an offline food database and a target that adapts to your weight. Everything stays on the phone.',
      ro: 'O aplicație de calorii și macronutrienți care funcționează offline, cu scanare de coduri de bare, bază de alimente offline și o țintă care se adaptează după greutate. Totul rămâne pe telefon.',
    },
    details: {
      en: 'Expo and React Native with SQLite and Drizzle on the device, the ANSES-CIQUAL food table bundled, Open Food Facts for barcodes, Apple Health and Health Connect sync.',
      ro: 'Expo și React Native cu SQLite și Drizzle pe dispozitiv, tabelul de alimente ANSES-CIQUAL inclus, Open Food Facts pentru coduri de bare, sincronizare cu Apple Health și Health Connect.',
    },
    links: [{ label: { en: 'Case study', ro: 'Studiu de caz' }, href: 'https://snsautomation.tech/work/calories' }],
  },
  {
    callsign: 'COUP',
    kind: 'project',
    start: 2026.3,
    active: true,
    bearing: 52,
    tag: '26-NOW',
    role: { en: 'Co-founder & CTO', ro: 'Co-fondator și CTO' },
    org: { en: 'coup', ro: 'coup' },
    period: { en: '2026 to now', ro: '2026 până acum' },
    result: {
      en: 'A student marketplace with its own currency, live on the App Store and Google Play, with 19 partner venues in Groningen.',
      ro: 'Un marketplace pentru studenți cu propria monedă, live în App Store și Google Play, cu 19 parteneri în Groningen.',
    },
    details: {
      en: 'Expo app, Next.js admin, and a Supabase/Postgres backend with row-level security, scheduled jobs and edge functions. Over 2,200 automated tests.',
      ro: 'Aplicație Expo, panou de administrare Next.js și backend Supabase/Postgres cu row-level security, joburi programate și edge functions. Peste 2.200 de teste automate.',
    },
    links: [{ label: { en: 'Case study', ro: 'Studiu de caz' }, href: 'https://snsautomation.tech/work/coup' }],
  },
  {
    callsign: 'TNO',
    kind: 'role',
    start: 2026.1,
    active: false,
    bearing: 302,
    tag: '0226-0626',
    role: { en: 'Software engineering intern', ro: 'Stagiar inginer software' },
    org: { en: 'TNO', ro: 'TNO' },
    period: { en: 'Feb to Jun 2026', ro: 'feb.–iun. 2026' },
    result: {
      en: 'Built a Python MCP server that gives AI coding assistants direct access to TNO’s library of data standards.',
      ro: 'Am construit un server MCP în Python care oferă asistenților AI de programare acces direct la biblioteca de standarde de date a TNO.',
    },
    details: {
      en: 'Hexagonal architecture, Pydantic v2 and async httpx, stdio and HTTP transports. An 80% coverage gate, strict mypy, Docker and CI.',
      ro: 'Arhitectură hexagonală, Pydantic v2 și httpx asincron, transport stdio și HTTP. Prag de 80% acoperire cu teste, mypy strict, Docker și CI.',
    },
    links: [],
  },
  {
    callsign: 'AICUP',
    kind: 'competition',
    start: 2026.1,
    active: false,
    bearing: 198,
    tag: '2ND/89',
    role: { en: 'Team Geto-Dacians', ro: 'Echipa Geto-Dacians' },
    org: { en: 'AI Cup 2026 · Team Epoch, TU Delft · TNO', ro: 'AI Cup 2026 · Team Epoch, TU Delft · TNO' },
    period: { en: 'Feb to Apr 2026', ro: 'feb.–apr. 2026' },
    result: {
      en: '2nd of 89 teams and 300 students, with a €2,000 prize: bird species from radar tracks, to protect birds around wind farms.',
      ro: 'Locul 2 din 89 de echipe și 300 de studenți, cu un premiu de 2.000 €: specii de păsări din urme radar, pentru protecția lor în jurul parcurilor eoliene.',
    },
    details: {
      en: 'TabPFN at the core with gradient-boosted trees, flight features with the wind’s effect removed, and a prior from real migration counts.',
      ro: 'TabPFN în centru, alături de arbori de decizie, caracteristici de zbor din care s-a scos efectul vântului și o corecție din numărători reale de migrație.',
    },
    links: [
      { label: { en: 'Case study', ro: 'Studiu de caz' }, href: 'https://snsautomation.tech/work/ai-cup-2026' },
      { label: { en: 'Code on GitHub', ro: 'Codul pe GitHub' }, href: 'https://github.com/sinan2000/ai_epoch_getodacians' },
    ],
  },
  {
    callsign: 'YOUWE',
    kind: 'role',
    start: 2025.67,
    active: false,
    bearing: 254,
    tag: '0925-0226',
    role: { en: 'Machine learning intern', ro: 'Stagiar machine learning' },
    org: { en: 'Youwe', ro: 'Youwe' },
    period: { en: 'Sep 2025 to Feb 2026', ro: 'sept. 2025–feb. 2026' },
    result: {
      en: 'A sprint-health classifier on Jira data: 96% accuracy on unhealthy sprints from the first day of the sprint.',
      ro: 'Un clasificator al sănătății sprinturilor pe date Jira: 96% acuratețe pe sprinturile cu probleme încă din prima zi.',
    },
    details: {
      en: 'Five-person team. Python, pandas, scikit-learn, LightGBM, Optuna, SHAP and Streamlit, with models built to hold up under distribution shift.',
      ro: 'Echipă de cinci. Python, pandas, scikit-learn, LightGBM, Optuna, SHAP și Streamlit, cu modele construite să reziste la schimbări de distribuție.',
    },
    links: [],
  },
  {
    callsign: 'RUG',
    kind: 'role',
    start: 2025.6,
    active: true,
    bearing: 336,
    tag: '0825-NOW',
    role: { en: 'Developer, part-time', ro: 'Developer, part-time' },
    org: { en: 'University of Groningen', ro: 'Universitatea din Groningen' },
    period: { en: 'Aug 2025 to now', ro: 'aug. 2025 până acum' },
    result: {
      en: 'Dashboards and mapping tools for the university’s buildings.',
      ro: 'Dashboarduri și instrumente de hărți pentru clădirile universității.',
    },
    details: {
      en: 'Built with university stakeholders through regular demos and feedback rounds.',
      ro: 'Construite împreună cu echipele universității, prin demonstrații și runde de feedback regulate.',
    },
    links: [],
  },
  {
    callsign: 'SNS',
    kind: 'project',
    start: 2024.6,
    active: true,
    bearing: 112,
    tag: '24-NOW',
    role: { en: 'Founder', ro: 'Fondator' },
    org: { en: 'SNS Automation', ro: 'SNS Automation' },
    period: { en: '2024 to now', ro: '2024 până acum' },
    result: {
      en: 'A one-person software studio: seven client websites live in Romania and Turkey, and a Bluetooth machine-control app sold with industrial machinery.',
      ro: 'Un studio de software de o persoană: șapte site-uri pentru clienți, live în România și Turcia, și o aplicație Bluetooth de comandă a utilajelor, vândută împreună cu acestea.',
    },
    details: {
      en: 'Next.js and Payload CMS sites, Expo apps, and AI automations for small businesses.',
      ro: 'Site-uri Next.js și Payload CMS, aplicații Expo și automatizări AI pentru firme mici.',
    },
    links: [{ label: { en: 'snsautomation.tech', ro: 'snsautomation.tech' }, href: 'https://snsautomation.tech' }],
  },
  {
    callsign: 'BSC',
    kind: 'education',
    start: 2023.67,
    active: true,
    bearing: 190,
    tag: '0923-26',
    role: { en: 'BSc Artificial Intelligence', ro: 'Licență în Inteligență Artificială' },
    org: { en: 'University of Groningen', ro: 'Universitatea din Groningen' },
    period: { en: 'Sep 2023 to 2026', ro: 'sept. 2023–2026' },
    result: {
      en: 'Thesis on how uncertainty in radar measurements carries through a classifier’s predictions.',
      ro: 'Lucrare de licență despre cum se propagă incertitudinea măsurătorilor radar în predicțiile unui clasificator.',
    },
    details: {
      en: 'Specialised in machine learning (neural networks, reinforcement learning, uncertainty in ML) and robotics.',
      ro: 'Specializare în machine learning (rețele neuronale, reinforcement learning, incertitudine în ML) și robotică.',
    },
    links: [],
  },
  {
    callsign: 'TA',
    kind: 'role',
    start: 2026.25,
    active: true,
    bearing: 355,
    tag: '0426-NOW',
    role: { en: 'Teaching assistant', ro: 'Asistent de predare' },
    org: { en: 'University of Groningen', ro: 'Universitatea din Groningen' },
    period: { en: 'Apr 2026 to now', ro: 'apr. 2026 până acum' },
    result: {
      en: 'Mentor student teams building an autonomous-driving robot end to end: lane following, traffic-sign recognition and behaviour planning.',
      ro: 'Îndrum echipe de studenți care construiesc de la zero un robot cu conducere autonomă: urmărirea benzii, recunoașterea indicatoarelor și planificarea comportamentului.',
    },
    details: {
      en: 'Debugging across the robotics stack: real-time image processing, PID control and lidar-based perception.',
      ro: 'Depanare pe tot stack-ul robotic: procesare de imagine în timp real, control PID și percepție cu lidar.',
    },
    links: [],
  },
  {
    callsign: 'HELLA',
    kind: 'role',
    start: 2023.37,
    active: false,
    bearing: 285,
    tag: '0523-0823',
    role: { en: 'Software development engineer', ro: 'Inginer dezvoltare software' },
    org: { en: 'HELLA, Timișoara', ro: 'HELLA, Timișoara' },
    period: { en: 'May to Aug 2023', ro: 'mai–aug. 2023' },
    result: {
      en: 'Developed and validated automotive software components.',
      ro: 'Am dezvoltat și validat componente software pentru industria auto.',
    },
    details: {
      en: 'Rhapsody, DOORS and PTC Integrity for design and requirements; Vector CANoe and DaVinci Developer Classic; component testing and validation with WinIdea.',
      ro: 'Rhapsody, DOORS și PTC Integrity pentru design și cerințe; Vector CANoe și DaVinci Developer Classic; testarea și validarea componentelor cu WinIdea.',
    },
    links: [],
  },
  {
    callsign: 'CONTI',
    kind: 'role',
    start: 2022.85,
    active: false,
    bearing: 250,
    tag: '1122-0523',
    role: { en: 'Software integration developer', ro: 'Developer integrare software' },
    org: { en: 'Continental, Timișoara', ro: 'Continental, Timișoara' },
    period: { en: 'Nov 2022 to May 2023', ro: 'nov. 2022–mai 2023' },
    result: {
      en: 'Integrated automotive software stacks on QNX with custom build systems.',
      ro: 'Am integrat stack-uri software auto pe QNX, cu sisteme de build proprii.',
    },
    details: {
      en: 'Automated build, test and integration workflows with Jenkins and CMake, in Agile teams.',
      ro: 'Am automatizat fluxurile de build, testare și integrare cu Jenkins și CMake, în echipe Agile.',
    },
    links: [],
  },
];

export const capabilities: { code: string; area: L; tools: string }[] = [
  { code: 'ML', area: { en: 'Machine learning', ro: 'Machine learning' }, tools: 'Python, pandas, scikit-learn, LightGBM, XGBoost, CatBoost, TabPFN, PyTorch, Ultralytics YOLO, OpenCV, SHAP, Optuna' },
  { code: 'BE', area: { en: 'Backends and data', ro: 'Backend și date' }, tools: 'Python, Pydantic, httpx, TypeScript, Node.js, Hono, PostgreSQL, Supabase, Drizzle, REST and OpenAPI, Docker, CI' },
  { code: 'WEB', area: { en: 'Web', ro: 'Web' }, tools: 'Next.js, React, Payload CMS, Sanity, Tailwind CSS, Playwright, Vitest' },
  { code: 'MOB', area: { en: 'Mobile and desktop', ro: 'Mobil și desktop' }, tools: 'Expo, React Native, SQLite, Drizzle, Tauri' },
  { code: 'EMB', area: { en: 'Embedded and automotive', ro: 'Embedded și auto' }, tools: 'Bluetooth LE and Classic, PLC protocols, QNX, CMake, Jenkins, Vector CANoe, DaVinci Developer' },
];

export const personal = {
  name: 'ceviker.xyz',
  href: 'https://www.ceviker.xyz',
  title: { en: 'The Çeviker family tree', ro: 'Arborele familiei Çeviker' },
  body: {
    en: 'An interactive family tree I built for my family: generations laid out automatically as a graph you can pan and zoom, where clicking anyone brings their branch into view.',
    ro: 'Un arbore genealogic interactiv construit pentru familia mea: generațiile sunt așezate automat într-un graf pe care îl poți muta și mări, iar un clic pe oricine îi aduce ramura în centru.',
  },
  stack: 'Next.js, React Flow, dagre',
} satisfies { name: string; href: string; title: L; body: L; stack: string };
