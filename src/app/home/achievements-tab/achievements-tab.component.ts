import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/shared/services/shared.service';

export class Achievement {
  title: string;
  year: number;
  cretificateLink: string;
}

@Component({
  selector: 'app-achievements-tab',
  templateUrl: './achievements-tab.component.html',
  styleUrls: ['./achievements-tab.component.scss']
})
export class AchievementsTabComponent implements OnInit {

  memeLink: string = '';

  achievements: Achievement[] = [
    {
      title: 'Won 1st Prize in “Coding Competition” in ‘DI-Tech Fest 2016’ organized by DIMAT.',
      year: 2017,
      cretificateLink: ''
    },
    {
      title: 'Won 1st Prize in “Presentation Maniac”, to prepare and present for an on spot topic organized by Disha College.',
      year: 2016,
      cretificateLink:'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Attended one day workshop on “Competitive Mathematics” held in NIT Raipur.',
      year: 2016,
      cretificateLink: ''
    },
    {
      title: 'Contributed in Adore India (The Council which believes in Motivating Youth for Positive Action).',
      year: 2017,
      cretificateLink: ''
    },
    {
      title: 'Won 1st Prize in “Inter-house Debate Competition” held in Hasdeo Public School.',
      year: 2015,
      cretificateLink: ''
    },
    {
      title: 'Participated in “Entrepreneurship Awareness Camp” organized by CITCON for NSTEDB.',
      year: 2016,
      cretificateLink: ''
    }
  ];

  constructor(private ss: SharedService) { }

  ngOnInit(): void {
    // this.ss.getAchievementList().then((value) => {
    //   if (value.empty)
    //   {
    //     this.memeLink = 'https://memegenerator.net/img/instances/39670850/heres-where-id-put-my-achievements-if-i-had-any.jpg';
    //   }
    //   value.docs.forEach(tt => this.achievements.push(<Achievement>tt.data()));
    // });
  }

}
