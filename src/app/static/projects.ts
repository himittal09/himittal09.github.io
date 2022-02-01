export interface ProjectCard {
  projectTitle: string; // name of the project
  projectPublicLink?: string; // deployed project link
  projectGithubLink?: string; // give absolute path
  projectStack: string[]; // all technologies used in making project
  starCount: number; // starcount in the repo
  forkCount: number; // forkcount in the repo
  description: string; // long description, supports markdown
  shortDescription: string; // for quick overview
  iconType: 'svg' | 'png'; // for displaying correctly
  iconName?: string; // give only name, not path
  madeFor: string; // mention either employer or semester if learning
  developmentStartDate?: Date;
  developmentEndDate?: Date;
  isUnderDevelopment: boolean; // is project under development
  toShow?: boolean; // to show project in website or not
  displayOrder?: number; // the order in which the projects must be displayed to the user
}

export const projects: ProjectCard[] = [
  {
    developmentEndDate: new Date(1586629800),
    projectTitle: 'Productivity Tracker',
    projectGithubLink: 'https://github.com/himittal09/mca-II-project',
    toShow: true,
    iconType: 'svg',
    iconName: 'productivity_tracker_icon',
    projectPublicLink: '',
    madeFor: 'MCA II',
    forkCount: 0,
    displayOrder: 10,
    description: 'This console based application allows user to authenticate and track their goals and activities.',
    starCount: 0,
    isUnderDevelopment: false,
    developmentStartDate: new Date(1578681000),
    projectStack: [
      'C++'
    ],
    shortDescription: 'C++ console based application',
  },
  {
    developmentEndDate: new Date(1518287400),
    projectPublicLink: '',
    isUnderDevelopment: false,
    forkCount: 0,
    toShow: true,
    developmentStartDate: new Date(1502044200),
    projectStack: [
      'Node.js',
      'Angular',
      'MongoDB',
      'Expressjs'
    ],
    projectTitle: 'Exam Analysis System',
    projectGithubLink: 'https://github.com/himittal09/Final-Year-Project',
    madeFor: 'BCA III',
    iconType: 'svg',
    starCount: 0,
    shortDescription: 'MEAN Stack based application',
    displayOrder: 30,
    description: 'The web app allows users to register, give exams and get analytical insights about their performance.',
    iconName: 'exam_analysis_icon'
  },
  {
    toShow: true,
    starCount: 0,
    shortDescription: 'MEAN Stack based application',
    madeFor: 'Self',
    iconType: 'png',
    projectPublicLink: '',
    projectGithubLink: 'https://github.com/himittal09/himittal09.github.io',
    iconName: 'icon-512x512',
    isUnderDevelopment: true,
    developmentStartDate: new Date(1586629800),
    forkCount: 0,
    description: 'This is My personal Portfolio. build to showcase my qualifications and achievements.',
    projectStack: [
      'Angular',
      'Firebase',
      'Material'
    ],
    displayOrder: 30,
    projectTitle: 'Himanshu Portfolio',
  },
  {
    displayOrder: 40,
    starCount: 0,
    iconName: 'chat_icon',
    shortDescription: 'Socket based chat application',
    madeFor: 'Self',
    developmentStartDate: new Date(1505154600),
    projectStack: [
      'Nodejs',
      'SocketIO',
      'expressJS'
    ],
    toShow: true,
    projectGithubLink: 'https://github.com/himittal09/node-chat-app',
    isUnderDevelopment: false,
    developmentEndDate: new Date(1506969000),
    description: 'This website allows users to create rooms and chat with each other, and send locations.',
    projectPublicLink: '',
    iconType: 'svg',
    forkCount: 0,
    projectTitle: 'Node Chat App'
  }
];
