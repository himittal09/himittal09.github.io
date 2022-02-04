import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BlogPost } from '@app/blog/blog_post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {

  displayMessage = 'Loading blogs...';

  constructor(private title: Title, private service: BlogService, private router: Router, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title.setTitle('Himanshu Mittal | Blog');

    this.getNextBlogs(true).then(() => {
      this.ref.detectChanges();
      if (this.isLast && !this.blogs.length)
      {
        this.displayMessage = 'No Blogs to display!!';
      }
    }).catch(error => console.log(error));
  }

  getNextBlogs(firstFetch: boolean): Promise<void> {
    return this.service.getBlogList(firstFetch);
  }

  get isLast(): boolean
  {
    return this.service.isLastBlog;
  }

  get blogs(): BlogPost[]
  {
    return this.service.blogs;
  }

  redirectToBlog(title: string)
  {
    this.router.navigate(['blog', title]);
  }
}
