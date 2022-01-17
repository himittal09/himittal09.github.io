import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { Achievement, achievements } from '../../static/achievements';

@Component({
  selector: 'app-achievements-tab',
  templateUrl: './achievements-tab.component.html',
  styleUrls: ['./achievements-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AchievementsTabComponent {

  memeLink: string = '';
  achievements: Achievement[] = [];

  constructor() {
    this.achievements = achievements;
    if (!this.achievements.length)
    {
      this.memeLink = 'assets/pictures/heres-where-id-put-my-achievements-if-i-had-any.jpg';
    }
  }

}
