import { ProjectStatusTypeEnum } from "../enums/project-status-type.enum";

export interface ProjectModel {
  title: string;
  description: string;
  status: ProjectStatusModel;
  stackThumbs: Array<string>;
  githubLink: string;
  photoSrc: string | null;
}

export interface ProjectStatusModel {
  title: string;
  type: ProjectStatusTypeEnum;
}
