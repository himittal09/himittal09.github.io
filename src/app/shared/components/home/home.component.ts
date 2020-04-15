import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matIconRegisty: MatIconRegistry, private domSanitizer: DomSanitizer) {
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
  }

  ngOnInit(): void {
  }

}
