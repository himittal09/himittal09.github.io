import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle, Title } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  imageURL: SafeStyle;

  constructor(private matIconRegisty: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private service: SharedService,
              private title: Title) {

    this.matIconRegisty.addSvgIcon(
      'GitHub_Icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/github.svg')
    );
    this.matIconRegisty.addSvgIcon(
      'Hackerrank_Icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/hackerrank.svg')
    );
    this.matIconRegisty.addSvgIcon(
      'LinkedIn_Icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/linkedin.svg')
    );
    this.matIconRegisty.addSvgIcon(
      'StackOverflow_Icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/stackoverflow.svg')
    );
    this.imageURL = this.domSanitizer.bypassSecurityTrustStyle(`url(${'../../../../assets/pictures/background_arch.webp'})`);

  }

  ngOnInit(): void {
    this.title.setTitle('Himanshu Mittal | Portfolio');
  }

  getResume() {
    const resumeName = 'Resume - Himanshu Mittal';

    const link = this.service.getResumeLink(resumeName);
    const pwa = window.open(link);

    // choosing to open in browser
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }

    //   // option 2: download in device
    //   let downloadLink: HTMLAnchorElement = document.createElement('a');
    //   downloadLink.href = link;
    // downloadLink.target = '_blank';
    //   downloadLink.download = `${resumeName}.pdf`;
    //   downloadLink.click();
  }

}
