import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent {

  // name of the project
  @Input() projectTitle: string = '';
  
  // deployed project link
  @Input() projectPublicLink: string | undefined = undefined;

  // all technologies used in making project
  @Input() projectStack: string[] = [];

  // starcount in the repo
  @Input() starCount: number = 0;

  // forkcount in the repo
  @Input() forkCount: number = 0;

  // long description, supports markdown
  @Input() description: string = '';

  // for quick overview
  @Input() shortDescription: string = '';

  // for displaying correctly
  @Input() iconType: 'svg' | 'png' = 'png';

  // give only name, not path
  @Input() iconName: string | undefined = undefined;

  // give absolute path
  @Input() projectGithubLink: string | undefined = undefined;
  
  // mention either employer or semester if learning
  @Input() madeFor: string = '';

  // when did project development start
  @Input() developmentStartDate?: Date;

  // when did project development end
  @Input() developmentEndDate?: Date;

  // is project under development
  @Input() isUnderDevelopment: boolean = true;
}
