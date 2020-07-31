import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { ProjectCard } from '@app/shared/classes/projectCard';

import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss']
})
export class ProjectsTabComponent implements OnInit {

  projects: ProjectCard[] = [

    // {
    //   projectTitle: 'Productivity Tracker',
    //   projectGithubLink: 'https://github.com/himittal09/mca-II-project',
    //   starCount: 0,
    //   forkCount: 0,
    //   description: 'Here Goes some descrription',
    //   iconName: 'productivity_tracker_icon',
    //   iconType: 'svg',
    //   shortDescription: 'C++ console based application',
    //   madeFor: 'MCA II',
    //   projectStack: ['C++'],
    //   isUnderDevelopment: false,
    //   projectPublicLink: '',
    //   toShow: true,
    //   developmentStartDate: new Date(2020, 0, 11),
    //   developmentEndDate: new Date(2020, 3, 12)
    // },
    // {
    //   projectTitle: 'Exam Analysis System',
    //   projectGithubLink: 'https://github.com/himittal09/Final-Year-Project',
    //   starCount: 0,
    //   forkCount: 0,
    //   description: 'Here Goes some descrription',
    //   iconName: 'exam_analysis_icon',
    //   iconType: 'svg',
    //   shortDescription: 'MEAN Stack based application',
    //   madeFor: 'BCA III',
    //   projectStack: ['Node.js', 'Angular', 'MongoDB', 'Expressjs'],
    //   isUnderDevelopment: false,
    //   projectPublicLink: '',
    //   toShow: true,
    //   developmentEndDate: new Date(2018, 1, 11),
    //   developmentStartDate: new Date( 2017, 7, 7)
    // },
    // {
    //   projectTitle: 'Himanshu Portfolio',
    //   starCount: 0,
    //   forkCount: 0,
    //   description: 'Here Goes some descrription',
    //   iconName: 'icon-512x512',
    //   iconType: 'png',
    //   shortDescription: 'MEAN Stack based application',
    //   madeFor: 'Self',
    //   projectStack: ['Angular', 'Firebase', 'Material'],
    //   isUnderDevelopment: true,
    //   projectPublicLink: '',
    //   toShow: true,
    //   developmentStartDate: new Date(2020, 3, 12),
    //   projectGithubLink: 'https://github.com/himittal09/himittal09.github.io'
    // },
    // {
    //   projectTitle: 'Node Chat App',
    //   starCount: 0,
    //   forkCount: 0,
    //   description: 'Here Goes some descrription',
    //   iconName: 'chat_icon',
    //   iconType: 'svg',
    //   shortDescription: 'Socket based chat application',
    //   madeFor: 'Self',
    //   projectStack: ['Nodejs', 'SocketIO', 'expressJS'],
    //   isUnderDevelopment: false,
    //   projectPublicLink: '',
    //   toShow: true,
    //   developmentStartDate: new Date(2017, 8, 12),
    //   developmentEndDate: new Date(2017, 9, 3),
    //   projectGithubLink: 'https://github.com/himittal09/node-chat-app',
    // }

  ];
  message: string = 'Fetching Projects, please wait!!';

  constructor(private matIconRegisty: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private service: SharedService) {}

  // if you ever make the star and fork count fetch directly
  // https://api.github.com/repos/himittal09/mca-II-project
  // this is the api call
  // check for rate abuse limits
  // GitHub api call rate limit is 6 per hour per IP
  ngOnInit(): void {
    this.service.getProjectList().then((value) => {
      if (value.empty)
      {
        this.message = 'No Projects to show!!';
      }
      value.docs.forEach(tt => {
        let project = <ProjectCard>tt.data();
        if (project.iconType === 'svg')
        {
          this.matIconRegisty.addSvgIcon(
            project.iconName,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/${project.iconName}.svg`)
          );
        }
        this.projects.push(project);
      });
    }).catch((error) => console.log(error));

    // this.projects.forEach((project) => {
    //       if (project.iconType === 'svg')
    //     {
    //       this.matIconRegisty.addSvgIcon(
    //         project.iconName,
    //         this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/${project.iconName}.svg`)
    //       );
    //     }
    // });
  }

  // consider using xpansion panel in this tab for the number of projects is just gonna increase
  // can fetch only 10 items from the backend

}
