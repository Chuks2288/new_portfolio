import { Briefcase, Contact, Dribbble, Facebook, File, FileText, Github, GraduationCap, Home, Instagram, Linkedin, MessageCircle, MessageSquare, Quote, School, Twitter } from "lucide-react";
import { BsBehance, BsStackOverflow } from "react-icons/bs";
import { IconType } from "react-icons";

interface SocialMediaIcon {
    icon: IconType;
    link: string;
    tip: string;
}
interface menuIcons {
    icon: IconType;
    path: string;
    tip: string;
}
interface BioDataItem {
    label: string;
    value: string;
}
interface AllSkillItem {
    label: string;
}

type ServiceCategory = {
    title: string
    value: string[]
}

interface Experience {
    role: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string;
    bullets: string[];
}

const calculateAge = (birthDate: Date): string => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age.toString();
};

const birthDate = new Date("1998-01-29");

export const socialMediaIcons: SocialMediaIcon[] = [
    { icon: Instagram, link: "https://www.instagram.com", tip: "Instagram" },
    { icon: Twitter, link: "https://www.twitter.com", tip: "Twitter" },
    { icon: Linkedin, link: "https://www.linkedin.com", tip: "Linkedin" },
    { icon: Github, link: "https://www.github.com", tip: "Github" },
    { icon: BsStackOverflow, link: "https://stackoverflow.com", tip: "StackOverflow" },
];

export const menuIcons: menuIcons[] = [
    { icon: Home, path: "#home", tip: "Home" },
    { icon: Briefcase, path: "#services", tip: "Services" },
    { icon: Quote, path: "#testimonies", tip: "Testimonies" },
    { icon: GraduationCap, path: "#education", tip: "Education" },
    { icon: FileText, path: "#blog", tip: "Blog" },
    { icon: MessageCircle, path: "#contact", tip: "Contact" },
];

export const bioData: BioDataItem[] = [
    { label: "Age", value: calculateAge(birthDate) },
    { label: "Country", value: "NG" },
    { label: "Freelance", value: "Available" },
    { label: "Address", value: "Benin City, NG" },
];

export const spokenLanguages = [
    { label: "English", percent: "100%", value: "100" },
    { label: "French", percent: "40%", value: "40" },
]

export const AllSkills: AllSkillItem[] = [
    { label: "JavaScript" },
    { label: "TypeScript" },
    { label: "React.js" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "Express.js" },
    { label: "MongoDB" },
    { label: "PostgreSQL" },
    { label: "Prisma ORM" },
    { label: "Tailwind CSS" },
    { label: "JWT Authentication" },
    { label: "Git & GitHub" },
    { label: "Docker" },
    { label: "CI/CD" },
    { label: "Testing (Jest, React Testing Library)" },

    { label: "Redis & Caching Strategies" },
    { label: "WebSockets (Real-time communication)" },
    { label: "Serverless Functions (Vercel, AWS Lambda)" },
    { label: "System Design & Scalable Architecture" }
];


export const services: ServiceCategory[] = [
    {
        title: "Core Web Services",
        value: [
            "Web Development (Frontend & Backend)",
            "Website Design (Custom & Templates)",
            "E-commerce Development",
            "Landing Page Development",
            "CMS Integration (e.g., WordPress, Sanity)"
        ]
    },
    {
        title: "Mobile Services",
        value: [
            "Mobile App Development (iOS & Android)",
            "Cross-Platform Apps (React Native, Flutter)",
            "App UI/UX Design",
            "App Store Optimization (ASO)"
        ]
    },
    {
        title: "UI/UX & Design",
        value: [
            "Wireframing & Prototyping",
            "Mobile-First Design",
            "UX Audit & Redesign"
        ]
    },
    {
        title: "Marketing & Branding",
        value: [
            "SEO Optimization",
            "Conversion Rate Optimization (CRO)",
            "Analytics & Tracking Setup (GA4, Hotjar)",
            "Brand Identity & Logo Design",
            "Email Template Design & Integration"
        ]
    },
    {
        title: "DevOps & Performance",
        value: [
            "Website Performance Optimization",
            "Hosting & Deployment (Vercel, Netlify, AWS)",
            "API Development & Integration",
            "Maintenance & Support"
        ]
    },
    {
        title: "AI & Automation",
        value: [
            "Chatbot Integration (e.g., ChatGPT, Dialogflow)",
            "Workflow Automation (Zapier, Make.com)",
            "Custom AI Tools & Dashboards",
            "AI-Powered Search & Recommendations",
            "Prompt Engineering & OpenAI API Integration"
        ]
    }
]



export const educations = [
    {
        universityName: "University of Benin",
        course: "B.Sc. Biochemistry",
        // position: "Student",
        startDate: "Sept 2017",
        endDate: "Nov 2021",
        description:
            "Studied biochemical processes and gained analytical skills applicable in research, problem-solving, and data interpretation.",
    },
    {
        universityName: "The Complete Web Developer Bootcamp (Udemy)",
        course: "Full-Stack Web Development with JavaScript",
        // position: "Certification",
        startDate: "Feb 2022",
        endDate: "May 2022",
        description:
            "Built real-world web applications using HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React. Covered REST APIs, authentication, and deployment strategies.",
    },
    {
        universityName: "Project Management Expertise (Coursera)",
        course: "Agile and Traditional Project Lifecycle",
        // position: "Certification",
        startDate: "June 2022",
        endDate: "Aug 2022",
        description:
            "Studied Agile and Scrum methodologies, communication strategies, risk mitigation, and project scope management.",
    },
    {
        universityName: "React Native - The Practical Guide (Udemy)",
        course: "Mobile App Development with React Native",
        // position: "Certification",
        startDate: "Jan 2023",
        endDate: "Apr 2023",
        description:
            "Developed cross-platform mobile applications using React Native, Expo, and TypeScript. Gained hands-on experience with navigation, API calls, and native integrations.",
    },
    {
        universityName: "Microsoft Azure Fundamentals (Coursera)",
        course: "AZ-900: Microsoft Cloud Concepts",
        // position: "Certification",
        startDate: "Sept 2023",
        endDate: "Oct 2023",
        description:
            "Covered Azure services, workloads, and core cloud principles. Built skills around identity, governance, compliance, and pricing models.",
    },
    {
        universityName: "AWS Certified Cloud Practitioner (Udemy)",
        course: "Cloud Fundamentals & AWS Core Services",
        // position: "Certification",
        startDate: "Mar 2024",
        endDate: "May 2024",
        description:
            "Learned core AWS services including compute, storage, networking, and billing. Built foundational knowledge of cloud architecture and deployment strategies.",
    }
];







export const experiences: Experience[] = [
    {
        role: "Software Engineer",
        company: "Novain Technology",
        startDate: "Mar 2022",
        endDate: "Present",
        description:
            "A service-oriented company delivering scalable technical solutions in a collaborative environment.",
        bullets: [
            "Developed a geolocation feature that reduced delivery times by 15% and errors by 40%.",
            "Engineered secure authentication systems and improved load time by 30%.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Versatile Technology (Remote)",
        startDate: "Jan 2020",
        endDate: "Dec 2021",
        description: "",
        bullets: [
            "Optimized site performance with caching and reduced latency significantly.",
            "Built real-time features with Socket.io, improving user retention by 30%.",
        ],
    },
    {
        role: "Frontend Engineer",
        company: "InspiRational, Lagos, NG",
        startDate: "Aug 2017",
        endDate: "Jul 2019",
        description: "",
        bullets: [
            "Implemented frontend debouncing and rate-limiting to reduce API costs by ~30%.",
            "Architected microservice-based frontend structure to enhance scalability.",
        ],
    },
];
