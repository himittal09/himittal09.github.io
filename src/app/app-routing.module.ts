import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { RouteNotFoundComponent } from './shared/components/route-not-found/route-not-found.component';

import { blogRoutes } from './blog/blog-routing.module';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    children: blogRoutes
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: RouteNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
