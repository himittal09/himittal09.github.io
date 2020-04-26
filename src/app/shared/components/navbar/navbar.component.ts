import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private ss: SharedService,
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

  getResume () {
    this.ss.getResume('https://firebasestorage.googleapis.com/v0/b/portfolio-60c77.appspot.com/o/Resumes%2FInternshala-Himanshu%20Mittal.pdf?alt=media&token=abc6753a-c01a-4617-aba5-6010b7de4714');
  }

  changeTheme() {
    this.ss.toggleTheme();
  }

  get isDayTheme (): boolean {
    return this.ss.isDayTheme;
  }

}
