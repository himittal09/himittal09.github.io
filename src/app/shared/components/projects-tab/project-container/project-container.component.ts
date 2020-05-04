import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent {
  @Input() projectTitle: string;
  @Input() projectLink: string;
  @Input() starCount: number;
  @Input() forkCount: number;
  @Input() description: string;
  @Input() projectType: string;
  @Input() madeDuring: string;
  @Input() projectStack: string
  @Input() iconName: string;
  @Input() iconType: 'svg' | 'png';
}
