// All site content lives here — edit this file to change the text.

export const product = {
  name: 'StudyNest',
  logo: '/images/logo.svg',
  tagline: 'The calm, smart study planner for students.',
  headline: ['Study smarter,', 'not longer.'],
  description:
    'StudyNest turns your syllabus into a realistic weekly plan, keeps you focused with built-in timers, and shows exactly how far you have come — all in one place.',
  rotating: ['exams', 'assignments', 'projects', 'deadlines'],
  heroImage: '/images/screen-planner.svg',
  heroImageAlt:
    'StudyNest weekly planner screen showing colour-coded study sessions for Biology, Calculus, History and Physics, plus a list of upcoming deadlines',
  contactEmail: 'kaneeza.batool786@gmail.com',
  github: 'https://github.com/your-username/studynest',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'how', label: 'How it works' },
  { id: 'screens', label: 'Screens' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: 25, suffix: 'k+', label: 'Study sessions planned' },
  { value: 40, suffix: '%', label: 'Less time spent planning' },
  { value: 4.9, suffix: '★', label: 'Average beta rating', decimals: 1 },
  { value: 12, suffix: '', label: 'Subjects per plan' },
];

export const features = [
  { icon: '🗓️', title: 'Smart weekly planner', text: 'Add your exams and deadlines — StudyNest spreads the work into balanced daily sessions automatically.' },
  { icon: '⏱️', title: 'Focus timer', text: 'Pomodoro-style sessions with goals for each block, gentle breaks, and a distraction-free mode.' },
  { icon: '📈', title: 'Progress insights', text: 'See hours studied, streaks and subject balance at a glance so you know where to spend your next hour.' },
  { icon: '🃏', title: 'Flashcards', text: 'Turn notes into flashcards and review them with spaced repetition right inside your plan.' },
  { icon: '👥', title: 'Study groups', text: 'Share a plan with classmates, split up topics, and keep each other accountable.' },
  { icon: '🔔', title: 'Gentle reminders', text: 'Nudges before sessions and deadlines — never spammy, always switchable.' },
];

export const steps = [
  { n: '01', title: 'Add your subjects', text: 'Enter your courses, exam dates and assignments, or import them from your calendar.' },
  { n: '02', title: 'Get your plan', text: 'StudyNest builds a realistic schedule around your classes, free time and energy levels.' },
  { n: '03', title: 'Focus & track', text: 'Start a focus session with one tap and watch your progress grow week after week.' },
];

export const screens = [
  {
    id: 'planner',
    label: 'Planner',
    title: 'Your whole week, planned for you',
    text: 'Colour-coded sessions, upcoming deadlines and exam countdowns on a single screen. Drag a block to reschedule it and the rest of the plan adjusts.',
    image: '/images/screen-planner.svg',
    alt: 'StudyNest planner screen with a weekly grid of colour-coded study sessions and an upcoming deadlines list',
  },
  {
    id: 'focus',
    label: 'Focus timer',
    title: 'Deep work, one session at a time',
    text: 'A circular countdown timer with a checklist of goals for the session. Pause, skip a break, or extend when you are in the zone.',
    image: '/images/screen-focus.svg',
    alt: 'StudyNest focus timer screen showing a circular countdown at 17:42 and a checklist of session goals',
  },
  {
    id: 'progress',
    label: 'Progress',
    title: 'Proof that your effort adds up',
    text: 'Hours studied, tasks completed, focus score and a daily bar chart — with a streak counter to keep the momentum going.',
    image: '/images/screen-progress.svg',
    alt: 'StudyNest progress screen showing 18.5 hours studied, 42 tasks done, 92 percent average focus and a daily study-time bar chart',
  },
];

export const testimonials = [
  {
    quote: 'I used to spend Sunday evenings making a plan I never followed. Now it takes two minutes and I actually stick to it.',
    name: 'Ayesha R.',
    role: 'Medical student',
    avatar: '/images/avatar-1.svg',
    alt: 'Illustrated portrait of Ayesha',
  },
  {
    quote: 'The focus timer with session goals is a game changer. My exam prep finally feels under control.',
    name: 'Daniel K.',
    role: 'Engineering student',
    avatar: '/images/avatar-2.svg',
    alt: 'Illustrated portrait of Daniel',
  },
  {
    quote: 'Our study group shares one plan, so everyone knows who is covering what. No more messy group chats.',
    name: 'Sara M.',
    role: 'A-level student',
    avatar: '/images/avatar-3.svg',
    alt: 'Illustrated portrait of Sara',
  },
];

export const plans = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    blurb: 'Everything you need to get organised.',
    features: ['Weekly planner', 'Focus timer', 'Up to 4 subjects', 'Basic progress stats'],
    cta: 'Start for free',
  },
  {
    name: 'Pro',
    monthly: 4,
    yearly: 36,
    blurb: 'For students who want the full toolkit.',
    features: ['Unlimited subjects', 'Smart auto-rescheduling', 'Flashcards with spaced repetition', 'Advanced insights', 'Calendar sync'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Group',
    monthly: 10,
    yearly: 90,
    blurb: 'Plan and study together, up to 6 people.',
    features: ['Everything in Pro', 'Shared group plans', 'Topic assignment', 'Group progress board'],
    cta: 'Create a group',
  },
];

export const faqs = [
  { q: 'Is StudyNest really free?', a: 'Yes. The Free plan has no time limit and includes the planner and focus timer. Upgrade only if you want the extra features.' },
  { q: 'Which devices does it work on?', a: 'StudyNest runs in any modern browser on desktop, tablet and phone, and your plan syncs between them.' },
  { q: 'Can I import my class timetable?', a: 'You can import from Google Calendar, Outlook or any .ics file, and StudyNest plans around your classes automatically.' },
  { q: 'What happens if I miss a session?', a: 'Nothing bad! Smart rescheduling moves the missed work into your next free slots so you stay on track without guilt.' },
  { q: 'Is my data private?', a: 'Your plans belong to you. We never sell your data, and you can export or delete everything at any time.' },
];
