import { BioStepData } from "../types";
import SDLogo1 from "../images/logos/sd-logo1.png";
import SDLogo2 from "../images/logos/sd-logo2.png";
import CoreBTSPhoto from "../images/logos/corebts-photo.png";

export const bioSteps: BioStepData[] = [
  {
    step: "01",
    title: "University of Dayton",
    description:
      "I attended the University of Dayton from 2016-2020, earning a 3.89 GPA while playing in the Pride of Dayton Marching Band and Dayton Jazz Ensemble. I graduated with a B. Sc. in Biology, minors in Chemistry and Geology, and a 2-year GIS graduate certificate.",
    image:
      "https://images.unsplash.com/photo-1601510683322-a4d0c7131572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    step: "02",
    title: "Smart Data - Intern",
    description:
      "From May of 2020 until August of that same year, I became a software developer intern at Smart Data. I spent my time doing hundreds of hours of learning from other developers and online courses from Udemy, along with some basic React development on a project for Google Cloud.",
    image: SDLogo2,
  },
  {
    step: "03",
    title: "Smart Data - Software Engineer",
    description:
      "After my internship ended, I accepted an offer in August of 2020 to remain at Smart Data and become a full-time software engineer. I completed multiple projects for various clients and tech stacks.",
    image: SDLogo1,
  },
  {
    step: "04",
    title: "Core BTS - Sr. Software Engineer",
    description:
      "After almost 2 years at Smart Data, I accepted a role at Core BTS to become a Sr. Software Engineer, where I am now. In May 2022, I received an internal Award of Excellence from Core BTS and July 2022 saw me join the company's Center of Excellence.",
    image: CoreBTSPhoto,
  },
];
