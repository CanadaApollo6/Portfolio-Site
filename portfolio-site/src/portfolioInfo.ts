import {
    ReviewCardData,
    ProjectCardData,
    SkillAvatarProps,
    BioStepData,
    NavButtonData,
    spotifyGreen,
} from "./types";
import CarlisleLogo from "./images/carlisle-logo.png";
import DaveyLogo from "./images/davey-logo.png";
import CbsLogo from "./images/cbs-logo.png";
import GoogleLogo from "./images/google-cloud-logo.svg";
import PythonLogo from "./images/python-logo.png";
import TensorFlowLogo from "./images/tensorflow-logo.png";
import TypeScriptLogo from "./images/typescript-logo.png";
import SqlLogo from "./images/sql-logo.png";
import ReactLogo from "./images/react-logo.png";
import JsLogo from "./images/js-logo.png";
import HtmlLogo from "./images/html-logo.png";
import CssLogo from "./images/css-logo.png";
import RLogo from "./images/r-logo.png";
import OfficeLogo from "./images/office-logo.png";
import FlutterLogo from "./images/flutter-logo.png";

export const themeColor: string = spotifyGreen;

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

export const bioSteps: BioStepData = {
    stepOneTitle: "University of Dayton",
    stepOneDescription:
        "I attended the University of Dayton from 2016-2020, earning a 3.89 GPA while playing in the Pride of Dayton Marching Band and Dayton Jazz Ensemble. I graduated with a B. Sc. in Biology, minors in Chemistry and Geology, and a 2-year GIS graduate certificate.",
    stepOneImage:
        "https://images.unsplash.com/photo-1601510683322-a4d0c7131572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    stepTwoTitle: "Smart Data - Intern",
    stepTwoDescription:
        "From May of 2020 until August of that same year, I became a software developer intern at Smart Data. I spent my time doing hundreds of hours of learning from other developers and online courses from Udemy, along with some basic React development on a project for Google Cloud.",
    stepTwoImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    stepThreeTitle: "Smart Data - Software Engineer",
    stepThreeDescription:
        "After my internship ended, I accepted an offer in August of 2020 to remain at Smart Data and become a full-time software engineer, where I remain now.",
    stepThreeImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
};

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
