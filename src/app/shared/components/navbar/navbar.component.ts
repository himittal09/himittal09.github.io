import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'sun_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/sun_icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/moon_icon.svg')
    );
  }

  changeTheme() {
    document.body.classList.toggle('my-dark-theme');
  }

  get isDayTheme(): boolean {
    const cl: DOMTokenList = document.body.classList;
    return !cl.contains('my-dark-theme');
  }

}
