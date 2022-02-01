import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart)
      {
        this.loading = true;
      }
      else if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError)
      {
        this.loading = false;
      }
    });
  }
}

// see following for cors configuration for downloading resumes
// https://firebase.google.com/docs/storage/web/download-files
