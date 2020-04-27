import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

const blogRoutes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
      path: ':blogId',
      component: BlogCardComponent
  }
];

@NgModule({
  declarations: [
    BlogListComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogModule {}
