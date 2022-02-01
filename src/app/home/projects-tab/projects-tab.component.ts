import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { ProjectCard, projects } from '../../static/projects';

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ProjectsTabComponent implements OnInit {

  projects: ProjectCard[] = [];
  message = 'Fetching Projects, please wait!!';

  constructor(private matIconRegisty: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.projects = projects;
    if (!projects.length) {
      this.message = 'No Projects to show!!';
    }
  }

  ngOnInit()
  {
    this.projects.forEach((project: ProjectCard) => {
      if (project.iconType === 'svg') {
        this.matIconRegisty.addSvgIcon(
          project.iconName as string,
          this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/${project.iconName}.svg`)
        );
      }
    });
  }

}
