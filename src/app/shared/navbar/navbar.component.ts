import { ChangeDetectionStrategy, Component, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private _doc: Document,

  ) {
    this.matIconRegistry.addSvgIcon(
      'sun_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/sun_icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/moon_icon.svg')
    );

    if (isPlatformBrowser(this.platformId)) {
      let a = window.matchMedia('(prefers-color-scheme: dark)');
      let c = document.body.classList;
      a.addEventListener('change', (b) => {
        if (b.matches) c.add('my-dark-theme');
        else c.remove('my-dark-theme');
      });
    }
    if (isPlatformServer(this.platformId)) {
      let xx = this._doc.defaultView;
      if (!xx) {
        return;
      }
      let a = xx.matchMedia('(prefers-color-scheme: dark)');
      let c = this._doc.body.classList;
      a.addEventListener('change', (b) => {
        if (b.matches) c.add('my-dark-theme');
        else c.remove('my-dark-theme');
      });
    }
  }

  changeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('my-dark-theme');
    }
    if (isPlatformServer(this.platformId)) {
      this._doc.body.classList.toggle('my-dark-theme');
    }
  }

  get isDayTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const cl: DOMTokenList = document.body.classList;
      return !cl.contains('my-dark-theme');
    }
    if (isPlatformServer(this.platformId)) {
      const cl: DOMTokenList = this._doc.body.classList;
      return !cl.contains('my-dark-theme');
    }
    return true;
  }

}
