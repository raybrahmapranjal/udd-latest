import React from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlideshow from '@/components/sections/HeroSlideshow';
import { 
  Building, MapPin, Users, Calendar, Phone, Mail, Award, 
  Map, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, 
  HelpCircle, MessageSquare, AlertCircle, FileText, Search, Star,
  IndianRupee, Home, Building2, Briefcase, TrendingUp, Sparkles,
  PhoneCall, ArrowLeft, Trash2, Lightbulb, Droplets, Clock
} from 'lucide-react';

interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>;
}

interface ULBData {
  name: string;
  district: string;
  estd: string;
  classification: string;
  wards: number;
  population: string;
  area: string;
  holdings: string;
  annualRevenue: string;
  activeProjects: string;
  serviceRate: string;
  chairperson: string;
  chairpersonPhone: string;
  chairpersonEmail: string;
  execOfficer: string;
  execOfficerPhone: string;
  execOfficerEmail: string;
  address: string;
  helpline: string;
  email: string;
  overview: string;
  historyText: string;
  infrastructureRating: string;
  literacyRate: string;
  pinCode: string;
  stdCode: string;
  perfRevenue: string;
  perfServices: string;
  perfGrievances: string;
  perfProjects: string;
}

const ulbsDatabase: Record<string, ULBData> = {
  basugaon_mb: {
    name: "Basugaon Municipal Board",
    district: "Chirang",
    estd: "1989",
    classification: "Municipal Board (Class III)",
    wards: 10,
    population: "14,545",
    area: "4.8",
    holdings: "3,420",
    annualRevenue: "₹1.4 Cr",
    activeProjects: "8",
    serviceRate: "88%",
    chairperson: "Smt. Pranita Basumatary",
    chairpersonPhone: "03664-295051",
    chairpersonEmail: "chair.basugaon@btr.gov.in",
    execOfficer: "Sri Himangshu Kumar, ACS",
    execOfficerPhone: "03664-295050",
    execOfficerEmail: "eo.basugaon@btr.gov.in",
    address: "Ward No. 3, Basugaon Town, Chirang, BTC, Assam - 783372",
    helpline: "+91 3664 295050",
    email: "contact@basugaonmb.org.in",
    overview: "Basugaon is a flourishing town in Chirang district, serving as a vital commercial junction. The municipal board has consistently focused on improving suburban roads, systematic solid waste separation, and storm water management.",
    historyText: "Since its upgrade to a Municipal Board status in 1989, Basugaon has transformed from a quiet railway stop into an urban trading hub, fostering high standard sanitation and comprehensive drinking tap pipelines currently serving 80% of local wards.",
    infrastructureRating: "Class B Group",
    literacyRate: "74.1%",
    pinCode: "783372",
    stdCode: "03664",
    perfRevenue: "₹1.2 Cr",
    perfServices: "95",
    perfGrievances: "42",
    perfProjects: "6"
  },
  bijni_mb: {
    name: "Bijni Municipal Board",
    district: "Chirang",
    estd: "1974",
    classification: "Municipal Board (Class II)",
    wards: 10,
    population: "23,241",
    area: "5.6",
    holdings: "5,210",
    annualRevenue: "₹2.6 Cr",
    activeProjects: "12",
    serviceRate: "92%",
    chairperson: "Sri Ranjit Kumar Sarkar",
    chairpersonPhone: "03664-295241",
    chairpersonEmail: "chair.bijni@btr.gov.in",
    execOfficer: "Smt. Kakali Karjee, ACS",
    execOfficerPhone: "03664-295240",
    execOfficerEmail: "eo.bijni@btr.gov.in",
    address: "Bijni Town Road, Ward No. 4, Bijni, Chirang, BTC, Assam - 783390",
    helpline: "+91 3664 295240",
    email: "support@bijnimb.org.in",
    overview: "Bijni is historically renowned as one of the oldest settlements in the region. Bijni Municipal Board emphasizes historic canal restorations, modern central streetlights, and commercial vendor parks.",
    historyText: "Constitutionally instituted in 1974, Bijni MB carries a heritage of rich administrative progression, having paved over 95% of inner commercial streets and pioneered organic compost sorting fields for rural integration.",
    infrastructureRating: "Class A Group",
    literacyRate: "79.2%",
    pinCode: "783390",
    stdCode: "03664",
    perfRevenue: "₹2.3 Cr",
    perfServices: "118",
    perfGrievances: "61",
    perfProjects: "9"
  },
  fakiragram_mb: {
    name: "Fakiragram Municipal Board",
    district: "Kokrajhar",
    estd: "2012",
    classification: "Municipal Board (Class III)",
    wards: 8,
    population: "11,875",
    area: "3.2",
    holdings: "2,180",
    annualRevenue: "₹1.1 Cr",
    activeProjects: "6",
    serviceRate: "85%",
    chairperson: "Sri Dipak Debnath",
    chairpersonPhone: "03661-294113",
    chairpersonEmail: "chair.fakiragram@btr.gov.in",
    execOfficer: "Sri Alakesh Baruah, ACS",
    execOfficerPhone: "03661-294112",
    execOfficerEmail: "eo.fakiragram@btr.gov.in",
    address: "Railway Station Road, Fakiragram, Kokrajhar, BTC, Assam - 783345",
    helpline: "+91 3661 294112",
    email: "info@fakiragrammb.org.in",
    overview: "Fakiragram is an important railway junction in Kokrajhar. Fakiragram Municipal Board works intensively to maintain station vicinity drainage network, clean public restrooms, and digital citizen kiosks.",
    historyText: "Established in 2012 to address the specific civic demands of a crucial rail transit town, Fakiragram MB has successfully executed modern multi-lane footbridges, high-mast station lights, and a structured drainage highway.",
    infrastructureRating: "Class C Group",
    literacyRate: "74.8%",
    pinCode: "783345",
    stdCode: "03661",
    perfRevenue: "₹0.95 Cr",
    perfServices: "71",
    perfGrievances: "31",
    perfProjects: "4"
  },
  goreswar_mb: {
    name: "Goreswar Municipal Board",
    district: "Tamulpur",
    estd: "2021",
    classification: "Municipal Board (Class III)",
    wards: 10,
    population: "15,312",
    area: "4.1",
    holdings: "3,120",
    annualRevenue: "₹1.5 Cr",
    activeProjects: "7",
    serviceRate: "87%",
    chairperson: "Sri Hemanta Kumar Boro",
    chairpersonPhone: "03624-291137",
    chairpersonEmail: "chair.goreswar@btr.gov.in",
    execOfficer: "Sri Nabajit Pathak, ACS",
    execOfficerPhone: "03624-291136",
    execOfficerEmail: "eo.goreswar@btr.gov.in",
    address: "Main Bazar Road, Goreswar Town, Tamulpur, BTC, Assam - 781366",
    helpline: "+91 3624 291136",
    email: "office@goreswarmb.org.in",
    overview: "Established to speed up administrative growth, Goreswar Municipal Board champions solar street lighting systems, sustainable weekly local markets, and clean municipal green gardens.",
    historyText: "Incorporated following the 2021 legislative elevations, Goreswar MB is one of BTC's youngest municipal bodies, proactively constructing public parks, concrete culverts, and state-of-the-art market yards.",
    infrastructureRating: "Class C Group",
    literacyRate: "72.5%",
    pinCode: "781366",
    stdCode: "03624",
    perfRevenue: "₹1.25 Cr",
    perfServices: "83",
    perfGrievances: "38",
    perfProjects: "5"
  },
  gossaigaon_mb: {
    name: "Gossaigaon Municipal Board",
    district: "Kokrajhar",
    estd: "1965",
    classification: "Municipal Board (Class III)",
    wards: 12,
    population: "31,856",
    area: "9.45",
    holdings: "7,250",
    annualRevenue: "₹3.8 Cr",
    activeProjects: "18",
    serviceRate: "91%",
    chairperson: "Smt. Rekha Brahma",
    chairpersonPhone: "03662-272101",
    chairpersonEmail: "chair.gossaigaon@btr.gov.in",
    execOfficer: "Shri Monoj Kumar Das",
    execOfficerPhone: "03662-272100",
    execOfficerEmail: "eo.gossaigaon@btr.gov.in",
    address: "Gossaigaon Town near ASTC Stand, Kokrajhar, BTC, Assam - 783360",
    helpline: "+91 3669 291560",
    email: "desk@gossaigaonmb.org.in",
    overview: "Gossaigaon Municipal Board is a vibrant urban center serving as a major commercial hub in the region. The municipality has been focusing on sustainable development and improving civic amenities for its growing population.",
    historyText: "Functioning since 1965, Gossaigaon MB holds an excellent track record of administering prime central subsidies, bringing robust sanitary shelter to over 1,200 urban poor households under environmental-friendly standards.",
    infrastructureRating: "Class III Group",
    literacyRate: "75.2%",
    pinCode: "783360",
    stdCode: "03662",
    perfRevenue: "₹3.5 Cr",
    perfServices: "156",
    perfGrievances: "78",
    perfProjects: "12"
  },
  kajalgaon_mb: {
    name: "Kajalgaon Municipal Board",
    district: "Chirang",
    estd: "2015",
    classification: "Municipal Board (Class III)",
    wards: 8,
    population: "12,680",
    area: "3.9",
    holdings: "2,450",
    annualRevenue: "₹1.5 Cr",
    activeProjects: "9",
    serviceRate: "89%",
    chairperson: "Sri Jiten Goyary",
    chairpersonPhone: "03664-293346",
    chairpersonEmail: "chair.kajalgaon@btr.gov.in",
    execOfficer: "Smt. Bornali Devi, ACS",
    execOfficerPhone: "03664-293345",
    execOfficerEmail: "eo.kajalgaon@btr.gov.in",
    address: "DC Office Road, Kajalgaon, Chirang, BTC, Assam - 783385",
    helpline: "+91 3664 293345",
    email: "helpdesk@kajalgaonmb.org.in",
    overview: "Serving as the administrative capital of Chirang, Kajalgaon is a smart, modernizing hub. Kajalgaon Municipal Board maintains integrated city halls, clean administrative lanes, and children's eco-parks.",
    historyText: "Set up in 2015 side-by-side with district administrative offices, Kajalgaon MB focuses on smart e-permission desks, green-engineered parks, and fully underground storm culverts to safeguard institutional assets.",
    infrastructureRating: "Class B Group",
    literacyRate: "77.5%",
    pinCode: "783385",
    stdCode: "03664",
    perfRevenue: "₹1.35 Cr",
    perfServices: "91",
    perfGrievances: "44",
    perfProjects: "7"
  },
  kokrajhar_mb: {
    name: "Kokrajhar Municipal Board",
    district: "Kokrajhar",
    estd: "1957",
    classification: "Municipal Board (Class I)",
    wards: 12,
    population: "34,136",
    area: "8.5",
    holdings: "9,850",
    annualRevenue: "₹4.8 Cr",
    activeProjects: "24",
    serviceRate: "94%",
    chairperson: "Sri Jwhwlao Daimary",
    chairpersonPhone: "03661-270245",
    chairpersonEmail: "chair.kokrajhar@btr.gov.in",
    execOfficer: "Sri Mukta Das, ACS",
    execOfficerPhone: "03661-270244",
    execOfficerEmail: "eo.kokrajhar@btr.gov.in",
    address: "J.D. Road, Ward No. 5, Kokrajhar Town, BTC, Assam - 783370",
    helpline: "+91 3661 270244",
    email: "administration@kokrajharmb.org.in",
    overview: "As the capital of Bodoland Territorial Council, Kokrajhar is the premier civic body. The municipal board handles extensive street widening, systematic bio-waste plants, deep-bore water supplies, and public health campaigns.",
    historyText: "Serving as BTC's crown jewel since 1957, Kokrajhar MB is both the oldest and most populous municipality. Major accomplishments include fully computerized birth-death registrar desks, and a centralized drinking plant.",
    infrastructureRating: "Class I Group",
    literacyRate: "82.4%",
    pinCode: "783370",
    stdCode: "03661",
    perfRevenue: "₹4.2 Cr",
    perfServices: "224",
    perfGrievances: "145",
    perfProjects: "18"
  },
  mushalpur_mb: {
    name: "Mushalpur Municipal Board",
    district: "Baksa",
    estd: "2018",
    classification: "Municipal Board (Class III)",
    wards: 8,
    population: "10,432",
    area: "3.5",
    holdings: "1,980",
    annualRevenue: "₹1.2 Cr",
    activeProjects: "5",
    serviceRate: "86%",
    chairperson: "Smt. Anjali Swargiary",
    chairpersonPhone: "03624-296061",
    chairpersonEmail: "chair.mushalpur@btr.gov.in",
    execOfficer: "Sri Bipul Kumar Roy, ACS",
    execOfficerPhone: "03624-296060",
    execOfficerEmail: "eo.mushalpur@btr.gov.in",
    address: "District HQ, Mushalpur Town, Baksa, BTC, Assam - 781372",
    helpline: "+91 3624 296060",
    email: "care@mushalpurmb.org.in",
    overview: "Situated near the scenic foothills of Bhutan, Mushalpur is the administrative heart of Baksa district. The board actively promotes ecotourism facilitation, local drainage construction, and street pavers.",
    historyText: "Constructed recently in 2018 to establish localized urban amenities close to international borders, Mushalpur MB emphasizes pedestrian walkways, community health posts, and flood protective rock barriers.",
    infrastructureRating: "Class C Group",
    literacyRate: "71.6%",
    pinCode: "781372",
    stdCode: "03624",
    perfRevenue: "₹1.0 Cr",
    perfServices: "64",
    perfGrievances: "27",
    perfProjects: "3"
  },
  tamulpur_mb: {
    name: "Tamulpur Municipal Board",
    district: "Tamulpur",
    estd: "2021",
    classification: "Municipal Board (Class III)",
    wards: 10,
    population: "18,924",
    area: "5.1",
    holdings: "4,120",
    annualRevenue: "₹1.8 Cr",
    activeProjects: "9",
    serviceRate: "89%",
    chairperson: "Sri Phukan Brahma",
    chairpersonPhone: "03624-298125",
    chairpersonEmail: "chair.tamulpur@btr.gov.in",
    execOfficer: "Smt. Juri Gogoi, ACS",
    execOfficerPhone: "03624-298124",
    execOfficerEmail: "eo.tamulpur@btr.gov.in",
    address: "Tamulpur HQ, Near Block Office, Tamulpur, BTC, Assam - 781367",
    helpline: "+91 3624 298124",
    email: "contact@tamulpurmb.org.in",
    overview: "Tamulpur is the capital of the newly elevated Tamulpur district. This board leads rapid development plans for public drinking water distribution, multi-utility administrative buildings, and digital land approvals.",
    historyText: "Constituted in the historic state upgrade of 2021, Tamulpur MB is actively deploying smart-LED road pillars, organizing citizen help zones, and designing wholesale agrarian vegetable cold storages.",
    infrastructureRating: "Class B Group",
    literacyRate: "73.4%",
    pinCode: "781367",
    stdCode: "03624",
    perfRevenue: "₹1.5 Cr",
    perfServices: "92",
    perfGrievances: "48",
    perfProjects: "6"
  },
  tangla_mb: {
    name: "Tangla Municipal Board",
    district: "Udalguri",
    estd: "1971",
    classification: "Municipal Board (Class II)",
    wards: 10,
    population: "27,211",
    area: "7.2",
    holdings: "6,540",
    annualRevenue: "₹3.1 Cr",
    activeProjects: "15",
    serviceRate: "93%",
    chairperson: "Sri Dilip Kumar Baruah",
    chairpersonPhone: "03711-296212",
    chairpersonEmail: "chair.tangla@btr.gov.in",
    execOfficer: "Smt. Bornali Baruah, ACS",
    execOfficerPhone: "03711-296211",
    execOfficerEmail: "eo.tangla@btr.gov.in",
    address: "Tangla Bazar, Ward No. 2, Tangla, Udalguri, BTC, Assam - 784521",
    helpline: "+91 3711 296211",
    email: "support@tanglamb.org.in",
    overview: "Historically prominent as an essential tea trading and commercial market center in Udalguri district, Tangla Municipal Board executes expansive commercial market sheds, garbage cleaning models, and public health checks.",
    historyText: "Formally set up in 1971, Tangla MB is an established leader in retail integration. It manages one of BTC's largest daily organic trade markets, maintaining strong public water kiosks and solid waste collection machinery.",
    infrastructureRating: "Class II Group",
    literacyRate: "78.4%",
    pinCode: "784521",
    stdCode: "03711",
    perfRevenue: "₹2.8 Cr",
    perfServices: "142",
    perfGrievances: "65",
    perfProjects: "10"
  }
};

interface ColorTheme {
  primary: string;           // text color tailwind e.g. "text-emerald-600"
  accentBorder: string;      // e.g. "border-l-emerald-600 focus:ring-emerald-500"
  buttonBg: string;          // e.g. "bg-emerald-600 hover:bg-emerald-700 focus:outline-emerald-500"
  headingBgFrom: string;     // gradient from e.g. "from-[#022244]"
  headingBgTo: string;       // gradient to e.g. "to-[#004a80]"
  lightBg: string;           // background e.g. "bg-emerald-50/50"
  lightBgHover: string;      // hover e.g. "hover:bg-emerald-50 bg-emerald-50/20"
  gradientFrom: string;      // e.g. "from-emerald-500"
  gradientTo: string;        // e.g. "to-emerald-600"
  accentBg: string;          // e.g. "bg-emerald-100"
  accentText: string;        // e.g. "text-emerald-800"
  bulletLine: string;        // e.g. "border-emerald-600"
  cardBorderHover: string;   // e.g. "hover:border-emerald-600"
  textMuted: string;         // e.g. "text-emerald-600/80"
}

// 10 custom color palettes matching Gossaigaon but changing colors for all other ULBs!
const colorThemes: Record<string, ColorTheme> = {
  basugaon_mb: {
    primary: "text-emerald-600",
    accentBorder: "border-l-emerald-600",
    buttonBg: "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-100",
    headingBgFrom: "from-emerald-950",
    headingBgTo: "to-emerald-850",
    lightBg: "bg-emerald-50/30",
    lightBgHover: "hover:bg-emerald-50 bg-emerald-50/15 border-emerald-100",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
    accentBg: "bg-emerald-100",
    accentText: "text-emerald-800",
    bulletLine: "bg-emerald-600",
    cardBorderHover: "hover:border-emerald-500",
    textMuted: "text-emerald-700"
  },
  bijni_mb: {
    primary: "text-indigo-600",
    accentBorder: "border-l-indigo-600",
    buttonBg: "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-100",
    headingBgFrom: "from-indigo-950",
    headingBgTo: "to-indigo-850",
    lightBg: "bg-indigo-50/30",
    lightBgHover: "hover:bg-indigo-50 bg-indigo-50/15 border-indigo-100",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600",
    accentBg: "bg-indigo-100",
    accentText: "text-indigo-800",
    bulletLine: "bg-indigo-600",
    cardBorderHover: "hover:border-indigo-500",
    textMuted: "text-indigo-700"
  },
  fakiragram_mb: {
    primary: "text-rose-600",
    accentBorder: "border-l-rose-600",
    buttonBg: "bg-rose-600 hover:bg-rose-700 hover:shadow-rose-100",
    headingBgFrom: "from-rose-950",
    headingBgTo: "to-rose-850",
    lightBg: "bg-rose-50/30",
    lightBgHover: "hover:bg-rose-50 bg-rose-50/15 border-rose-100",
    gradientFrom: "from-rose-500",
    gradientTo: "to-rose-600",
    accentBg: "bg-rose-100",
    accentText: "text-rose-800",
    bulletLine: "bg-rose-600",
    cardBorderHover: "hover:border-rose-500",
    textMuted: "text-rose-700"
  },
  goreswar_mb: {
    primary: "text-amber-600",
    accentBorder: "border-l-amber-600",
    buttonBg: "bg-amber-600 hover:bg-amber-700 hover:shadow-amber-100",
    headingBgFrom: "from-amber-950",
    headingBgTo: "to-[#5a3a00]",
    lightBg: "bg-amber-50/30",
    lightBgHover: "hover:bg-amber-50 bg-amber-50/15 border-amber-100",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    accentBg: "bg-amber-100",
    accentText: "text-[#623c10]",
    bulletLine: "bg-amber-600",
    cardBorderHover: "hover:border-amber-500",
    textMuted: "text-amber-700"
  },
  gossaigaon_mb: {
    primary: "text-blue-600",
    accentBorder: "border-l-blue-600",
    buttonBg: "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-100",
    headingBgFrom: "from-blue-950",
    headingBgTo: "to-blue-850",
    lightBg: "bg-blue-50/30",
    lightBgHover: "hover:bg-blue-50 bg-blue-50/15 border-blue-100",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    accentBg: "bg-blue-100",
    accentText: "text-blue-800",
    bulletLine: "bg-blue-600",
    cardBorderHover: "hover:border-blue-500",
    textMuted: "text-blue-700"
  },
  kajalgaon_mb: {
    primary: "text-purple-600",
    accentBorder: "border-l-purple-600",
    buttonBg: "bg-purple-600 hover:bg-purple-700 hover:shadow-purple-100",
    headingBgFrom: "from-purple-950",
    headingBgTo: "to-purple-850",
    lightBg: "bg-purple-50/30",
    lightBgHover: "hover:bg-purple-50 bg-purple-50/15 border-purple-100",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    accentBg: "bg-purple-100",
    accentText: "text-purple-800",
    bulletLine: "bg-purple-600",
    cardBorderHover: "hover:border-purple-500",
    textMuted: "text-purple-700"
  },
  kokrajhar_mb: {
    primary: "text-sky-600",
    accentBorder: "border-l-sky-600",
    buttonBg: "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-100",
    headingBgFrom: "from-sky-950",
    headingBgTo: "to-sky-850",
    lightBg: "bg-sky-50/30",
    lightBgHover: "hover:bg-sky-50 bg-sky-50/15 border-sky-100",
    gradientFrom: "from-sky-500",
    gradientTo: "to-sky-600",
    accentBg: "bg-sky-100",
    accentText: "text-sky-850",
    bulletLine: "bg-sky-600",
    cardBorderHover: "hover:border-sky-500",
    textMuted: "text-sky-700"
  },
  mushalpur_mb: {
    primary: "text-orange-600",
    accentBorder: "border-l-orange-600",
    buttonBg: "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-100",
    headingBgFrom: "from-orange-950",
    headingBgTo: "to-orange-850",
    lightBg: "bg-orange-50/30",
    lightBgHover: "hover:bg-orange-50 bg-orange-50/15 border-orange-100",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    accentBg: "bg-orange-100",
    accentText: "text-orange-800",
    bulletLine: "bg-orange-600",
    cardBorderHover: "hover:border-orange-500",
    textMuted: "text-orange-750"
  },
  tamulpur_mb: {
    primary: "text-teal-600",
    accentBorder: "border-l-teal-600",
    buttonBg: "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-100",
    headingBgFrom: "from-teal-950",
    headingBgTo: "to-teal-850",
    lightBg: "bg-teal-50/30",
    lightBgHover: "hover:bg-teal-50 bg-teal-50/15 border-teal-100",
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600",
    accentBg: "bg-teal-100",
    accentText: "text-teal-850",
    bulletLine: "bg-teal-600",
    cardBorderHover: "hover:border-teal-500",
    textMuted: "text-teal-700"
  },
  tangla_mb: {
    primary: "text-violet-600",
    accentBorder: "border-l-violet-600",
    buttonBg: "bg-violet-600 hover:bg-violet-700 hover:shadow-violet-100",
    headingBgFrom: "from-violet-950",
    headingBgTo: "to-violet-850",
    lightBg: "bg-violet-50/30",
    lightBgHover: "hover:bg-violet-50 bg-violet-50/15 border-violet-100",
    gradientFrom: "from-violet-500",
    gradientTo: "to-violet-600",
    accentBg: "bg-violet-100",
    accentText: "text-violet-800",
    bulletLine: "bg-violet-600",
    cardBorderHover: "hover:border-violet-500",
    textMuted: "text-violet-700"
  }
};

export async function generateStaticParams() {
  return Object.keys(ulbsDatabase).map((key) => ({
    id: key,
  }));
}

export default async function ULBPage({ params }: PageProps) {
  const resolvedParams = await params;
  const ulbId = resolvedParams.id;
  const board = ulbsDatabase[ulbId];

  // Default fallback theme
  const theme = colorThemes[ulbId] || colorThemes.gossaigaon_mb;

  // Fallback if ID is invalid
  if (!board) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <UtilityBar />
        <Header />
        <main className="flex-1 max-w-4xl mx-auto p-8 flex flex-col items-center justify-center text-center">
          <AlertCircle className="w-16 h-16 text-rose-500 mb-4 animate-bounce" />
          <h1 className="text-2xl sm:text-3xl font-black text-[#003366] mb-2 uppercase">Urban Local Body Not Found</h1>
          <p className="text-slate-500 text-sm max-w-lg mb-8 font-medium">
            The requested Municipal Board or Town Committee URL ID may have changed or does not exist. Please use the navigation menu above to access all Urban Local Bodies across the Bodoland Territorial Council region.
          </p>
          <a href="/" className="px-6 py-3 bg-[#0a3a60] hover:bg-orange-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all">
            Return to Home Portal
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Hero Header Section matching Gossaigaon's visual blueprint with automatic image slideshow */}
      <section className="relative text-white overflow-hidden bg-slate-950">
        <HeroSlideshow ulbId={ulbId}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            {/* Back Button */}
            <a href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-xs uppercase tracking-wider">Back to home portal</span>
            </a>

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              {/* Building Icon Box - Scaled for responsiveness */}
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center shrink-0 border border-slate-200">
                <Building2 className={`h-8 w-8 md:h-12 md:w-12 ${theme.primary}`} />
              </div>

              {/* Title Block */}
              <div className="flex-1 w-full">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-tight md:leading-none">
                  {board.name}
                </h1>
                <p className="text-sm md:text-base text-white/90 font-bold mb-4">
                  District: {board.district} | Established: {board.estd} | Classification: {board.classification}
                </p>

                {/* Top Stats Pill Row - Highly responsive Grid & Flex Hybrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap gap-4 sm:gap-6 font-sans text-sm md:text-base mt-6 w-full">
                  {/* Card 1: Area - Sky / Ocean Glow */}
                  <div className="flex items-center gap-4 bg-gradient-to-br from-sky-500/25 via-blue-600/15 to-slate-950/40 px-5 py-3.5 md:px-6 md:py-4 rounded-2xl backdrop-blur-md border border-sky-400/30 shadow-[0_10px_30px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_rgba(14,165,233,0.4)] transition-all duration-300 w-full xl:w-auto xl:min-w-[210px] 2xl:min-w-[230px]">
                    <div className="p-2 bg-sky-500/10 rounded-xl border border-sky-400/20">
                      <MapPin className="h-5.5 w-5.5 md:h-6 md:w-6 text-sky-300 shrink-0" />
                    </div>
                    <div>
                      <span className="text-sky-200/80 font-bold uppercase text-[10px] md:text-[11px] block leading-none mb-1 md:mb-1.5 tracking-wider">Area</span>
                      <span className="text-white font-black text-base md:text-lg lg:text-xl">{board.area} sq km</span>
                    </div>
                  </div>

                  {/* Card 2: Population - Emerald / Forest Glow */}
                  <div className="flex items-center gap-4 bg-gradient-to-br from-emerald-500/25 via-teal-600/15 to-slate-950/40 px-5 py-3.5 md:px-6 md:py-4 rounded-2xl backdrop-blur-md border border-emerald-400/30 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.4)] transition-all duration-300 w-full xl:w-auto xl:min-w-[210px] 2xl:min-w-[230px]">
                    <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-400/20">
                      <Users className="h-5.5 w-5.5 md:h-6 md:w-6 text-emerald-300 shrink-0" />
                    </div>
                    <div>
                      <span className="text-emerald-200/80 font-bold uppercase text-[10px] md:text-[11px] block leading-none mb-1 md:mb-1.5 tracking-wider">Population</span>
                      <span className="text-white font-black text-base md:text-lg lg:text-xl">{board.population}</span>
                    </div>
                  </div>

                  {/* Card 3: Wards - Saffron / Sunset Glow */}
                  <div className="flex items-center gap-4 bg-gradient-to-br from-amber-500/25 via-orange-600/15 to-slate-950/40 px-5 py-3.5 md:px-6 md:py-4 rounded-2xl backdrop-blur-md border border-amber-400/30 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.4)] transition-all duration-300 w-full xl:w-auto xl:min-w-[210px] 2xl:min-w-[230px]">
                    <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-400/20">
                      <Home className="h-5.5 w-5.5 md:h-6 md:w-6 text-amber-300 shrink-0" />
                    </div>
                    <div>
                      <span className="text-amber-200/80 font-bold uppercase text-[10px] md:text-[11px] block leading-none mb-1 md:mb-1.5 tracking-wider">Wards</span>
                      <span className="text-white font-black text-base md:text-lg lg:text-xl">{board.wards} Wards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroSlideshow>
      </section>

      {/* Overlaid Banner Panel: Detailed Municipal metrics */}
      <section className="bg-white shadow-xl -mt-8 relative z-10 rounded-2xl mx-4 sm:mx-6 lg:mx-8 border border-slate-200/80 overflow-hidden max-w-7xl lg:mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Total Holdings */}
            <div className={`py-6 px-4 text-center ${theme.lightBgHover} transition-colors duration-200 rounded-tl-xl`}>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <Home className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black text-slate-800">{board.holdings}</div>
              <div className="text-xs text-slate-500 font-extrabold uppercase mt-0.5 tracking-wider">Total Holdings</div>
            </div>

            {/* Annual Revenue */}
            <div className={`py-6 px-4 text-center ${theme.lightBgHover} transition-colors duration-200`}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                <IndianRupee className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black text-slate-800">{board.annualRevenue}</div>
              <div className="text-xs text-slate-500 font-extrabold uppercase mt-0.5 tracking-wider">Annual Revenue</div>
            </div>

            {/* Active Projects */}
            <div className={`py-6 px-4 text-center ${theme.lightBgHover} transition-colors duration-200`}>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black text-slate-800">{board.activeProjects}</div>
              <div className="text-xs text-slate-500 font-extrabold uppercase mt-0.5 tracking-wider">Active Projects</div>
            </div>

            {/* Service Rate */}
            <div className={`py-6 px-4 text-center ${theme.lightBgHover} transition-colors duration-200 rounded-tr-xl`}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-black text-slate-800">{board.serviceRate}</div>
              <div className="text-xs text-slate-500 font-extrabold uppercase mt-0.5 tracking-wider">Service Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Grid Content Layout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT CONTAINER (Col Span 2) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About card */}
              <div className="bg-white shadow-md border border-slate-200/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center shrink-0`}>
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                    About {board.name.replace(" Municipal Board", "").replace(" Town Committee", "")}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                  {board.overview}
                </p>
              </div>

              {/* Basic Information Block branded with custom colored gradients & box shadows */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(16,185,129,0.25)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Basic Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Category (ULB Type) - Blue theme */}
                  <div className="p-4 bg-gradient-to-r from-blue-50/70 via-blue-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-blue-600 shadow-[0_4px_16px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">ULB Type</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.classification}</p>
                  </div>

                  {/* Year (Establishment Year) - Green theme */}
                  <div className="p-4 bg-gradient-to-r from-[#f0fdf4] via-emerald-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-[#10b981] shadow-[0_4px_16px_rgba(16,185,129,0.06)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">Establishment Year</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.estd}</p>
                  </div>

                  {/* Area (Total Area) - Purple theme */}
                  <div className="p-4 bg-gradient-to-r from-[#faf5ff] via-purple-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-purple-600 shadow-[0_4px_16px_rgba(147,51,234,0.06)] hover:shadow-[0_8px_24px_rgba(147,51,234,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">Total Area</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.area} sq km</p>
                  </div>

                  {/* Population - Orange theme */}
                  <div className="p-4 bg-gradient-to-r from-[#fff7ed] via-orange-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-orange-500 shadow-[0_4px_16px_rgba(249,115,22,0.06)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">Population</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.population}</p>
                  </div>

                  {/* Wards - Pink theme */}
                  <div className="p-4 bg-gradient-to-r from-[#fdf2f8] via-rose-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-pink-600 shadow-[0_4px_16px_rgba(219,39,119,0.06)] hover:shadow-[0_8px_24px_rgba(219,39,119,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">Number of Wards</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.wards} Wards</p>
                  </div>

                  {/* Literacy - Indigo theme */}
                  <div className="p-4 bg-gradient-to-r from-[#e0e7ff]/50 via-indigo-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.06)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">Literacy Rate</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.literacyRate}</p>
                  </div>

                  {/* PIN Code - Teal/Mint theme */}
                  <div className="p-4 bg-gradient-to-r from-[#f0fdfa] via-teal-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-teal-600 shadow-[0_4px_16px_rgba(13,148,136,0.06)] hover:shadow-[0_8px_24px_rgba(13,148,136,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">PIN Code</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.pinCode}</p>
                  </div>

                  {/* STD Code - Cyan theme */}
                  <div className="p-4 bg-gradient-to-r from-[#ecfeff] via-cyan-100/30 to-white/10 rounded-xl border-l-[3.5px] border-l-cyan-600 shadow-[0_4px_16px_rgba(8,145,178,0.06)] hover:shadow-[0_8px_24px_rgba(8,145,178,0.12)] transition-all duration-300">
                    <span className="text-[11px] md:text-xs font-bold text-slate-500 tracking-wider uppercase block mb-1">STD Code</span>
                    <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{board.stdCode}</p>
                  </div>
                </div>
              </div>

              {/* Leadership & Administration Branded Cards */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(147,51,234,0.25)]">
                    <Users className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Leadership & Administration
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Executive Officer Card - Purple Theme */}
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-100 border-l-[4px] border-l-purple-600 shadow-[0_8px_25px_rgba(147,51,234,0.08)] hover:shadow-[0_12px_35px_rgba(147,51,234,0.16)] transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 h-24 flex items-center justify-center relative">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="p-5 font-sans">
                      <h3 className="font-extrabold text-slate-800 text-base md:text-lg mb-1 leading-snug">{board.execOfficer}</h3>
                      <div className="inline-flex items-center rounded-full bg-purple-100 text-purple-700 text-[10px] font-extrabold uppercase px-2.5 py-1 mb-4 border border-purple-200/50">
                        Executive Officer
                      </div>
                      
                      <div className="space-y-2.5 text-xs md:text-[13px] font-bold text-slate-600">
                        <div className="flex items-center gap-2.5">
                          <Phone className="h-4 w-4 text-purple-600 shrink-0" />
                          <span>{board.execOfficerPhone}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Mail className="h-4 w-4 text-purple-600 shrink-0" />
                          <span className="break-all">{board.execOfficerEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chairperson Card - Emerald / Green Theme */}
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-100 border-l-[4px] border-l-emerald-600 shadow-[0_8px_25px_rgba(16,185,129,0.08)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.16)] transition-all duration-300">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 h-24 flex items-center justify-center relative">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="p-5 font-sans">
                      <h3 className="font-extrabold text-slate-800 text-base md:text-lg mb-1 leading-snug">{board.chairperson}</h3>
                      <div className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase px-2.5 py-1 mb-4 border border-emerald-200/50">
                        Chairperson
                      </div>
                      
                      <div className="space-y-2.5 text-xs md:text-[13px] font-bold text-slate-600">
                        <div className="flex items-center gap-2.5">
                          <Phone className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{board.chairpersonPhone}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span className="break-all">{board.chairpersonEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Services Panel */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.25)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Available Services
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Service 1: Property Tax (Orange Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-orange-500/5 via-orange-500/10 to-white/10 border-2 border-orange-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-orange-500 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors">Property Tax</div>
                  </a>

                  {/* Service 2: Trade License (Amber Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-white/10 border-2 border-amber-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-amber-500 hover:shadow-[0_8px_20px_rgba(245,158,11,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-amber-600 transition-colors">Trade License</div>
                  </a>

                  {/* Service 3: Water Connection (Sky Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-sky-500/5 via-sky-500/10 to-white/10 border-2 border-sky-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-sky-500 hover:shadow-[0_8px_20px_rgba(14,165,233,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(14,165,233,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Droplets className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors">Water connection</div>
                  </a>

                  {/* Service 4: Birth Certificate (Emerald Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-emerald-500/5 via-emerald-500/10 to-white/10 border-2 border-emerald-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-emerald-500 hover:shadow-[0_8px_20px_rgba(16,185,129,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-emerald-600 transition-colors">Birth Certificate</div>
                  </a>

                  {/* Service 5: Death Certificate (Rose Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-rose-500/5 via-rose-500/10 to-white/10 border-2 border-rose-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-rose-500 hover:shadow-[0_8px_20px_rgba(244,63,94,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(244,63,94,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-rose-600 transition-colors">Death Certificate</div>
                  </a>

                  {/* Service 6: Building Plan (Indigo Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-indigo-500/5 via-indigo-500/10 to-white/10 border-2 border-indigo-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-indigo-500 hover:shadow-[0_8px_20px_rgba(99,102,241,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Building Plan</div>
                  </a>

                  {/* Service 7: Waste Management (Teal Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-teal-500/5 via-teal-500/10 to-white/10 border-2 border-teal-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-teal-500 hover:shadow-[0_8px_20px_rgba(20,184,166,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(20,184,166,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Trash2 className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">Waste Management</div>
                  </a>

                  {/* Service 8: Street Lighting (Yellow/Orange Theme) */}
                  <a href="/services" className="p-4 bg-gradient-to-br from-yellow-500/5 via-yellow-500/10 to-white/10 border-2 border-yellow-400/70 rounded-xl text-center transition-all duration-300 cursor-pointer group hover:border-yellow-500 hover:shadow-[0_8px_20px_rgba(234,179,8,0.12)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-3 shadow-[0_4px_10px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs md:text-[13px] font-extrabold text-slate-800 tracking-tight group-hover:text-yellow-600 transition-colors">Street Lighting</div>
                  </a>
                </div>
              </div>

              {/* Performance Dashboard block */}
              <div className="bg-white shadow-md border border-slate-200/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                    Performance Dashboard (FY 2025-26)
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className={`p-5 rounded-2xl text-white bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} shadow-sm`}>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <IndianRupee className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black">{board.perfRevenue}</div>
                    <div className="text-[10px] text-white/80 uppercase font-black tracking-wide leading-none mt-1">Revenue Collected</div>
                  </div>

                  <div className="p-5 rounded-2xl text-white bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black">{board.perfServices}</div>
                    <div className="text-[10px] text-white/80 uppercase font-black tracking-wide leading-none mt-1">Services Delivered</div>
                  </div>

                  <div className="p-5 rounded-2xl text-white bg-gradient-to-br from-purple-500 to-purple-600 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black">{board.perfGrievances}</div>
                    <div className="text-[10px] text-white/80 uppercase font-black tracking-wide leading-none mt-1">Grievances Resolved</div>
                  </div>

                  <div className="p-5 rounded-2xl text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-black">{board.perfProjects}</div>
                    <div className="text-[10px] text-white/80 uppercase font-black tracking-wide leading-none mt-1">Projects Completed</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR (Col Span 1) */}
            <div className="space-y-6">
              
              {/* Quick Actions Card */}
              <div className="bg-white shadow-md border border-slate-200/80 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} flex items-center justify-center text-white`}>
                    <FileText className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Quick Actions</h3>
                </div>

                <div className="space-y-3 font-sans">
                  <a href="/services" className="w-full">
                    <button className={`w-full text-center py-3 px-4 ${theme.buttonBg} text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-between`}>
                      <span>Apply for Services</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </a>

                  <a href="/services" className="w-full">
                    <button className="w-full text-center py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-between">
                      <span>Track Application Status</span>
                      <ChevronRight className="h-4 w-4 text-slate-500" />
                    </button>
                  </a>

                  <a href="/grievance" className="w-full font-bold">
                    <button className="w-full text-center py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-between">
                      <span>File Public Grievance</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </a>

                  <a href={`mailto:${board.email}`} className="w-full">
                    <button className="w-full text-center py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-between">
                      <span>Contact Civil Office</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </button>
                  </a>
                </div>
              </div>

              {/* Latest Announcements Board styled as card matching the user mockup exactly */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-xl p-6 space-y-4 animate-in fade-in-50 duration-300">
                {/* Header Title with orange/red-orange round icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.25)]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Latest Updates
                  </h3>
                </div>

                <div className="space-y-4 font-sans">
                  {/* Update Card 1: Smart Street Lights Installed */}
                  <div className="flex items-start gap-4 p-4 bg-[#f0fdf4]/80 border-l-[3.5px] border-l-[#10b981] rounded-xl transition-all duration-200">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-[#10b981] text-xs font-extrabold tracking-wide">
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span>14 Dec 2024</span>
                      </div>
                      <h4 className="font-extrabold text-[#111827] text-sm md:text-[15px] mt-1.5 mb-1 leading-tight">
                        Smart Street Lights Installed
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-500 leading-normal">
                        LED lights in all {board.wards || 12} wards
                      </p>
                    </div>
                  </div>

                  {/* Update Card 2: Health Camp Organized */}
                  <div className="flex items-start gap-4 p-4 bg-[#f0fdf4]/80 border-l-[3.5px] border-l-[#10b981] rounded-xl transition-all duration-200">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 text-[#10b981] text-xs font-extrabold tracking-wide">
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span>11 Dec 2024</span>
                      </div>
                      <h4 className="font-extrabold text-[#111827] text-sm md:text-[15px] mt-1.5 mb-1 leading-tight">
                        Health Camp Organized
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-500 leading-normal">
                        Free medical checkup for 500+ citizens
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information card designed perfectly matching the user mockup with exact data */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-xl p-6 space-y-4">
                {/* Header Title with green round icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(16,185,129,0.25)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Contact Information
                  </h3>
                </div>

                {/* Card Items Stack */}
                <div className="space-y-4 font-sans">
                  {/* Card 1: Office Address (Blue style) */}
                  <div className="flex items-start gap-4 p-4 bg-blue-50/50 border-l-[3.5px] border-l-blue-600 rounded-xl transition-all duration-200">
                    <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-[#1e293b] text-sm md:text-[15px] mb-1">
                        Office Address
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-600 leading-normal">
                        {ulbId === 'gossaigaon_mb' 
                          ? "Gossaigaon Municipal Board, Ward No. 5, Gossaigaon, Assam - 783360"
                          : `${board.name}, Ward No. 5, ${board.district}, Assam - ${board.pinCode || '783360'}`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Phone (Green style) */}
                  <div className="flex items-start gap-4 p-4 bg-[#f0fdf4]/80 border-l-[3.5px] border-l-[#10b981] rounded-xl transition-all duration-200">
                    <Phone className="h-5 w-5 text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-[#1e293b] text-sm md:text-[15px] mb-1">
                        Phone
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-600 tracking-wide">
                        {ulbId === 'gossaigaon_mb' 
                          ? "03662-272100, 272101" 
                          : `${board.execOfficerPhone || '03662-272100'}, ${board.chairpersonPhone || '272101'}`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Email (Purple style) */}
                  <div className="flex items-start gap-4 p-4 bg-[#faf5ff]/90 border-l-[3.5px] border-l-purple-600 rounded-xl transition-all duration-200">
                    <Mail className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-[#1e293b] text-sm md:text-[15px] mb-1">
                        Email
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-600 break-all leading-normal">
                        {ulbId === 'gossaigaon_mb' 
                          ? "gossaigaon.mb@btr.gov.in" 
                          : (board.email || `${ulbId.replace('_mb', '')}.mb@btr.gov.in`)
                        }
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Office Hours (Orange style) */}
                  <div className="flex items-start gap-4 p-4 bg-[#fff7ed]/90 border-l-[3.5px] border-l-orange-500 rounded-xl transition-all duration-200">
                    <Clock className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-[#1e293b] text-sm md:text-[15px] mb-1">
                        Office Hours
                      </h4>
                      <p className="text-xs md:text-[13px] font-bold text-slate-600 leading-normal">
                        Mon-Fri: 10:00 AM - 5:00 PM, Sat: 10:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
