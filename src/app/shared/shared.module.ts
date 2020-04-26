import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTabComponent } from '@components/home-tab/home-tab.component';
import { ProjectsTabComponent } from '@components/projects-tab/projects-tab.component';
import { ExpertiseTabComponent } from '@components/expertise-tab/expertise-tab.component';
import { AchievementsTabComponent } from '@components/achievements-tab/achievements-tab.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HomeTabComponent,
    ProjectsTabComponent,
    ExpertiseTabComponent,
    AchievementsTabComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    HomeTabComponent,
    ProjectsTabComponent,
    ExpertiseTabComponent,
    AchievementsTabComponent
  ]
})
export class SharedModule { }
