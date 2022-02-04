import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-route-not-found',
  template: `
  <div class="mat-display-3">You Shall Not pass</div>
  <button type="button" [routerLink]="['/']" mat-stroked-button color="primary">Go Home</button>`,
  styleUrls: ['./route-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RouteNotFoundComponent {}
