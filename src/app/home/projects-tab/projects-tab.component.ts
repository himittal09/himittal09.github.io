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

  projects: ProjectCard[] = [];
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
    this.service.getProjectList().then((projects: ProjectCard[]) => {
      if (!projects.length)
      {
        this.message = 'No Projects to show!!';
      }
      projects.forEach((project: ProjectCard) => {
        if (project.iconType === 'svg')
        {
          this.matIconRegisty.addSvgIcon(
            project.iconName,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/${project.iconName}.svg`)
          );
        }
      });
      this.projects = projects;
    }).catch((error) => {
      this.message = 'No Projects to show!!';
      console.log(error);
    });
  }

}
