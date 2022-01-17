import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeTabComponent } from '@app/home/home-tab/home-tab.component';
import { ProjectsTabComponent } from '@app/home/projects-tab/projects-tab.component';
import { AchievementsTabComponent } from '@app/home/achievements-tab/achievements-tab.component';
import { ProjectContainerComponent } from '@app/home/projects-tab/project-container/project-container.component';
import { HomeComponent } from '@app/home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

export const homeRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectsTabComponent
  },
  {
    path: 'achievements',
    component: AchievementsTabComponent
  },
  {
    path: '',
    component: HomeTabComponent
  },
];

@NgModule({
  declarations: [
    HomeTabComponent,
    ProjectsTabComponent,
    AchievementsTabComponent,
    ProjectContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
