import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { first } from 'rxjs/operators';

import { blogPost } from '@app/blog/blog_post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BlogCardComponent implements OnInit {

  blog: blogPost;
  blogPostLiked: boolean = false;
  preetyDate: string = '';

  constructor(private route: ActivatedRoute, private title: Title, private service: BlogService) {
    this.blog = new blogPost(0, '', '', new Date());
  }

  ngOnInit(): void {
    let routedString = this.route.snapshot.url[0].toString();
    routedString = decodeURI(routedString);
    this.title.setTitle(routedString);

    this.route.data.pipe(first()).subscribe({
      next: (ss) => {
        this.blog = ss.blog;
        this.blog.body = this.blog.body.replace('\\n','\n');
        // work on this fucking piece of shit fuck
        this.preetyDate = this.blog.date.toLocaleDateString('en-IN');
      },
      error: (error) => console.log(error)
    });
  }

  likeBlogPost ()
  {
    this.blogPostLiked = true;
    this.blog.likes++;
    const blogId: string = <string>this.blog.docID;
    this.service.likeOneBlog(blogId).catch(error => {
      console.log(error);
      this.blogPostLiked = false;
      this.blog.likes--;
    });
  }

}
