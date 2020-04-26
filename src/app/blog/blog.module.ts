import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';

import { MatCardModule } from '@angular/material/card';

import 'firebase/firestore';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class BlogModule {}
