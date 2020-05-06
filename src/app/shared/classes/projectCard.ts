export interface ProjectCard {
  projectTitle: string; // name of the project
  projectPublicLink?: string; // deployed project link
  projectGithubLink?: string; // give absolute path
  projectStack: string[]; // all technologies used in making project
  starCount: number; // starcount in the repo
  forkCount: number; // forkcount in the repo
  description: string; // long description, supports markdown
  shortDescription: string; // for quick overview
  iconType?: 'svg' | 'png'; // for displaying correctly
  iconName?: string; // give only name, not path
  madeFor: string; // mention either employer or semester if learning
  developmentStartDate?: Date;
  developmentEndDate?: Date;
  isUnderDevelopment: boolean; // is project under development
  toShow?: boolean; // to show project in website or not
};