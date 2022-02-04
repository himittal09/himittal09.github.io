import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { RouteNotFoundComponent } from '@app/shared/route-not-found/route-not-found.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RouteNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    RouteNotFoundComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
