import type { Locale } from '@/i18n/config';

const en = {
  meta: {
    title: 'Sinan-Deniz Çeviker · AI & Software Engineer in Groningen',
    description:
      'AI and software engineer in Groningen: machine-learning models, Python and TypeScript backends, web and mobile apps. 2nd of 89 teams at the AI Cup 2026.',
  },
  skip: 'Skip to content',
  status: { station: 'Groningen', local: 'local time', language: 'Language', cv: 'CV' },
  hero: {
    role: 'AI & software engineer in Groningen.',
    lede: 'I build machine-learning models and the software that puts them to work: backends, web and mobile apps. Finishing a BSc in Artificial Intelligence and developing part-time at the University of Groningen.',
    cv: 'Download CV',
    cvMeta: 'PDF',
    email: 'Email me',
  },
  scope: {
    label: 'Radar of roles, projects and results since 2022',
    caption: 'Every role, project and result since 2022. The nearer the centre, the more recent. Select a track to read it.',
    states: { sweep: 'Sweep', hold: 'Hold', locked: 'Locked' },
    tracks: 'tracks',
    hold: 'Hold sweep',
    resume: 'Resume sweep',
    readout: 'Selected track',
    fields: { kind: 'Kind', role: 'Role', org: 'With', period: 'When', result: 'Result' },
    next: 'Next track',
    previous: 'Previous track',
    strip: 'Show in the record',
  },
  kinds: { role: 'Role', project: 'Project', competition: 'Competition', education: 'Education' },
  record: {
    title: 'Experience and education',
    active: 'Active',
    completed: 'Completed',
  },
  work: {
    title: 'Selected work',
    body: 'Case studies from my studio, SNS Automation, where the client work lives.',
    open: 'Read the case study',
    all: 'All work on snsautomation.tech',
  },
  personal: { visit: 'Visit' },
  tools: { title: 'Tools I work with' },
  contact: {
    title: 'Let’s talk.',
    body: 'Hiring for an engineering role, or want to discuss one? Email is fastest. I reply within two working days.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV (PDF)',
  },
  footer: { rights: '© 2026 Sinan-Deniz Çeviker' },
  notFound: { title: 'No track on this bearing.', body: 'This page does not exist.', home: 'Back to the scope' },
};

export type Copy = typeof en;

const ro: Copy = {
  meta: {
    title: 'Sinan-Deniz Çeviker · Inginer AI și software în Groningen',
    description:
      'Inginer AI și software în Groningen: modele de machine learning, backend în Python și TypeScript, aplicații web și mobile. Locul 2 din 89 de echipe la AI Cup 2026.',
  },
  skip: 'Sari la conținut',
  status: { station: 'Groningen', local: 'ora locală', language: 'Limba', cv: 'CV' },
  hero: {
    role: 'Inginer AI și software în Groningen.',
    lede: 'Construiesc modele de machine learning și software-ul care le pune la treabă: backend, aplicații web și mobile. Termin licența în Inteligență Artificială și lucrez part-time ca developer la Universitatea din Groningen.',
    cv: 'Descarcă CV-ul',
    cvMeta: 'PDF',
    email: 'Scrie-mi',
  },
  scope: {
    label: 'Radar cu roluri, proiecte și rezultate din 2022',
    caption: 'Fiecare rol, proiect și rezultat din 2022 încoace. Cu cât mai aproape de centru, cu atât mai recent. Alege o urmă ca s-o citești.',
    states: { sweep: 'Baleiaj', hold: 'Oprit', locked: 'Fixat' },
    tracks: 'urme',
    hold: 'Oprește baleiajul',
    resume: 'Pornește baleiajul',
    readout: 'Urma selectată',
    fields: { kind: 'Tip', role: 'Rol', org: 'La', period: 'Când', result: 'Rezultat' },
    next: 'Urma următoare',
    previous: 'Urma anterioară',
    strip: 'Vezi în istoric',
  },
  kinds: { role: 'Rol', project: 'Proiect', competition: 'Competiție', education: 'Studii' },
  record: {
    title: 'Experiență și studii',
    active: 'În desfășurare',
    completed: 'Încheiate',
  },
  work: {
    title: 'Proiecte alese',
    body: 'Studii de caz de la studioul meu, SNS Automation, unde se află lucrările pentru clienți.',
    open: 'Citește studiul de caz',
    all: 'Toate proiectele pe snsautomation.tech',
  },
  personal: { visit: 'Vizitează' },
  tools: { title: 'Unelte cu care lucrez' },
  contact: {
    title: 'Hai să vorbim.',
    body: 'Recrutezi pentru un rol de inginer sau vrei să discutăm unul? Emailul e cel mai rapid. Răspund în două zile lucrătoare.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV (PDF)',
  },
  footer: { rights: '© 2026 Sinan-Deniz Çeviker' },
  notFound: { title: 'Nicio urmă pe acest azimut.', body: 'Pagina nu există.', home: 'Înapoi la radar' },
};

const copies: Record<Locale, Copy> = { en, ro };

export function getCopy(lang: Locale): Copy {
  return copies[lang];
}
