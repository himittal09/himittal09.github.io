import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageURL: SafeStyle;
  selectedTabID: number = 1;

  constructor(private matIconRegisty: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private service: SharedService,
              private route: ActivatedRoute) {
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
    this.imageURL = this.domSanitizer.bypassSecurityTrustStyle(`url(${'../../../../assets/pictures/background_arch.jpg'})`);
  }

/**
  home -> 0
  projects -> 1
  expertise -> 2
  achievements -> 3
 */

  ngOnInit(): void {
    // this.route.fragment <- a observable observing changes in the fragments
    // let fragment: string = this.route.snapshot.fragment;
    // if (!fragment || fragment === 'home')
    // {
    //   this.selectedTabID = 0;
    // }

    

    // on init, access the fragent, and set the selectedTabID accordingly
    // set 0 on default, if no fragment
    // also counter for illegal fragments
  }

  changeID () {
    // console.log(this.selectedTabID);
    // this.route.
    // on chnage, remove the previous frgament, and set a new fragment
  }

  ngOnDestroy () {
    // remove the fragment on destroy
  }

  getResume () {
    const resumeName = 'Internshala-Himanshu_Mittal';

    this.service.getResume(resumeName).then((obj: Blob) => {
      let blob = obj;
      let url = window.URL.createObjectURL(blob);

      // yo can choose any or both options from below

      // option 1: pop open in browser
      let pwa = window.open(url);
      if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
      }

      // option 2: download in device
      let downloadLink: HTMLAnchorElement = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `${resumeName}.pdf`;
      downloadLink.click();

    }).catch((error) => {
      console.log(error);
    });
  }
  

}
