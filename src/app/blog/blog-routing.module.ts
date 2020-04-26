import { Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
      path: ':blogId',
      component: BlogCardComponent
  }
];