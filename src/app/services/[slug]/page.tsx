"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Leaf, 
  Droplet, 
  Trash2, 
  Lightbulb, 
  Map, 
  Activity, 
  Clock, 
  Coins, 
  Globe, 
  FileText, 
  PhoneCall, 
  Mail, 
  Search, 
  CreditCard, 
  ChevronRight, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Printer,
  FileCheck,
  CheckCircle2,
  HelpCircle,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  Home,
  Check,
  ClipboardList,
  ArrowLeft,
  Award
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Reusable Custom Checkmark Circle component styled after the Flaticon outline design (tick crosses circle with a precise gap at crossing points)
const CustomCircleCheck = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        <mask id="pro-tick-mask">
          {/* Fully visible layout by default */}
          <rect x="-10" y="-10" width="44" height="44" fill="white" />
          {/* Cutout wider track around the tick path. 
              The thick black line creates a transparency gap on the masked circle under the path of the tick. */}
          <path
            d="M5.5 13 L9.5 17 L20 6.5"
            stroke="black"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </mask>
      </defs>
      {/* Circle is drawn with the cutout mask applied */}
      <circle cx="11" cy="13" r="8" mask="url(#pro-tick-mask)" />
      {/* Standard tick drawn beautifully on top, appearing to cross with a professional gap flanking the line */}
      <path d="M5.5 13 L9.5 17 L20 6.5" />
    </svg>
  );
};

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface FeeRow {
  category: string;
  fee: string;
  extra: string;
}

interface Faq {
  q: string;
  a: string;
}

interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  iconName: 'green' | 'water' | 'sbm' | 'obps' | 'lights' | 'gis' | 'drainage' | 'trade';
  processing: string;
  fee: string;
  mode: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  noticeTitle: string;
  noticeContent: string;
  steps: Step[];
  documents: string[];
  eligibility: string[];
  fees: FeeRow[];
  faqs: Faq[];
  helpline: string;
  email: string;
  officeHours: string;
  sampleCode: string;
}

// Global dynamic services database structure
const SERVICES_DB: Record<string, ServiceDetail> = {
  'green-mission': {
    slug: 'green-mission',
    title: 'Bodoland Green Clean Mission',
    category: 'Civic Programs',
    iconName: 'green',
    processing: '3 - 5 Working Days',
    fee: 'Free of Cost',
    mode: 'Online Voluntary Request',
    overviewHeading: 'Green Clean Mission Overview',
    overviewParagraphs: [
      'The Bodoland Green Clean Mission is an eco-restoration initiative aiming to expand public canopy structures, develop community gardens, and drive tree plantations inside all major BTC municipal sectors.',
      'Through this service, registered property owners or neighborhood councils can sign up as Green Volunteers, request custom organic saplings, and propose municipal roadside spaces for automated tree guard allocations.'
    ],
    noticeTitle: 'Voluntary Guidelines',
    noticeContent: 'All registered saplings are delivered with high-durability metallic or hybrid tree-guards directly at the location. Periodic growth reviews are scheduled by municipal botanical departments.',
    steps: [
      { num: "1", title: "Apply Online", desc: "Submit your volunteer credentials, proposed site location and select the type of indigenous saplings." },
      { num: "2", title: "Verify Ward Area", desc: "Zonal botanical coordinators evaluate site parameters, spacing and municipal permissions." },
      { num: "3", title: "Saplings Allocation", desc: "Approved tree stocks are reserved and assigned at the municipal central distribution nursery." },
      { num: "4", title: "On-site Planting & Protection", desc: "Saplings are planted with protective tree-guards and logged on BTR geographic tracker maps." }
    ],
    documents: [
      "Voter ID or Aadhaar Card of volunteering individual",
      "Address Proof / Coordinate reference of proposed planting site",
      "No Objection Certificate (NOC) from local Ward Development Committee",
      "High-resolution photograph of the proposed site location"
    ],
    eligibility: [
      "Resident of Bodoland Territorial Region (BTR) municipal circles",
      "Committed to watering, nursing, and securing tree protection",
      "Sufficient space available on local residential compound or public boundary offsets"
    ],
    fees: [
      { category: "General Household Voluntary Req", fee: "Free of Cost", extra: "Includes 1 premium organic sapling & metal tree-guard" },
      { category: "Neighborhood Ward Plantation Drive", fee: "Free of Cost", extra: "Bulk supply certificate & SBM fertilizer kit option" },
      { category: "Corporate & Commercial Institutional Request", fee: "Free of Cost", extra: "Subject to environmental green-bylaw declarations" }
    ],
    faqs: [
      { q: "Who can apply as a Green Volunteer?", a: "Any citizen living within BTR municipal borders can apply. Non-profits, schools, and youth clubs are also encouraged to register bulk drives." },
      { q: "Are saplings and tree-guards completely free?", a: "Yes, both saplings and durable tree guards are distributed free of cost under the environmental restoration corpus of UDD BTC." },
      { q: "How can I request maintenance help?", a: "If a sapling is experiencing disease, you can submit a grievance ticket. Our botanical expert will visit to apply treatment compounds." }
    ],
    helpline: "8812825013",
    email: "greenmission@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/GREEN/101"
  },
  'water-supply': {
    slug: 'water-supply',
    title: 'AMRUT Water Supply Connection',
    category: 'Public Utilities',
    iconName: 'water',
    processing: '7 - 10 Working Days',
    fee: 'As per connection tier',
    mode: 'Online & Physical Clearing',
    overviewHeading: 'AMRUT Water Connection Overview',
    overviewParagraphs: [
      'The AMRUT Mission guarantees stable, treated pipe water connections to all eligible properties inside BTR towns. Built using modern steel transmission lines, state-of-the-art filtration reservoirs, and centralized IoT monitoring.',
      'Property owners can apply to install fresh plinth connections, calculate water security deposits, select meter variants, and coordinate with licensed engineering plumbers for installation clearances.'
    ],
    noticeTitle: 'Sizing & Plumbing Guidelines',
    noticeContent: 'Technical assessments are finalized by PHE division surveyors within 5 days of application. Real connection activation is scheduled immediately post payment of security deposits.',
    steps: [
      { num: "1", title: "Submit Application", desc: "Select property category, specify desired connection diameter, and submit holding verification docket." },
      { num: "2", title: "Site Assessment", desc: "PHE department engineers visit your property location to verify pipe distance and elevation margins." },
      { num: "3", title: "Deposit Clearance", desc: "Pay the required connection setup fees and security deposits securely via our digital portal." },
      { num: "4", title: "Meter Installation & Flow", desc: "Authorized municipal plumbers run pipes, install volumetric flow meters, and release water supply." }
    ],
    documents: [
      "Property Assessment Holding Card (issued by ULB)",
      "Registered purchase deed or occupancy document",
      "Owner Identity validation (Aadhaar, Voter Card, or PAN)",
      "Coordinating plumber NOC if tapping shared auxiliary lines"
    ],
    eligibility: [
      "Must own a legal structure (residential, commercial, or industrial) inside BTR limits",
      "Has cleared all property assessment dues up to current fiscal year",
      "Connection site lies within distance margins of active AMRUT main distribution grid"
    ],
    fees: [
      { category: "Residential domestic connection (0.5 inch)", fee: "₹3,500 setup deposit", extra: "Includes smart water meter and core plumbing fittings" },
      { category: "Residential rental connection (0.75 inch)", fee: "₹5,800 setup deposit", extra: "Includes smart water meter and high pressure nodes" },
      { category: "Commercial Establishments (1.0 inch)", fee: "₹12,000 setup deposit", extra: "Subject to seasonal commercial consumption taxes" }
    ],
    faqs: [
      { q: "How long does it take to activate the flow?", a: "Post registration, inspection is conducted in 5 business days. Once deposit fees are cleared, actual plumbing is completed in 48 hours." },
      { q: "Is water usage billed monthly?", a: "Yes, water usage is recorded via volumetric smart meters and billed monthly under your municipal property account." }
    ],
    helpline: "8812825014",
    email: "watersupply@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/WATER/201"
  },
  'solid-waste': {
    slug: 'solid-waste',
    title: 'Integrated Solid Waste Management',
    category: 'Public Utilities',
    iconName: 'sbm',
    processing: 'Daily Services',
    fee: 'Covered under urban taxes',
    mode: 'Online Redressal / Requests',
    overviewHeading: 'Waste Management Overview',
    overviewParagraphs: [
      'Empowered by the Swachh Bodoland Mission, we operate structured daily door-to-door garbage collection, source segregation campaigns, localized composting plants, and commercial debris clearing.',
      'Citizens and business owners use this portal to register missed trash collection reports, request specialized bulk waste trucks, log roadside garbage accumulations, or order organic fertilizers from composting units.'
    ],
    noticeTitle: 'Segregation Mandate',
    noticeContent: 'Residents must mandatory segregate wet (green bin) and dry (blue bin) trash. Disposal of untreated hazardous or hospital scrap in domestic bins attracts immediate code penalties.',
    steps: [
      { num: "1", title: "Log Ticket / Request", desc: "Select the query class (e.g., bin request, litter spot report, commercial transit) and provide details." },
      { num: "2", title: "Crew Mapping", desc: "The software identifies the nearest Swachh Bharat vehicle route and routes the ticket to the driver." },
      { num: "3", title: "Site Action", desc: "Sanitation workers visit the noted location to sweep, clear trash, and treat with organic sanitizers." },
      { num: "4", title: "Status Photo Close", desc: "Workers upload site clearance photos to close the ticket and prompt text updates to citizens." }
    ],
    documents: [
      "Accurate address or latitude-longitude coordinate references",
      "Photograph of the waste accumulation site / issue",
      "Applicant Mobile Contact reference"
    ],
    eligibility: [
      "Open to all individuals, communities, and commercial institutions within active BTR municipality councils"
    ],
    fees: [
      { category: "Daily Household Door Garbage collection", fee: "Free of Cost", extra: "Covered within annual municipal service taxes" },
      { category: "Litter Hotspot Clearing Request", fee: "Free of Cost", extra: "Addressed as a priority public health service" },
      { category: "Commercial Bulk Waste Truck (1.5 Tons)", fee: "₹1,500 per trip", extra: "For party banquets, building scrap, or heavy logistics" }
    ],
    faqs: [
      { q: "At what time does garbage collection start?", a: "Residential route collections begin at 7:00 AM daily. We request you to place segregated bins at your gate prior to this hour." },
      { q: "How can I buy organic municipal compost?", a: "Compost processed under our green sorting units is sold at municipal nurseries for a nominal ₹5/kg to encourage garden growth." }
    ],
    helpline: "8812825015",
    email: "solidwaste@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/WASTE/301"
  },
  'building-permission': {
    slug: 'building-permission',
    title: 'Online Building Permission System',
    category: 'Digital Governance',
    iconName: 'obps',
    processing: '14 - 21 Working Days',
    fee: 'As per plinth square yards',
    mode: '100% Digital Clearances',
    overviewHeading: 'OBPS Clearance Overview',
    overviewParagraphs: [
      'The Online Building Permission System (OBPS) streamlines structural reviews, plan validations, and zoning clearances. Eliminates manual slow files by letting architects upload proposal files directly.',
      'Integrating geographic zoning registries ensures immediate validation of layout setbacks, road expansion offsets, territorial bypass factors, seismic criteria, and environmental parameters.'
    ],
    noticeTitle: 'Filing Prerequisite',
    noticeContent: 'All structural drawing blueprints must be prepared in CAD formats aligned with Unified BTR Building Bylaws. Physical layout markings are checked post dynamic file checks.',
    steps: [
      { num: "1", title: "Architect Registry", desc: "Choose a registered structural designer or architect to compile and upload file parameters." },
      { num: "2", title: "Draft Upload", desc: "Submit building plan drawings, patta documents, land deeds, and municipal holding tax papers." },
      { num: "3", title: "Bylaw Check", desc: "Automated engine reviews plan files for setbacks, height boundaries, ventilation ratio and road margins." },
      { num: "4", title: "Approval Emission", desc: "Clear online permission fees and download the certified digital building license certificate." }
    ],
    documents: [
      "Original land deed registry & latest possession certificates",
      "Accurate CAD blueprints compiled by chartered architects",
      "Structural Stability Certificate (signed by certified engineer)",
      "Unified Land Revenue tax clearance receipt",
      "No Objection Certificate (NOC) from immediate neighbors"
    ],
    eligibility: [
      "Property layouts residing legally inside municipal borders",
      "Filing must be routed via registered draftsmen listed with the BTR Municipal panel"
    ],
    fees: [
      { category: "Residential House (up to G+1 Floors)", fee: "₹15 / sq. mt. plinth", extra: "Includes structural check and line-level demarcation" },
      { category: "Residential Multi-family (up to G+4 Floors)", fee: "₹35 / sq. mt. plinth", extra: "Includes fire clearance verify and soil tests review" },
      { category: "Commercial & Business Complex", fee: "₹75 / sq. mt. plinth", extra: "Includes safety audits, parking ratio tax, and drainage cess" }
    ],
    faqs: [
      { q: "Do I need to visit the municipal office physically?", a: "No, the OBPS portal is 100% digital. Draft submission, fee payment, and license download are all done online." },
      { q: "What is the validation term of building permission?", a: "Once structural permission is emitted, construction must begin within 3 years. The permit can be renewed for an additional 2 years if needed." }
    ],
    helpline: "8812825016",
    email: "obps@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/OBPS/401"
  },
  'street-lighting': {
    slug: 'street-lighting',
    title: 'Smart LED Street Lighting',
    category: 'Civic Programs',
    iconName: 'lights',
    processing: 'Resolves in 48 Hours',
    fee: 'Free Public Service',
    mode: 'Online Reporting Grid',
    overviewHeading: 'Street Lighting Mission Overview',
    overviewParagraphs: [
      'The Smart LED Street Lighting program serves to make municipal roads, public crossings, and narrow lanes safer for commuters by phasing out older mercury sodium bulbs.',
      'Through this reporting module, citizens can report non-functioning lights, alert teams regarding dark-zones, request structural high-mast layouts, or report lines experiencing timing faults.'
    ],
    noticeTitle: 'SLA Timeline Bounds',
    noticeContent: 'All reported streetlight fixture replacements are handled by local electrical shifts within 48 hours. Constructing fresh high-masts is subject to annual ward budgetary sanctions.',
    steps: [
      { num: "1", title: "Note Light Pole ID", desc: "Locate and note the stencil painted reference number found on the light pole." },
      { num: "2", title: "Submit Complaint", desc: "Select 'LED broken/not glowing' class, input Pole ID, and provide nearby landmarks." },
      { num: "3", title: "Crew Dispatch", desc: "Central monitoring assigns municipal electrical crane trucks with replacements to your route." },
      { num: "4", title: "On-site Fix", desc: "A new smart energy-efficient LED light is fitted, restoring brightness on the lane." }
    ],
    documents: [
      "Pole Alphanumeric Identifier Code (stenciled in blue/white)",
      "Detailed nearby landmark descriptor text",
      "Applicant Mobile Contact reference for site coordination"
    ],
    eligibility: [
      "Open to all individuals, neighborhood clubs, and merchants residing in BTR municipal areas"
    ],
    fees: [
      { category: "Streetlight LED Fixture Repair / Swap", fee: "Free of Cost", extra: "Handled under urban civic asset maintenance funds" },
      { category: "New High-Mast Placement Query", fee: "Free / Public Project", extra: "Decided in consultations with ward development committees" }
    ],
    faqs: [
      { q: "Where can I find the Pole ID?", a: "The pole ID is always stenciled in high-contrast paint near the base of the metal street pole (e.g. KMB-SL-501)." },
      { q: "Can I request light layout in layout tracks?", a: "Yes, you can register a 'New lamp proposal' in our support portal, specifying the dark-spot lane. Neighbors can add supporting votes online." }
    ],
    helpline: "8812825017",
    email: "streetlights@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/LIGHT/501"
  },
  'spatial-mapping': {
    slug: 'spatial-mapping',
    title: 'GIS-Based Spatial Mapping & Records',
    category: 'Planning & Zoning',
    iconName: 'gis',
    processing: 'Instant Database Lookup',
    fee: 'Free Public Search',
    mode: 'Fully Digital Records',
    overviewHeading: 'GIS Spatial Mapping Overview',
    overviewParagraphs: [
      'Applying drone spatial photogrammetry, territory cadastral records, and geographical indicators, we have digitized land zones across our 12 primary urban boards.',
      'Property owners, real-estate purchasers, and strategic builders can query GIS land layers to track zoning allocations (residential, business, eco-reserve) and identify public master plan buffers.'
    ],
    noticeTitle: 'Legal Coordinates Disclaimer',
    noticeContent: 'Geospatial records are emitted for planning references and design validations. Judicial mutations or transfer disputes require paper deeds issued by revenue units.',
    steps: [
      { num: "1", title: "Enter Holdings details", desc: "Provide your unique property holding ID, survey patta or municipal dag number." },
      { num: "2", title: "Retrieve Map Grid", desc: "The portal loads interactive maps highlighting boundaries and land-use tags." },
      { num: "3", title: "Inspect Restrictions", desc: "Check if the property holds any constraints (drainage offsets, forest buffers, green belts)." },
      { num: "4", title: "Download spatial sheet", desc: "Export the GIS certified cadastral boundary overlay layout for architectural designs." }
    ],
    documents: [
      "Property assessment holding ID or Land Dag Patta card",
      "Owner Identity details (Passport or Aadhaar card copy)",
      "Original land sketch card of local survey units (if uploading differences)"
    ],
    eligibility: [
      "Available to any land owners, potential property buyers, and listed engineers inside BTR"
    ],
    fees: [
      { category: "Dynamic Interactive Web-map lookup", fee: "Free of Cost", extra: "Accessible on desktop or mobile at any hour" },
      { category: "Certified Geo-referenced layout PDF", fee: "₹250 per page", extra: "Includes QR stamps certifying spatial parameters boundary" }
    ],
    faqs: [
      { q: "What should I do if my boundary boundaries map is incorrect?", a: "You can file a 'GIS correction request' online. Attach your land registry deed and survey maps, and a GPS unit will re-verify the borders." },
      { q: "Can we build on a GIS-reserve zone?", a: "No, construction is strictly disallowed in protected zones (recreation belts, flood buffers, forest lines) to prevent damage risks." }
    ],
    helpline: "8812825018",
    email: "gismapping@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/GIS/601"
  },
  'drainage-schemes': {
    slug: 'drainage-schemes',
    title: 'Stormwater Drainage Schemes',
    category: 'Public Utilities',
    iconName: 'drainage',
    processing: 'Seasonal Pre-Monsoon Cleanups',
    fee: 'Fully Funded Public service',
    mode: 'Online Complaint Redressal',
    overviewHeading: 'Urban Stormwater Drainage Overview',
    overviewParagraphs: [
      'Managing seasonal heavy rainfall in BTR towns prompts active maintenance of deep masonry storm drains, concrete bypass channels, and high-capacity river outfall stations.',
      'Through this service system, neighborhoods flag blocked concrete conduits, request scheduled pre-monsoon desiltation cycles, file complaints on commercial refuse dumping, or ask for pump deployments in flooded spaces.'
    ],
    noticeTitle: 'Urban Maintenance Notice',
    noticeContent: 'Primary storm sewer vacuum sweeps are executed intensively during April-May before major monsoon downpours. Citizens must avoid dumping polythene or waste in waterways.',
    steps: [
      { num: "1", title: "Identify Drainage Jam", desc: "Pinpoint the drainage blockage site and notice any concrete structure damages." },
      { num: "2", title: "Lodge Complaint Ticket", desc: "Submit the location, specify block severity (minor/severe flooding), and attach a photo." },
      { num: "3", title: "Civil Team Assigned", desc: "The drainage division maps structural vacuum trucks or desilting physical personnel to the ticket." },
      { num: "4", title: "Conduit Cleaned & Logged", desc: "Crews unblock the channel, clear debris, apply sanitization spray, and close the status." }
    ],
    documents: [
      "Clear photographic view of the clogged drain/conduit",
      "Pinpoint landmark or closest shop address",
      "Applicant contact identifier for validation"
    ],
    eligibility: [
      "Residents, commercial trader associations, and wards within BTR urban boards"
    ],
    fees: [
      { category: "Masonry Drain Silt Clearance / Vacuuming", fee: "Free of Cost", extra: "Conducted routinely by municipal drainage units" },
      { category: "Emergency Flood Water Pump-out dispatch", fee: "Free of Cost", extra: "Mobilized during storm contingencies and high waterlogs" }
    ],
    faqs: [
      { q: "When is pre-monsoon maintenance conducted?", a: "Major drainage desitting runs begin on April 1st and conclude by June 15th to prepare for peak monsoonal downpours." },
      { q: "How are open drains treated for vector control?", a: "Post mechanical cleaning, crews treat standing water regions with biodegradable bio-larvicides to prevent mosquito breeding." }
    ],
    helpline: "8812825019",
    email: "drainagedispatch@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/DRAIN/701"
  },
  'trade-license': {
    slug: 'trade-license',
    title: 'Municipal Trade License Certification',
    category: 'Digital Governance',
    iconName: 'trade',
    processing: '5 - 7 Working Days',
    fee: 'Based on commercial class',
    mode: 'Online Application & Renewals',
    overviewHeading: 'Municipal Trade License Overview',
    overviewParagraphs: [
      'Any individual or corporate body intending to run commercial, trading, or industrial operations inside BTR urban zones must legally procure a Municipal Trade License.',
      'Our centralized digital license module lets merchants apply for new trade credentials, compute annual fees based on commercial categories, request fast renewals, and download dynamic certified licenses with stamp signatures.'
    ],
    noticeTitle: 'General Compliance Rule',
    noticeContent: 'Trade licenses are issued on an annual basis, valid till March 31st of each fiscal year. Renewals with no extra latency fines open on February 1st every year.',
    steps: [
      { num: "1", title: "merchant Profile Create", desc: "Sign up with your personal contact info, business PAN card, and commercial class selections." },
      { num: "2", title: "Upload Business Papers", desc: "Upload commercial site deeds, rental rent agreements, identity proofs, and fire clearances." },
      { num: "3", title: "Department Assessment", desc: "Municipal inspectors verify commercial floor margins, noise zones, and waste arrangements." },
      { num: "4", title: "Pay Fee & Download License", desc: "Clear online processing fees and download the secure QR-code certified Trade License PDF." }
    ],
    documents: [
      "Applicant Photo, PAN, and Aadhaar card copies",
      "Commercial site ownership receipt or registered Lease Rent Deed",
      "Fire Safety NOC (for eateries, warehouses, and hazard trades)",
      "Clearance receipt of property holding tax up to the current fiscal year"
    ],
    eligibility: [
      "Minimum 18 years of age and must not have any commercial legal prosecutions",
      "Establishment must align with local commercial zoning and street-vending frameworks"
    ],
    fees: [
      { category: "Retail Store / General Shop Class", fee: "₹1,500 annually", extra: "Includes digital license and shop registration ID" },
      { category: "Wholesale Outlets / Warehousing Units", fee: "₹4,500 annually", extra: "Subject to commercial waste removal SBM surcharge" },
      { category: "Eateries, Restaurants, & Bakeries Class", fee: "₹3,500 annually", extra: "Includes health and food safety sanitation verification check" }
    ],
    faqs: [
      { q: "Is a physical paper license mailed to my address?", a: "No, Trade Licenses are 100% digitally encoded with secure department QR codes. You can print them directly for physical display in shops." },
      { q: "What is the penalty for non-renewal after March 31st?", a: "A late penalty fine of 10% of the active license fee is applied monthly for non-renewal past the April 30th grace window." }
    ],
    helpline: "8812825012",
    email: "tradelicense@uddbtr.org",
    officeHours: "Mon-Fri: 10 AM - 5 PM",
    sampleCode: "BTC/TRADE/801"
  }
};

// Unified Status Map for sample code checks inside Tracker Modal
const MOCK_SERVICES_STATUS: Record<string, {
  ownerName: string;
  address: string;
  ulb: string;
  category: string;
  status: 'Approved' | 'Pending Assessment' | 'Under Review' | 'Overdue' | 'Active' | 'Resolved';
  amountDue: number;
  lastPaymentDate?: string;
  referenceNo: string;
}> = {
  "BTC/GREEN/101": {
    ownerName: "Mijing Daimary",
    address: "Ward 4, Kokrajhar Town, Near Science Park",
    ulb: "Kokrajhar Municipal Board",
    category: "Community Canopy Request",
    status: "Approved",
    amountDue: 0,
    lastPaymentDate: "2026-05-18",
    referenceNo: "TKT-GRN-9012"
  },
  "BTC/WATER/201": {
    ownerName: "Karan Basumatary",
    address: "Block C, Gossaigaon Town, Near Railway Cabin",
    ulb: "Gossaigaon Municipal Board",
    category: "AMRUT Domestic Connection",
    status: "Under Review",
    amountDue: 3500,
    referenceNo: "TKT-WTR-8819"
  },
  "BTC/WASTE/301": {
    ownerName: "Binesh Narzary",
    address: "Boro Bazar Sector 2, Udalguri Town Center",
    ulb: "Udalguri Municipal Board",
    category: "Commercial Dump Spot Sweep",
    status: "Resolved",
    amountDue: 0,
    lastPaymentDate: "2026-05-22",
    referenceNo: "TKT-SBM-4011"
  },
  "BTC/OBPS/401": {
    ownerName: "Ranendra Boro",
    address: "Station Road Side, Bijni Ward 2",
    ulb: "Bijni Municipal Board",
    category: "Residential Housing Layout (G+2)",
    status: "Pending Assessment",
    amountDue: 18500,
    referenceNo: "TKT-OBPS-5502"
  },
  "BTC/LIGHT/501": {
    ownerName: "Sushila Basumatary",
    address: "Ward No. 6 Crossing, Tangla Ring Road",
    ulb: "Tangla Municipal Board",
    category: "Public LED Luminary Repair",
    status: "Resolved",
    amountDue: 0,
    lastPaymentDate: "2026-05-23",
    referenceNo: "TKT-LGT-7023"
  },
  "BTC/GIS/601": {
    ownerName: "Dharmeswar Boro",
    address: "New Sector 1-B, Goreswar Commercial District",
    ulb: "Goreswar Municipal Board",
    category: "Cadastral Zoning Clearance",
    status: "Approved",
    amountDue: 0,
    lastPaymentDate: "2026-05-15",
    referenceNo: "TKT-GIS-3391"
  },
  "BTC/DRAIN/701": {
    ownerName: "Rakesh Brahma",
    address: "Main Drainage Tributary, Kokrajhar Ward 1",
    ulb: "Kokrajhar Municipal Board",
    category: "Feeder Channel Desiltation Action",
    status: "Resolved",
    amountDue: 0,
    lastPaymentDate: "2026-05-24",
    referenceNo: "TKT-DRN-1102"
  },
  "BTC/TRADE/801": {
    ownerName: "Moushumi Das",
    address: "JD Road Crossing, Kokrajhar Commercial Hub",
    ulb: "Kokrajhar Municipal Board",
    category: "General Retail Merchant License",
    status: "Active",
    amountDue: 0,
    lastPaymentDate: "2026-05-21",
    referenceNo: "TKT-TRD-4412"
  }
};

export default function ServiceSpecificDynamicPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;
  const slug = rawSlug || '';

  // Fallback if slug doesn't match
  const service = SERVICES_DB[slug] || SERVICES_DB['green-mission'];

  // Modal toggle states
  const [isAvailModalOpen, setIsAvailModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  
  // Submit actions states
  const [availForm, setAvailForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    ulb: 'Kokrajhar Municipal Board',
    holdingNo: '',
    message: ''
  });
  const [availSuccess, setAvailSuccess] = useState(false);
  const [availRefNo, setAvailRefNo] = useState('');

  const [statusQuery, setStatusQuery] = useState('');
  const [statusResult, setStatusResult] = useState<typeof MOCK_SERVICES_STATUS[string] | null>(null);
  const [statusSearched, setStatusSearched] = useState(false);

  // FAQ interactive state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAvailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const servicePrefix = service.slug.slice(0, 4).toUpperCase();
    const mockRef = `${servicePrefix}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(100000 + Math.random() * 900000)}`;
    setAvailRefNo(mockRef);
    setAvailSuccess(true);
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = statusQuery.trim().toUpperCase();
    setStatusSearched(true);
    if (MOCK_SERVICES_STATUS[cleanKey]) {
      setStatusResult(MOCK_SERVICES_STATUS[cleanKey]);
    } else {
      setStatusResult(null);
    }
  };

  const resetAvailForm = () => {
    setAvailForm({
      fullName: '',
      mobile: '',
      email: '',
      ulb: 'Kokrajhar Municipal Board',
      holdingNo: '',
      message: ''
    });
    setAvailSuccess(false);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'green': return <Leaf className="w-6 h-6 text-white" />;
      case 'water': return <Droplet className="w-6 h-6 text-white" />;
      case 'sbm': return <Trash2 className="w-6 h-6 text-white" />;
      case 'obps': return <Building className="w-6 h-6 text-white" />;
      case 'lights': return <Lightbulb className="w-6 h-6 text-white" />;
      case 'gis': return <Map className="w-6 h-6 text-white" />;
      case 'drainage': return <Activity className="w-6 h-6 text-white" />;
      case 'trade': return <Building2 className="w-6 h-6 text-white" />;
      default: return <Building className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Universal header bars */}
      <div className="sticky top-0 z-[110] shadow-sm">
        <UtilityBar />
        <Header />
      </div>

      {/* Breadcrumb Section with clean styling matching property tax exactly */}
      <div id="orange-breadcrumb-section" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-650 font-medium">
            <Link id="breadcrumb-home" href="/" className="text-slate-500 hover:text-blue-600 transition-colors font-semibold">Home</Link>
            <span className="text-slate-300">/</span>
            <Link id="breadcrumb-services" href="/services" className="text-slate-500 hover:text-blue-600 transition-colors font-semibold">Services</Link>
            <span className="text-slate-300">/</span>
            <span id="breadcrumb-current" className="text-slate-800 font-bold">{service.title}</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Dynamic Double-Grid Structure identical layout */}
        <div id="service-grid-double" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SECTION (Col Span 8): The structured official document cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* 1. Service Overview Card */}
            <div id="card-service-overview" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-5">
                {/* Larger Blue Icon Box with service graphic inside */}
                <div className="w-12 h-12 rounded-lg bg-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                  
                  {/* Metadata line inline block with increased font sizes and icon sizes */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-2.5 text-sm font-semibold text-slate-500">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-600 animate-pulse shrink-0" />
                      <span>Processing:</span>
                      <span className="font-bold text-slate-700">{service.processing}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-600 font-extrabold text-lg shrink-0 w-5 h-5 flex items-center justify-center">₹</span>
                      <span>Fee:</span>
                      <span className="font-bold text-slate-700">{service.fee}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>{service.mode}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Overview Sub-section with increased heading & description font sizes */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2.5 mb-4 font-sans">
                  <FileText className="w-6 h-6 text-blue-600 shrink-0" />
                  <span>Service Overview</span>
                </h3>
                <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 font-normal">
                  {service.overviewParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Notice guidelines block */}
              <div className="mt-8 border-l-4 border-blue-600 bg-blue-50/50 p-6 rounded-lg space-y-1.5">
                <h4 className="text-[#1E40AF] font-bold text-base sm:text-lg">{service.noticeTitle}</h4>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-normal">
                  {service.noticeContent}
                </p>
              </div>
            </div>

            {/* 2. Application Process Card */}
            <div id="card-application-process" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-6 pb-3.5 border-b border-slate-100">
                <CustomCircleCheck className="w-7 h-7 text-[#8B5CF6] shrink-0" />
                <span>Application Process</span>
              </h3>

              <div className="relative space-y-8 before:content-[''] before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <span className="absolute left-4 -translate-x-1/2 top-1 w-8 h-8 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center font-bold text-sm sm:text-base select-none shadow-xs">
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-gray-950 text-base sm:text-lg leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Required Documents Card */}
            <div id="card-required-documents-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-4 pb-3.5 border-b border-slate-100">
                <FileText className="w-7 h-7 text-blue-600 shrink-0" />
                <span>Required Documents</span>
              </h3>
              <ul className="divide-y divide-slate-100">
                {service.documents.map((doc, idx) => (
                  <li key={idx} className="py-3.5 flex items-start gap-4 text-sm sm:text-base text-slate-700 font-semibold font-sans">
                    <FileText className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Eligibility Criteria Card */}
            <div id="card-eligibility-criteria-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-100">
                <CustomCircleCheck className="w-7 h-7 text-emerald-600 shrink-0" />
                <span>Eligibility Criteria</span>
              </h3>
              <ul className="space-y-4">
                {service.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm sm:text-base text-slate-700 font-semibold font-sans">
                    <CustomCircleCheck className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Fee Structure Card */}
            <div id="card-fee-structure-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-100">
                <span className="text-emerald-600 font-black text-2xl shrink-0 w-7 h-7 flex items-center justify-center">₹</span>
                <span>Fee Structure</span>
              </h3>
              <div className="overflow-x-auto border border-slate-100 rounded-lg bg-[#F8FAFC]/55">
                <table className="min-w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-150 font-bold text-slate-900 text-sm sm:text-base">
                      <th className="p-4 sm:p-4.5">Category</th>
                      <th className="p-4 sm:p-4.5">Fee</th>
                      <th className="p-4 sm:p-4.5">Additional Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-semibold text-slate-705 bg-white text-sm sm:text-base">
                    {service.fees.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 sm:p-4.5 text-slate-950 font-bold">{row.category}</td>
                        <td className="p-4 sm:p-4.5 text-slate-900 font-bold whitespace-nowrap">{row.fee}</td>
                        <td className="p-4 sm:p-4.5 text-slate-500 font-normal">{row.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Frequently Asked Questions accordion */}
            <div id="section-frequently-asked-questions" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-3.5 mb-6">
                <ClipboardList className="w-7 h-7 text-[#F97316] shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div id="faq-accordion-group" className="flex flex-col gap-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-[#F8FAFC] border border-slate-200 rounded-lg overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4.5 sm:p-5 font-bold text-sm sm:text-base text-slate-905 flex justify-between items-center gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-[#0F172A]">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-5 pt-0 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal bg-white">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SECTION (Col Span 4): Structured Sidebar components */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Action 1: Quick Actions Card */}
            <div id="card-quick-actions" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Quick Actions
              </h4>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setIsAvailModalOpen(true)}
                  className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-lg py-3.5 px-5 w-full flex items-center justify-center gap-2.5 cursor-pointer transition-all shadow-sm"
                >
                  <CreditCard className="w-5 h-5 text-white" />
                  <span>Avail Service</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsStatusModalOpen(true)}
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base rounded-lg py-3.5 px-5 w-full flex items-center justify-center gap-2.5 cursor-pointer transition-all shadow-xs"
                >
                  <Search className="w-5 h-5 text-slate-500" />
                  <span>Check Status</span>
                </button>
              </div>
            </div>

            {/* Action 2: Contact Support Card */}
            <div id="card-contact-support" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-5">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Contact Support
              </h4>
              <div className="space-y-4 text-sm sm:text-base font-semibold font-medium">
                <div className="flex gap-4 items-start">
                  <PhoneCall className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Helpline</span>
                    <a href={`tel:${service.helpline}`} className="text-slate-800 font-extrabold hover:underline">{service.helpline}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Email</span>
                    <a href={`mailto:${service.email}`} className="text-slate-800 font-extrabold hover:underline">{service.email}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Office Hours</span>
                    <span className="text-slate-850 font-extrabold">{service.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action 3: Related Services Card (Replicating exact layout from Screenshot 1) */}
            <div id="card-related-services" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Related Services
              </h4>
              <div className="flex flex-col gap-3">
                {Object.values(SERVICES_DB)
                  .filter((srv) => srv.slug !== service.slug)
                  .slice(0, 3)
                  .map((srv, idx) => (
                    <Link 
                      key={idx} 
                      href={`/services/${srv.slug}`}
                      className="group bg-[#F8FAFC] hover:bg-slate-100 p-4 rounded-lg transition-all flex items-center gap-3.5 w-full text-left"
                    >
                      <FileText className="w-6 h-6 text-[#2563EB] align-middle shrink-0 animate-pulse" />
                      <span className="text-slate-905 font-bold text-base sm:text-lg group-hover:text-blue-700 transition-colors">
                        {srv.title}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

          </div>

        </div>

        {/* Back to All Services Button at the bottom */}
        <div className="mt-12 flex justify-center border-t border-slate-200 pt-8">
          <Link 
            id="back-to-services-btn"
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 font-extrabold text-sm hover:bg-slate-50 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#F97316] transition-transform group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </Link>
        </div>

      </main>

      <Footer />

      {/* --- AVAIL SERVICE DIALOG MODAL --- */}
      <AnimatePresence>
        {isAvailModalOpen && (
          <div className="fixed inset-0 z-[150] overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAvailModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Content main box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
            >
              <div className="bg-[#003366] text-white p-6 relative">
                <button
                  type="button"
                  onClick={() => setIsAvailModalOpen(false)}
                  className="absolute right-5 top-5 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-6 h-6 text-emerald-300" />
                  <div>
                    <h3 className="text-lg font-extrabold font-serif">Apply for {service.title}</h3>
                    <p className="text-xs text-slate-300 font-medium">Urban Local Body Digital Registry System</p>
                  </div>
                </div>
              </div>

              {!availSuccess ? (
                <form onSubmit={handleAvailSubmit} className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">
                    Please submit your coordinates and contact details. A municipal service coordinator will register your application query and contact you within the official schedule SLA.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Applicant Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={availForm.fullName}
                        onChange={(e) => setAvailForm({ ...availForm, fullName: e.target.value })}
                        placeholder="e.g. Swgwmswr Brahma"
                        className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Registered Mobile *</label>
                        <input 
                          type="tel"
                          required
                          value={availForm.mobile}
                          onChange={(e) => setAvailForm({ ...availForm, mobile: e.target.value })}
                          placeholder="e.g. 8812825012"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Email Address *</label>
                        <input 
                          type="email"
                          required
                          value={availForm.email}
                          onChange={(e) => setAvailForm({ ...availForm, email: e.target.value })}
                          placeholder="e.g. citizen@uddbtr.org"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Select Municipal Unit *</label>
                        <select 
                          value={availForm.ulb}
                          onChange={(e) => setAvailForm({ ...availForm, ulb: e.target.value })}
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        >
                          <option>Kokrajhar Municipal Board</option>
                          <option>Gossaigaon Municipal Board</option>
                          <option>Bijni Municipal Board</option>
                          <option>Tangla Municipal Board</option>
                          <option>Basugaon Municipal Board</option>
                          <option>Udalguri Municipal Board</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Property Holding No (Optional)</label>
                        <input 
                          type="text"
                          value={availForm.holdingNo}
                          onChange={(e) => setAvailForm({ ...availForm, holdingNo: e.target.value })}
                          placeholder="e.g. BTC/PROP/901"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 uppercase"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Application Specifics or Site Details</label>
                      <textarea
                        rows={2}
                        value={availForm.message}
                        onChange={(e) => setAvailForm({ ...availForm, message: e.target.value })}
                        placeholder="State ward number, plinth dimensions, or details of requirement..."
                        className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAvailModalOpen(false)}
                      className="flex-1 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold rounded-xl py-3 text-xs uppercase cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-750 text-white font-extrabold rounded-xl py-3 text-xs uppercase cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-5">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-900 text-base">Application Filed Successfully!</h4>
                    <p className="text-xs text-slate-500 font-bold leading-normal max-w-sm mx-auto">
                      Your query has been queued at the <strong>{availForm.ulb}</strong> digital services department pipeline.
                    </p>
                  </div>

                  <div className="bg-slate-50 border rounded-xl p-4 space-y-2 text-left text-xs font-semibold text-slate-650 font-mono">
                    <div className="flex justify-between border-b pb-1">
                      <span>Inquiry Reference</span>
                      <span className="font-black text-slate-900">{availRefNo}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1 font-sans">
                      <span>Applicant Name</span>
                      <span className="text-slate-800 font-extrabold">{availForm.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1 font-sans">
                      <span>Assigned Unit</span>
                      <span className="text-slate-800 font-extrabold">{availForm.ulb}</span>
                    </div>
                    <div className="flex justify-between font-sans">
                      <span>Liaison SLA Time</span>
                      <span className="text-blue-800 font-black">Within 3 Working Days</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        alert("Application Declaration Form kit compiled successfully! Download has been registered.");
                      }}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span>Declaration Kit</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetAvailForm}
                      className="flex-1 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all"
                    >
                      File Another
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CHECK STATUS DIALOG MODAL --- */}
      <AnimatePresence>
        {isStatusModalOpen && (
          <div className="fixed inset-0 z-[150] overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStatusModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Content main box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
            >
              <div className="bg-[#003366] text-white p-6 relative">
                <button
                  type="button"
                  onClick={() => setIsStatusModalOpen(false)}
                  className="absolute right-5 top-5 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2.5">
                  <Search className="w-6 h-6 text-emerald-300" />
                  <div>
                    <h3 className="text-lg font-extrabold font-serif">Check Application Status</h3>
                    <p className="text-xs text-slate-300 font-medium">BTR Unified Municipal Status Tracker</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <form onSubmit={handleStatusSearch} className="space-y-2 text-xs">
                  <label className="text-[10px] uppercase font-extrabold text-slate-500 block">Municipal Tracking ID / Code</label>
                  <div className="flex gap-2.5">
                    <input 
                      type="text"
                      required
                      value={statusQuery}
                      onChange={(e) => setStatusQuery(e.target.value)}
                      placeholder={`e.g. ${service.sampleCode}`}
                      className="flex-1 bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 uppercase"
                    />
                    <button
                      type="submit"
                      className="bg-[#003366] hover:bg-[#002244] text-white font-extrabold uppercase px-5 rounded-xl cursor-pointer text-xs"
                    >
                      TRACK
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold block italic mt-1 font-sans">
                    Try valid holding status sample code: <strong className="text-slate-600 font-mono text-xs">{service.sampleCode}</strong>
                  </span>
                </form>

                {statusSearched && (
                  <div className="border-t pt-4">
                    {statusResult ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                            RECORD FOUND
                          </span>
                          <span className="font-mono text-xs font-black text-slate-500">{statusQuery.toUpperCase()}</span>
                        </div>

                        <div className="bg-slate-50 p-4 border rounded-xl space-y-2.5 text-xs font-semibold text-slate-650 font-sans">
                          <div className="flex justify-between border-b pb-1">
                            <span>Applicant Registered</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.ownerName}</span>
                          </div>
                          <div className="flex justify-between border-b pb-1">
                            <span>Municipal Unit</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.ulb}</span>
                          </div>
                          <div className="flex justify-between border-b pb-1 font-mono">
                            <span>Service Group</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status</span>
                            <span className={`font-black ${
                              statusResult.status === 'Approved' || statusResult.status === 'Resolved' || statusResult.status === 'Active' ? 'text-emerald-700' :
                              statusResult.status === 'Overdue' ? 'text-rose-600' : 'text-amber-600'
                            }`}>
                              {statusResult.status.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {statusResult.status === 'Approved' && (
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300/30 text-emerald-850 text-xs font-bold leading-normal font-sans">
                            Official authorization finalized on {statusResult.lastPaymentDate}. Certified digital permit sheets have been issued securely.
                          </div>
                        )}

                        {statusResult.status === 'Active' && (
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300/30 text-emerald-850 text-xs font-bold leading-normal font-sans">
                            Service records are fully validated and historically active as of {statusResult.lastPaymentDate}.
                          </div>
                        )}

                        {statusResult.status === 'Resolved' && (
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300/30 text-emerald-850 text-xs font-bold leading-normal font-sans">
                            Action completed by electrical/drainage/SBM crew on {statusResult.lastPaymentDate}. Verification checks completed.
                          </div>
                        )}

                        {statusResult.status === 'Pending Assessment' && (
                          <div className="p-3 bg-amber-50 rounded-xl border border-amber-350/30 text-amber-850 text-xs font-bold leading-normal font-sans">
                            System assessment pending. Clearance fees are total: <strong>Rs. {statusResult.amountDue.toLocaleString('en-IN')}.00</strong>. Please resolve pending clearance.
                          </div>
                        )}

                        {statusResult.status === 'Under Review' && (
                          <div className="p-3 bg-blue-50 rounded-xl border border-blue-300/30 text-blue-800 text-xs font-bold leading-normal font-sans">
                            Technical files are currently being mapped and inspected. Liaison scheduled soon.
                          </div>
                        )}

                        <div className="flex gap-2 font-sans">
                          <button
                            type="button"
                            onClick={() => {
                              alert(`Certified Digital Permit PDF compiled successfully!\nReference: ${statusResult.referenceNo}`);
                            }}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <Download className="w-4 h-4 text-white" />
                            <span>Download Receipt</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              window.print();
                            }}
                            className="flex-1 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                          >
                            <Printer className="w-4 h-4 text-slate-500" />
                            <span>Print Record</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4.5 bg-rose-50 border border-rose-200 text-rose-800 text-center rounded-2xl text-xs font-extrabold flex flex-col items-center gap-2 font-sans">
                        <AlertCircle className="w-6 h-6 text-rose-600 animate-pulse" />
                        <div>
                          <p>Record not found for &quot;{statusQuery}&quot;</p>
                          <p className="text-[11px] text-rose-500 font-semibold mt-0.5">Please check ID accuracy or submit a fresh application form.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
