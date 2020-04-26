import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  
  constructor(private route: ActivatedRoute) { }

  routedString: string;

  ngOnInit(): void {
    this.routedString = this.route.snapshot.url[0].toString();
  }

}
