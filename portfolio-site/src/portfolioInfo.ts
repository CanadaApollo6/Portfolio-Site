import {
    ReviewCardData,
    ProjectCardData,
    SkillAvatarProps,
    BioStepData,
    NavButtonData,
} from "./types";
import CarlisleLogo from "./images/logos/carlisle-logo.png";
import DaveyLogo from "./images/logos/davey-logo.png";
import CbsLogo from "./images/logos/cbs-logo.png";
import GoogleLogo from "./images/logos/google-cloud-logo.svg";
import PythonLogo from "./images/logos/python-logo.png";
import TensorFlowLogo from "./images/logos/tensorflow-logo.png";
import TypeScriptLogo from "./images/logos/typescript-logo.png";
import SqlLogo from "./images/logos/sql-logo.png";
import ReactLogo from "./images/logos/react-logo.png";
import JsLogo from "./images/logos/js-logo.png";
import HtmlLogo from "./images/logos/html-logo.png";
import CssLogo from "./images/logos/css-logo.png";
import RLogo from "./images/logos/r-logo.png";
import OfficeLogo from "./images/logos/office-logo.png";
import FlutterLogo from "./images/logos/flutter-logo.png";
import GravityDashboard from "./images/projects/gravity/gravity-dashboard.png";
import GravityElution from "./images/projects/gravity/gravity-elution.png";
import GravityGraphs from "./images/projects/gravity/gravity-graphs.png";
import DaveyDashboard from "./images/projects/davey/davey-dashboard.png";
import DaveyDashboardSider from "./images/projects/davey/davey-dashboard-2.png";
import DaveyMessageDesktop from "./images/projects/davey/davey-message-desktop.png";
import DaveyMobileOne from "./images/projects/davey/davey-mobile-1.png";
import DaveyMobileTwo from "./images/projects/davey/davey-mobile-2.png";
import DaveyMobileThree from "./images/projects/davey/davey-mobile-3.png";
import DaveyMobileMenu from "./images/projects/davey/davey-mobile-menu.png";
import DaveyMobileMessages from "./images/projects/davey/davey-mobile-messages.png";
import DaveyMobileMessageForm from "./images/projects/davey/davey-mobile-message-form.png";

export const themeColor: string = "#0099ff";

export const name: string = "Riel St. Amand";
export const intro: string =
    "A Machine Learning Engineer and Full Stack Developer. As a self-taught developer, my goal is always the same with any project: Learn, Improve, and Produce.";
export const linkedInUrl: string = "https://www.linkedin.com/in/riel-st-amand/";
export const gitHubUrl: string = "https://github.com/CanadaApollo6";
export const gitHubUrlWork: string = "https://github.com/RielStAmandSD";

export const navTabs: NavButtonData[] = [
    {
        label: "Hello",
        sectionId: "section1",
    },
    {
        label: "Bio",
        sectionId: "section2",
    },
    {
        label: "Skills",
        sectionId: "section3",
    },
    {
        label: "Projects",
        sectionId: "section4",
    },
    {
        label: "Reviews",
        sectionId: "section5",
    },
];

export const bioStepList: BioStepData[] = [
    {
        step: "01",
        title: "University of Dayton",
        description:
            "I attended the University of Dayton from 2016-2020, earning a 3.89 GPA while playing in the Pride of Dayton Marching Band and Dayton Jazz Ensemble. I graduated with a B. Sc. in Biology, minors in Chemistry and Geology, and a 2-year GIS graduate certificate.",
        image: "https://images.unsplash.com/photo-1601510683322-a4d0c7131572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
        step: "02",
        title: "Smart Data - Intern",
        description:
            "From May of 2020 until August of that same year, I became a software developer intern at Smart Data. I spent my time doing hundreds of hours of learning from other developers and online courses from Udemy, along with some basic React development on a project for Google Cloud.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    },
    {
        step: "03",
        title: "Smart Data - Software Engineer",
        description:
            "After my internship ended, I accepted an offer in August of 2020 to remain at Smart Data and become a full-time software engineer, where I remain now.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    },
];

export const skills: SkillAvatarProps[] = [
    {
        skillName: "Python",
        imageSrc: PythonLogo,
    },
    {
        skillName: "TensorFlow 2.0+",
        imageSrc: TensorFlowLogo,
    },
    {
        skillName: "TypeScript",
        imageSrc: TypeScriptLogo,
    },
    {
        skillName: "SQL & SSMS",
        imageSrc: SqlLogo,
    },
    {
        skillName: "React",
        imageSrc: ReactLogo,
    },
    {
        skillName: "JavaScript (ES6+)",
        imageSrc: JsLogo,
    },
    {
        skillName: "HTML5",
        imageSrc: HtmlLogo,
    },
    {
        skillName: "CSS3",
        imageSrc: CssLogo,
    },
    {
        skillName: "R",
        imageSrc: RLogo,
    },
    {
        skillName: "Office 365",
        imageSrc: OfficeLogo,
    },
    {
        skillName: "Flutter",
        imageSrc: FlutterLogo,
    },
];

const mobileImageHeight: number = 500;

export const projects: ProjectCardData[] = [
    {
        companyName: "Carlisle Companies Inc",
        startDate: "November 2021",
        endDate: "Present",
        role: "Full Stack Engineer",
        techUsed: "React, TypeScript, Python, Flask, SQL Server, SSMS",
        description:
            "Working on a 6 month contract with Carlisle as a Smart Data developer, helping to add new workflows to an existing React/TS web application with a Flask back-end built on a SQL Server database.",
        companyColor: "#004daa",
        companyLogo: CarlisleLogo,
    },
    {
        companyName: "Davey Tree",
        startDate: "April 2021",
        endDate: "October 2021",
        role: "React Developer",
        techUsed: "React, TypeScript, SAP CDC, .NET Core, C#",
        description:
            "Worked as the primary front-end developer on a new customer portal for Davey Tree using React/TS. The application integrates with SAP Customer Data Cloud and a custom .NET Core API.",
        companyColor: "#008751",
        companyLogo: DaveyLogo,
        gallery: [
            {
                image: DaveyDashboard,
                title: "Dashboard",
            },
            {
                image: DaveyDashboardSider,
                title: "Dashboard w/Sider Open",
            },
            {
                image: DaveyMessageDesktop,
                title: "New Message Form",
            },
            {
                image: DaveyMobileOne,
                title: "Mobile Screen Top",
                height: mobileImageHeight,
            },
            {
                image: DaveyMobileTwo,
                title: "Mobile Screen Middle",
                height: mobileImageHeight,
            },
            {
                image: DaveyMobileThree,
                title: "Mobile Screen Bottom",
                height: mobileImageHeight,
            },
            {
                image: DaveyMobileMenu,
                title: "Mobile Menu",
                height: mobileImageHeight,
            },
            {
                image: DaveyMobileMessages,
                title: "Mobile Message Display",
                height: mobileImageHeight,
            },
            {
                image: DaveyMobileMessageForm,
                title: "Mobile Message Form",
                height: mobileImageHeight,
            },
        ],
    },
    {
        companyName: "Cooperative Business Services",
        startDate: "February 2021",
        endDate: "April 2021",
        role: "Data Engineer",
        techUsed: "NodeJS, SQL Server, SSIS, SSMS, PowerShell",
        description:
            "Helped complete and deliver to production a data integration and PDF report generation tool built on NodeJS and SSIS, handling custom client Excel files",
        companyColor: "rgb(163, 209, 143)",
        companyLogo: CbsLogo,
    },
    {
        companyName: "Gravity Diagnostics",
        startDate: "October 2020",
        endDate: "January 2021",
        role: "Machine Learning Engineer",
        techUsed: "Python, TensorFlow, Google Colab, React, TypeScript",
        description:
            "Created a suite of Tensorflow neural nets to automate COVID-19 PCR test diagnosis along with a React/TS dashboard for data visualization",
        companyColor: "black",
        companyLogo:
            "https://gravitydiagnostics.com/wp-content/uploads/2018/05/Gravity-Diagnostics-Logo-10in.svg",
        gallery: [
            {
                image: GravityGraphs,
                title: "Result Graphs",
            },
            {
                image: GravityDashboard,
                title: "Dashboard",
            },
            {
                image: GravityElution,
                title: "Elution Display",
            },
        ],
    },
    {
        companyName: "Green Building Consulting",
        startDate: "September 2020",
        endDate: "September 2020",
        role: "VBA Developer",
        techUsed: "VBA, Microsoft Excel",
        description:
            "Worked on a short 24 work hour contract writing some new and enhancing some existing Excel macros in VBA",
        companyColor: "#8db90a",
        companyLogo:
            "https://greenbldgconsulting.com/templates/g5_hydrogen/custom/images/banner.png",
    },
    {
        companyName: "Google Cloud",
        startDate: "June 2020",
        endDate: "August 2020",
        role: "React Developer (Intern)",
        techUsed: "React, TypeScript, Firebase",
        description:
            "Worked on React/TS code for a project with Google Cloud, including file upload to Firebase and basic page templates.",
        companyColor: "rgb(68, 132, 244)",
        companyLogo: GoogleLogo,
    },
];

export const reviews: ReviewCardData[] = [
    {
        quote: "Pleasure working with you - thanks for your work, really enjoyed having you on the team.",
        reviewerName: "Justus Bär",
        reviewerTitle: "Product Manager",
        reviewerCompany: "YouTube",
    },
    {
        quote: "It was an absolute pleasure working with you -- thank you so much for all your help and amazing work on the application!",
        reviewerName: "Tanya Dainoski",
        reviewerTitle: "Digital Strategist",
        reviewerCompany: "Google Cloud",
    },
    {
        quote: "Obviously, I cannot stress it enough, I am very appreciative and thankful for all of the hard work you have put into this project. You have done a fantastic job and I hope we will be able to continue working together",
        reviewerName: "Ryan Walker",
        reviewerTitle: "Director of Research & Development",
        reviewerCompany: "Gravity Diagnostics",
    },
    {
        quote: "I really appreciate your whole team's time and work on this project. It's going to have a huge impact on our company's project efficiencies.",
        reviewerName: "Abby Adams",
        reviewerTitle: "Senior Project Manager",
        reviewerCompany: "Green Building Consulting",
    },
    {
        quote: "Far from not bad, I feel like you're exceeding expectations",
        reviewerName: "Kris Hatcher",
        reviewerTitle: "Former Team Member",
        reviewerCompany: "Smart Data",
    },
    {
        quote: "Hey I wanted to say that I really enjoyed working with you. You are very talented and have a bright future ahead of you!",
        reviewerName: "Philippe Jardin",
        reviewerTitle: "Former SAP Practice Director",
        reviewerCompany: "Smart Data",
    },
];
