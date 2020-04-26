import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss']
})
export class ProjectsTabComponent implements OnInit {

  constructor(private matIconRegisty: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegisty.addSvgIcon(
      'chat_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/chat_icon.svg')
    );
    this.matIconRegisty.addSvgIcon(
      'exam_analysis_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/exam_analysis_icon.svg')
    );
    this.matIconRegisty.addSvgIcon(
      'productivity_tracker_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/productivity_tracker.svg')
    );
  }

  // if you ever make the star and fork count fetch directly
  // https://api.github.com/repos/himittal09/mca-II-project
  // this is the api call
  // check for rate abuse limits
  // GitHub api call rate limit is 6 per hour per IP
  ngOnInit(): void {
  }

  // consider using xpansion panel in this tab for the number of projects is just gonna increase

}
