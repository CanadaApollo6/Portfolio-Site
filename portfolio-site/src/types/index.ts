export interface SkillAvatarProps {
    imageSrc: string;
    skillName: string;
}

export const spotifyGreen = "#1db954";
export const spotifyBlack = "#191414";

export interface ProjectCardData {
    companyName: string;
    companyLogo: string;
    companyColor: string;
    role: string;
    startDate: string;
    endDate: string;
    techUsed: string;
    description: string;
}

export interface NavButtonData {
    label: string;
    sectionId: string;
}

export interface ReviewCardData {
    quote: string;
    reviewerName: string;
    reviewerTitle: string;
    reviewerCompany: string;
}

export interface BioStepData {
    stepOneTitle: string;
    stepOneDescription: string;
    stepOneImage: string;
    stepTwoTitle: string;
    stepTwoDescription: string;
    stepTwoImage: string;
    stepThreeTitle: string;
    stepThreeDescription: string;
    stepThreeImage: string;
}
