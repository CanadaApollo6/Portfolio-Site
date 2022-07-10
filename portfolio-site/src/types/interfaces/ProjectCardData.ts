import { ProjectGalleryData } from "./ProjectGalleryData";

export interface ProjectCardData {
  companyName: string;
  companyLogo: string;
  companyColor: string;
  role: string;
  startDate: string;
  endDate: string;
  techUsed: string;
  description: string;
  gallery?: ProjectGalleryData[];
}
