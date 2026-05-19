export const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About UDD', 
    href: '#', 
    children: [
      { label: 'Wings of UDD BTR', href: '/wings' },
      { label: 'Vision & Mission', href: '/vision' },
      { label: 'Org Structure', href: '/structure' },
      { label: 'Our Team', href: '/team' },
      { label: 'RTI', href: '/rti' }
    ]
  },
  { 
    label: 'Services', 
    href: '#', 
    children: [
      { label: 'PMAY-U', href: '/schemes/pmay' },
      { label: 'SBM-U', href: '/schemes/sbm' },
      { label: 'AMRUT', href: '/schemes/amrut' },
      { label: 'DAY-NULM', href: '/schemes/nulm' },
      { label: '15th Finance Commission', href: '/schemes/15fc' }
    ]
  },
  { 
    label: 'ULBs', 
    href: '#', 
    children: [
      { label: 'Municipal Boards (MBs)', href: '/ulb/mb' },
      { label: 'Town Committees (TCs)', href: '/ulb/tc' },
      { label: 'ULB Map', href: '/ulb/map' }
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: 12, label: 'Urban Local Bodies', suffix: '', icon: 'building' },
  { value: 4, label: 'Districts of BTR', suffix: '', icon: 'map' },
  { value: 3.5, label: 'Lakh+ Urban Population', suffix: 'L+', icon: 'users' },
  { value: 250, label: 'Project Milestones', suffix: '+', icon: 'zap' },
];

export const services = [
  { icon: 'id-card', label: 'Trade License Renewal', color: 'sky' },
  { icon: 'building', label: 'Online Building Permission', color: 'orange' },
  { icon: 'droplet', label: 'New Water Connection', color: 'emerald' },
  { icon: 'file-invoice-dollar', label: 'Property Tax Payment', color: 'purple' },
  { icon: 'baby', label: 'Birth & Death Records', color: 'rose' },
  { icon: 'trash', label: 'Garbage Collection Fee', color: 'indigo' },
  { icon: 'users', label: 'Self Help Group Registration', color: 'amber' },
  { icon: 'file-alt', label: 'Citizen Grievance Redressal', color: 'teal' },
];

export const currentProjects = [
  { title: 'Paver Block Pavement at Kokrajhar MB', status: 'Ongoing', province: 'Kokrajhar' },
  { title: 'Storm Water Drainage at Gossaigaon', status: 'Completed', province: 'Kokrajhar' },
  { title: 'High Mast Lights Installation in Chirang', status: 'Ongoing', province: 'Chirang' },
  { title: 'Water Supply Scheme Phase II - Kajalgaon', status: 'Ongoing', province: 'Chirang' },
];

export const ulbs = [
  { name: 'Kokrajhar Municipal Board', type: 'MB', district: 'Kokrajhar' },
  { name: 'Gossaigaon Municipal Board', type: 'MB', district: 'Kokrajhar' },
  { name: 'Kajalgaon Town Committee', type: 'TC', district: 'Chirang' },
  { name: 'Fakiragram Town Committee', type: 'TC', district: 'Kokrajhar' },
  { name: 'Bijni Town Committee', type: 'TC', district: 'Chirang' },
  { name: 'Basugaon Municipal Board', type: 'MB', district: 'Chirang' },
  { name: 'Udalguri Municipal Board', type: 'MB', district: 'Udalguri' },
  { name: 'Tangla Municipal Board', type: 'MB', district: 'Udalguri' },
  { name: 'Mushalpur Town Committee', type: 'TC', district: 'Baksa' },
];

export const newsNotices = [
  { date: '20 May 2024', title: 'Notification regarding Ward Delimitation for ULB Elections', type: 'notice' },
  { date: '18 May 2024', title: 'Tender for Solid Waste Management Equipment at Kajalgaon', type: 'tender' },
  { date: '15 May 2024', title: 'UDD BTR Organizes Workshop on Climate Resilient Cities', type: 'news' },
  { date: '10 May 2024', title: 'Applications invited for PMAY-U Beneficiary Led Construction', type: 'notice' },
];

export const importantLinks = [
  'Bodoland Territorial Council',
  'Govt. of Assam - UDD',
  'PMAY-Urban Portal',
  'Swachh Bharat Mission',
  'MyGov Bodoland',
  'MoHUA, Govt. of India',
  'Assam State Portal',
];
