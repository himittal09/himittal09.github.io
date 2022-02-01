import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { MarkdownModule } from 'ngx-markdown';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';

const blogRoutes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: ':blogId',
    component: BlogCardComponent,
    resolve: {
      blog: BlogResolver
    }
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
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(blogRoutes),
    MarkdownModule.forRoot()
  ],
  providers: [
    BlogResolver,
    BlogService
  ]
})
export class BlogModule {

  constructor()
  {

    // import('./assets/js/marked/marked.min.js').then((aaa) => console.log(aaa), (e) => console.log(e));

  }

}
