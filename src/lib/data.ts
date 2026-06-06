export const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About UDD', 
    href: '#', 
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Objectives', href: '/about/objectives' },
      { label: 'Org Structure', href: '/about/organization' }
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
    label: 'Governance',
    href: '#',
    children: [
      { label: 'Schemes', href: '/schemes' },
      { label: 'Departments', href: '/departments' },
      { label: 'Tenders', href: '/tenders' },
      { label: 'Grievance', href: '/grievance' }
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
  { value: 4, label: 'Districts of BTC', suffix: '', icon: 'map' },
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
  { name: 'Fakiragram Municipal Board', type: 'MB', district: 'Kokrajhar' },
  { name: 'Basugaon Municipal Board', type: 'MB', district: 'Chirang' },
  { name: 'Kajalgaon Municipal Board', type: 'MB', district: 'Chirang' },
  { name: 'Bijni Municipal Board', type: 'MB', district: 'Chirang' },
  { name: 'Tangla Municipal Board', type: 'MB', district: 'Udalguri' },
  { name: 'Mushalpur Municipal Board', type: 'MB', district: 'Baksa' },
  { name: 'Goreswar Municipal Board', type: 'MB', district: 'Baksa' },
  { name: 'Tamulpur Municipal Board', type: 'MB', district: 'Tamulpur' },
];

export const newsNotices = [
  { date: '20 May 2024', title: 'Notification regarding Ward Delimitation for ULB Elections', type: 'notice' },
  { date: '18 May 2024', title: 'Tender for Solid Waste Management Equipment at Kajalgaon', type: 'tender' },
  { date: '15 May 2024', title: 'UDD BTC Organizes Workshop on Climate Resilient Cities', type: 'news' },
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
