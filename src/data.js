// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Lavish Kumar',
  role: 'Full Stack Engineer',
  tenure: '(since 2022)',
  email: 'lavishh.tbi@gmail.com',
  location: 'Lucknow, India',
  resume: '/Lavish_Kumar_Resume.pdf',
  badge: { top: '20+', bottom: 'Hackathon wins' },
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/goalkeeperindian', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lavish-kumar-0057022aa/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:lavishh.tbi@gmail.com', icon: 'mail' },
]

export const works = [
  {
    id: 'makerspace',
    title: 'MakerSpace',
    kind: 'folder',
    tagline: 'Describe a machine. Get the whole build.',
    link: 'https://makersspaces.online/',
    linkLabel: 'makersspaces.online',
    stack: ['Next.js', 'React', 'Supabase'],
    points: [
      'AI hardware design tool: describe a machine in plain language and get wiring diagrams, a sourced bill of materials, 3D mechanical CAD with print specs and assembly steps in one workspace.',
      'Matches parts against real supplier catalogs (Adafruit, SparkFun, Digi-Key, Mouser, LCSC, Seeed Studio, Arduino) and lets you edit a design by conversation.',
      'Community gallery of published builds and a build contest for makers.',
    ],
  },
  {
    id: 'chub',
    title: 'C-Hub',
    kind: 'folder',
    tagline: 'The home base for a startup incubator.',
    link: 'https://chub-dashboard.vercel.app',
    linkLabel: 'chub-dashboard.vercel.app',
    stack: ['Auth', 'Admin portal', 'Vercel'],
    points: [
      'Web platform for a startup incubator covering its programmes (IdeaSchool and Incubation), campus infrastructure, portfolio startups, investors, partners and mentors.',
      'Startup applications with sign-up and login, an admin portal, a library and a startup jobs board.',
    ],
  },
  {
    id: 'clutch',
    title: 'Clutch',
    kind: 'folder',
    tagline: 'Every campus event, from approval to invite.',
    link: 'http://13.60.255.237:8000/',
    linkLabel: 'Live demo',
    stack: ['Approvals', 'Invites', 'Internal tool'],
    points: [
      'Internal app for every university department to host and manage any kind of event: get approvals, send and accept invites.',
      'Now expanding beyond the campus.',
    ],
  },
  {
    id: 'tally',
    title: 'Tally × AI Agents',
    kind: 'folder',
    tagline: 'Talk to your accounts from ChatGPT or Claude.',
    stack: ['ChatGPT', 'Claude', 'Tally Prime'],
    points: [
      'Led the integration at CU-TBI that lets users access their Tally Prime data directly from AI agents such as ChatGPT and Claude.',
      'AI agents can issue direct commands to update and modify records in Tally Prime.',
    ],
  },
  {
    id: 'web3',
    title: 'Web3 Tokens',
    kind: 'file',
    tagline: 'Smart contracts with painless wallets.',
    stack: ['Smart contracts', 'Tokens', 'Wallet integration'],
    points: [
      'Wrote smart contracts and built tokens at Anon / Arweave designed to make connecting a wallet easy.',
    ],
  },
]

// Timeline, newest first. `side` controls which side of the winding path it sits on.
export const journey = [
  { org: 'Cube', sub: 'Founders Space', role: 'Full Stack Engineer', when: 'Jul 2026 – Present', side: 'left' },
  { org: 'CU-TBI', sub: 'Tech Business Incubator', role: 'Technical Lead', when: 'Jan – Jun 2026', side: 'right' },
  { org: 'Arweave', sub: 'Anon', role: 'Web3 Developer', when: 'Jul – Dec 2025', side: 'left' },
  { org: 'Chandigarh University', sub: 'B.E. + M.E. CSE', role: 'Student', when: '2022 – Present', side: 'right' },
]

export const toolkit = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Three.js', 'GSAP',
  'PostgreSQL', 'Supabase', 'Prisma', 'Redis', 'WebRTC', 'OpenAI',
]

// Cards in the "personal" deck. Drag or click the top card to flip through.
export const deck = [
  { big: '20+', label: 'National hackathons won', note: 'Weekends well spent.', tone: '#1a1a1a', ink: '#f5f5f5' },
  { big: '3', label: 'International hackathons won', note: 'Same energy, bigger stage.', tone: '#3c8f86', ink: '#f5f5f5' },
  { big: '×3', label: 'Star Student Award', note: '2nd, 3rd and 4th year, in a row.', tone: '#f0c94d', ink: '#1a1a1a' },
  { big: 'SIH', label: 'Mentor, Smart India Hackathon', note: "For the college's internal round.", tone: '#e9e4da', ink: '#1a1a1a' },
  { big: 'B.E.+M.E.', label: 'Computer Science, Chandigarh University', note: 'Class XII: 91%.', tone: '#ffffff', ink: '#1a1a1a' },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'journey', label: 'Journey' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
