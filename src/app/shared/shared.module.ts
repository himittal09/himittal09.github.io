import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTabComponent } from '@components/home-tab/home-tab.component';
import { ProjectsTabComponent } from '@components/projects-tab/projects-tab.component';
import { AchievementsTabComponent } from '@components/achievements-tab/achievements-tab.component';
import { ProjectContainerComponent } from './components/projects-tab/project-container/project-container.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    HomeTabComponent,
    ProjectsTabComponent,
    AchievementsTabComponent,
    ProjectContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  exports: [
    HomeTabComponent,
    ProjectsTabComponent,
    AchievementsTabComponent,
    ProjectContainerComponent
  ]
})
export class SharedModule { }
