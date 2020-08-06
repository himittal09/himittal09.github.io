import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/shared/services/shared.service';

import { Achievement } from '@app/shared/classes/achievement';

@Component({
  selector: 'app-achievements-tab',
  templateUrl: './achievements-tab.component.html',
  styleUrls: ['./achievements-tab.component.scss']
})
export class AchievementsTabComponent implements OnInit {

  memeLink: string = '';
  achievements: Achievement[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getAchievementList().then((value) => {
      if (!value.length)
      {
        this.memeLink = 'https://memegenerator.net/img/instances/39670850/heres-where-id-put-my-achievements-if-i-had-any.jpg';
      }
      this.achievements = value;
    }).catch((error) => {
      console.log(error);
      this.memeLink = 'https://memegenerator.net/img/instances/39670850/heres-where-id-put-my-achievements-if-i-had-any.jpg';
    });
  }

}
