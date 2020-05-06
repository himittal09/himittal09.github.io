import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent {

  // name of the project
  @Input() projectTitle: string;
  
  // deployed project link
  @Input() projectPublicLink: string;

  // all technologies used in making project
  @Input() projectStack: string[];

  // starcount in the repo
  @Input() starCount: number;

  // forkcount in the repo
  @Input() forkCount: number;

  // long description, supports markdown
  @Input() description: string;

  // for quick overview
  @Input() shortDescription: string;

  // for displaying correctly
  @Input() iconType: 'svg' | 'png';

  // give only name, not path
  @Input() iconName: string;

  // give absolute path
  @Input() projectGithubLink: string;
  
  // mention either employer or semester if learning
  @Input() madeFor: string;

  // when did project development start
  @Input() developmentStartDate?: Date;

  // when did project development end
  @Input() developmentEndDate?: Date;

  // is project under development
  @Input() isUnderDevelopment: boolean;

  // to show project in website or not
  @Input() toShow?: boolean;
}
