import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { ContactComponent } from './contact.component';
import { ConfirmDialougComponent } from './confirm-dialoug.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent,
    ConfirmDialougComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class ContactModule { }
