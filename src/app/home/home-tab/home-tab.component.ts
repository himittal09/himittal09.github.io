import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss']
})
export class HomeTabComponent {

  age: number;

  constructor() {
    let birthDayDiff = new Date().getTime() - 873052200000;
    this.age = new Date(birthDayDiff).getUTCFullYear() - 1970;
  }

}
