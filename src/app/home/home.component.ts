import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, Title } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  getResume () {
    const resumeName = 'Resume - Himanshu Mittal';

    this.service.getResumeLink(resumeName).then((link) => {

      let pwa = window.open(link);
      
      if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
      }

    }).catch((error) => {
      console.log(error);
    });

    // this.service.getResume(resumeName).then((obj: Blob) => {
    //   let blob = obj;
    //   let url = window.URL.createObjectURL(blob);

    //   // yo can choose any or both options from below

    //   // option 1: pop open in browser
    //   let pwa = window.open(url);
    //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //     alert( 'Please disable your Pop-up blocker and try again.');
    //   }

    //   // option 2: download in device
    //   let downloadLink: HTMLAnchorElement = document.createElement('a');
    //   downloadLink.href = url;
    // downloadLink.target = '_blank';
    //   downloadLink.download = `${resumeName}.pdf`;
    //   downloadLink.click();

    // }).catch((error) => {
    //   console.log(error);
    // });
  }

}
