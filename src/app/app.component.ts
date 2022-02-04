import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.loading = event instanceof NavigationStart;
    });
  }
}

// see following for cors configuration for downloading resumes
// https://firebase.google.com/docs/storage/web/download-files
