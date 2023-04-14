import { ProjectCardData } from "../types";
import CarlisleLogo from "../images/logos/carlisle-logo.png";
import DaveyLogo from "../images/logos/davey-logo.png";
import CbsLogo from "../images/logos/cbs-logo.png";
import GoogleLogo from "../images/logos/google-cloud-logo.svg";
import CoreBTSLogo from "../images/logos/corebts-logo.png";
import GravityDashboard from "../images/projects/gravity/gravity-dashboard.png";
import GravityElution from "../images/projects/gravity/gravity-elution.png";
import GravityGraphs from "../images/projects/gravity/gravity-graphs.png";
import DaveyDashboard from "../images/projects/davey/davey-dashboard.png";
import DaveyDashboardSider from "../images/projects/davey/davey-dashboard-2.png";
import DaveyMessageDesktop from "../images/projects/davey/davey-message-desktop.png";
import DaveyMobileOne from "../images/projects/davey/davey-mobile-1.png";
import DaveyMobileTwo from "../images/projects/davey/davey-mobile-2.png";
import DaveyMobileThree from "../images/projects/davey/davey-mobile-3.png";
import DaveyMobileMenu from "../images/projects/davey/davey-mobile-menu.png";
import DaveyMobileMessages from "../images/projects/davey/davey-mobile-messages.png";
import DaveyMobileMessageForm from "../images/projects/davey/davey-mobile-message-form.png";

const mobileImageHeight: number = 500;
const coreBtsGradient: string =
  "linear-gradient(90deg, #5daa46 0%, #00919e 50%, #00adee 100%)";

export const projects: ProjectCardData[] = [
  {
    companyName: "Core BTS Client",
    startDate: "January 2023",
    endDate: "May 2023",
    role: "Full Stack Engineer",
    techUsed: "ReactJS, .NET Core/C#, SQL Server, Azure DevOps, Okta",
    description:
      "Worked with [REDACTED], a Japanese client, as a Core BTS engineer. I helped complete development of the internal capital expenditures web app that the project was creating. I focused on the front-end but worked on all areas of the app.",
    companyColor: coreBtsGradient,
    companyLogo: CoreBTSLogo,
  },
  {
    companyName: "Core BTS Client",
    startDate: "June 2022",
    endDate: "December 2022",
    role: "Full Stack Engineer",
    techUsed:
      "AureliaJS, Azure DevOps, C# in .NET Core & .NET Framework, SQL Server, Kubernetes",
    description:
      "Worked with [REDACTED], a construction hardware company, as a Core BTS engineer. I worked on a team which oversaw the development and maintenance of three internal applications.",
    companyColor: coreBtsGradient,
    companyLogo: CoreBTSLogo,
  },
  {
    companyName: "Core BTS Client",
    startDate: "February 2022",
    endDate: "June 2022",
    role: "Azure AI Engineer",
    techUsed:
      "Azure Bot Service, Azure Bot SDK (Dispatch & Orchestrator), Node w/TypeScript, Azure Build Pipelines, QnA Maker, LUIS",
    description:
      "Worked with [REDACTED], a Fortune 100 company, as a Core BTS engineer. I rebuilt the existing chatbot solution from scratch inside of Bot Orchestrator to migrate away from Bot Dispatch.",
    companyColor: coreBtsGradient,
    companyLogo: CoreBTSLogo,
  },
  {
    companyName: "Carlisle Companies Inc",
    startDate: "November 2021",
    endDate: "December 2021",
    role: "Full Stack Engineer",
    techUsed: "React, TypeScript, Python, Flask, SQL Server, SSMS",
    description:
      "Worked with Carlisle Companies as a Smart Data developer, helping to add new workflows to an existing React/TS web application with a Flask back-end built on a SQL Server database.",
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
    techUsed: "Python, TensorFlow, Google Colab, React, TypeScript, Docker",
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
    techUsed: "React, TypeScript, Cloud Firestore",
    description:
      "Worked on React/TS code for a project with Google Cloud, including file upload to Cloud Firestore and basic page templates.",
    companyColor: "rgb(68, 132, 244)",
    companyLogo: GoogleLogo,
  },
];
