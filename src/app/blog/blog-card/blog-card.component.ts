import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { first } from 'rxjs/operators';

import { blogPost } from '@app/shared/classes/blog_post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  blog: blogPost;
  blogPostLiked: boolean = false;

  preetyDate: string;

  constructor(private route: ActivatedRoute, private title: Title, private service: BlogService) {}

  ngOnInit(): void {
    let routedString = this.route.snapshot.url[0].toString();
    routedString = decodeURI(routedString);
    this.title.setTitle(routedString);

    this.route.data.pipe(first()).subscribe({
      next: (ss) => {
        this.blog = ss.blog;
        // work on this fucking piece of shit fuck
        let fuckthisshit = this.blog.date.toDate();
        this.preetyDate = fuckthisshit.toLocaleDateString('en-IN');
      },
      error: (error) => console.log(error)
    });
  }

  likeBlogPost ()
  {
    this.blogPostLiked = true;
    this.blog.likes++;
    this.service.likeOneBlog(this.blog.docID).catch(error => {
      console.log(error);
      this.blogPostLiked = false;
      this.blog.likes--;
    });
  }

}
