import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

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
    this.imageURL = this.domSanitizer.bypassSecurityTrustStyle(`url(${'../../../../assets/pictures/b2.jpg'})`);
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
  

}
